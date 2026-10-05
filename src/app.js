// ========================================================
// ContribLens — Master Application Controller & Router
// Vanilla ES Modules, zero external dependencies required
// ========================================================

import { renderNavbar } from './components/navbar.js';
import { renderSidebar } from './components/sidebar.js';
import { renderLandingPage } from './pages/landing.js';
import { renderLoginPage } from './pages/login.js';
import { renderOnboardingPage } from './pages/onboarding.js';
import { renderDashboardPage } from './pages/dashboard.js';
import { renderDiscoverPage } from './pages/discover.js';
import { renderRepoDetailPage } from './pages/repoDetail.js';
import { renderIssueDetailPage } from './pages/issueDetail.js';
import { renderMentorPage } from './pages/mentor.js';
import { renderSimulationPage } from './pages/simulation.js';
import { renderProfilePage } from './pages/profile.js';
import { mockCurrentUser, mockMentorDialogue, mockRepositories } from './data/mockData.js';

class ContribLensApp {
  constructor() {
    this.root = document.getElementById('root');
    this.activeRoute = 'dashboard';
    this.routeParams = {};
    
    // Reactive application state
    this.state = {
      onboarding: { step: 1, languages: ['Python', 'TypeScript', 'Go'], experience: 'Intermediate' },
      discover: { search: '', language: 'All', sortBy: 'match' },
      repoTab: 'issues',
      simulation: { viewMode: 'split', testRan: true, isRunningTests: false },
      mentorDialogue: [...mockMentorDialogue]
    };

    window.ContribLensApp = this;
    this.init();
  }

  init() {
    // Listen for hash route changes
    window.addEventListener('hashchange', () => this.handleRouting());
    
    // Global keyboard shortcuts (Cmd+K / Ctrl+K)
    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        this.openSearchModal();
      }
    });

    // Default route
    if (!window.location.hash) {
      window.location.hash = '#dashboard';
    } else {
      this.handleRouting();
    }
  }

  handleRouting() {
    const hash = window.location.hash.replace(/^#\/?/, '') || 'dashboard';
    const parts = hash.split('/');
    const mainRoute = parts[0] || 'dashboard';
    const param = parts[1] || null;

    this.activeRoute = mainRoute;
    this.routeParams = { id: param };

    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Toast Notification helper
  showToast(message, type = 'success') {
    let toastContainer = document.getElementById('cl-toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'cl-toast-container';
      toastContainer.style.cssText = `
        position: fixed; bottom: 24px; right: 24px; z-index: 9999;
        display: flex; flex-direction: column; gap: 8px; pointer-events: none;
      `;
      document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.style.cssText = `
      background: #111; border: 1px solid var(--primary); color: #fff;
      padding: 12px 18px; border-radius: 8px; font-size: 0.84rem; font-weight: 500;
      box-shadow: 0 8px 30px rgba(0,0,0,0.7), 0 0 16px rgba(34,197,94,0.25);
      display: flex; align-items: center; gap: 10px; animation: slideUp 0.3s ease;
      pointer-events: auto;
    `;
    toast.innerHTML = `
      <span style="color:var(--primary); font-weight:bold;">✔</span>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // Search Modal Popover
  openSearchModal() {
    const existing = document.getElementById('cl-search-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'cl-search-modal';
    modal.style.cssText = `
      position: fixed; inset: 0; z-index: 1000;
      background: rgba(0,0,0,0.75); backdrop-filter: blur(8px);
      display: flex; align-items: flex-start; justify-content: center;
      padding-top: 100px; animation: fadeIn 0.2s ease;
    `;

    modal.innerHTML = `
      <div class="card" style="width: 100%; max-width: 560px; padding: 16px; border-color: rgba(34,197,94,0.4); box-shadow: 0 24px 48px rgba(0,0,0,0.8);">
        <div class="flex items-center gap-10" style="margin-bottom: 14px;">
          <input 
            id="cl-modal-input" 
            type="text" 
            class="input" 
            placeholder="Search repositories, issues, or tags (e.g. FastAPI, websockets)..." 
            autofocus 
          />
        </div>
        <div style="font-size: 0.75rem; color: var(--text-dim); text-transform: uppercase; margin-bottom: 8px; font-weight:600;">
          Quick Jump Repositories
        </div>
        <div class="flex flex-col gap-6" id="cl-modal-results">
          ${mockRepositories.slice(0, 4).map(r => `
            <a href="#repo/${r.id}" onclick="document.getElementById('cl-search-modal').remove()" class="card card-compact card-hover flex justify-between items-center" style="padding: 10px 14px; text-decoration:none;">
              <span class="mono" style="font-size:0.84rem; color:#fff;">${r.fullName}</span>
              <span class="badge badge-green" style="font-size:0.6875rem;">${r.healthScore} Health</span>
            </a>
          `).join('')}
        </div>
        <div class="flex justify-between items-center text-muted" style="margin-top: 14px; font-size: 0.72rem; border-top: 1px solid var(--border); padding-top: 10px;">
          <span>Navigation: <kbd class="mono">ESC</kbd> to close</span>
          <span class="text-green">ContribLens Search Engine</span>
        </div>
      </div>
    `;

    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.remove();
    });

    document.body.appendChild(modal);
    setTimeout(() => {
      const input = document.getElementById('cl-modal-input');
      if (input) input.focus();
    }, 50);

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        modal.remove();
        document.removeEventListener('keydown', onKeyDown);
      }
    };
    document.addEventListener('keydown', onKeyDown);
  }

  // --- ACTIONS ---

  loginWithProvider(provider) {
    this.showToast(`Signed in successfully with ${provider}!`);
    setTimeout(() => {
      window.location.hash = '#dashboard';
    }, 400);
  }

  setWizardStep(step) {
    this.state.onboarding.step = step;
    this.render();
  }

  toggleSkillLanguage(name) {
    const list = this.state.onboarding.languages;
    const index = list.indexOf(name);
    if (index > -1) {
      if (list.length > 1) list.splice(index, 1);
    } else {
      list.push(name);
    }
    this.render();
  }

  setExperience(exp) {
    this.state.onboarding.experience = exp;
    this.render();
  }

  finishOnboarding() {
    this.showToast("Skills updated! 18 issues matched to your profile.");
    setTimeout(() => {
      window.location.hash = '#dashboard';
    }, 400);
  }

  updateDiscoverSearch(query) {
    this.state.discover.search = query;
    this.render();
  }

  setDiscoverLanguage(lang) {
    this.state.discover.language = lang;
    this.render();
  }

  setDiscoverSort(sort) {
    this.state.discover.sortBy = sort;
    this.render();
  }

  setRepoTab(tab) {
    this.state.repoTab = tab;
    this.render();
  }

  setSimulationViewMode(mode) {
    this.state.simulation.viewMode = mode;
    this.render();
  }

  runSimulatedTests() {
    this.state.simulation.isRunningTests = true;
    this.render();
    this.showToast("Compiling isolated test suite in sandbox...");

    setTimeout(() => {
      this.state.simulation.isRunningTests = false;
      this.state.simulation.testRan = true;
      this.render();
      this.showToast("All 28 tests passed! Zero regressions detected.");
    }, 900);
  }

  markContributionComplete() {
    this.showToast("🎉 Contribution successfully finalized! 'Zero Regression Diff' achievement unlocked!");
    // Unlock achievement
    const ach = mockCurrentUser.achievements.find(a => a.id === 'clean-diff');
    if (ach) ach.unlocked = true;
    mockCurrentUser.stats.contributionsSimulated += 1;
    mockCurrentUser.stats.achievementPoints += 120;

    setTimeout(() => {
      window.location.hash = '#profile';
    }, 1000);
  }

  sendMentorMessage(userText) {
    if (!userText || !userText.trim()) return;

    // Add user message
    this.state.mentorDialogue.push({
      sender: "user",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: userText
    });
    this.render();

    // Scroll to bottom of chat
    setTimeout(() => {
      const chatEl = document.getElementById('mentor-chat-messages');
      if (chatEl) chatEl.scrollTop = chatEl.scrollHeight;
    }, 50);

    // AI Mentor response simulation
    setTimeout(() => {
      let reply = "";
      const lower = userText.toLowerCase();

      if (lower.includes("asgi") || lower.includes("disconnect")) {
        reply = `ASGI communicates connection states through discrete event dictionaries.\n\nWhen a client drops, the ASGI server transmits \`websocket.disconnect\`. However, if the TCP socket dies abruptly without an orderly close frame, ASGI worker coroutines bypass \`dependant.call\` catch clauses.\n\n**The Solution:**\nWrap the endpoint handler in \`fastapi/routing.py\` in an asynchronous \`finally:\` block invoking \`await websocket.ensure_cleanup()\`. This guarantees the connection pool removes the dead socket handle immediately.`;
      } else if (lower.includes("patch") || lower.includes("diff") || lower.includes("fastapi/websockets.py")) {
        reply = `Here is the clean idempotent cleanup method to add to \`WebSocket\` in \`fastapi/websockets.py\`:\n\n\`\`\`python\nasync def ensure_cleanup(self) -> None:\n    """Guarantee connection pool unregistration idempotently."""\n    if not getattr(self, "_is_cleaned_up", False):\n        self._is_cleaned_up = True\n        if self._pool_unregister_hook:\n            await self._pool_unregister_hook(self)\n\`\`\`\n\nYou can inspect the full side-by-side diff in the **Simulation Studio** tab!`;
      } else if (lower.includes("pytest") || lower.includes("test")) {
        reply = `To reproduce the abrupt TCP drop in pytest:\n\n\`\`\`python\nimport pytest\nfrom fastapi.testclient import TestClient\n\ndef test_abrupt_disconnect_cleanup(client: TestClient):\n    with pytest.raises(Exception):\n        with client.websocket_connect("/ws") as ws:\n            ws.close(code=1006)  # 1006 indicates abnormal closure\n    \n    # Verify pool count is zeroed out\n    assert len(client.app.state.active_websockets) == 0\n\`\`\`\n\nRun this in the Simulation test suite!`;
      } else {
        reply = `I have examined that aspect in relation to **tiangolo/fastapi #1428**.\n\nFastAPI relies on Starlette's underlying \`WebSocket\` primitive. Adding an idempotent finalize hook allows us to safeguard connection pools without changing any public method signatures.\n\nWould you like me to guide you through testing or jump straight into the **Simulation Studio**?`;
      }

      this.state.mentorDialogue.push({
        sender: "ai",
        model: "Gemma 4 + Qwen3-Coder",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: reply
      });
      this.render();

      setTimeout(() => {
        const chatEl = document.getElementById('mentor-chat-messages');
        if (chatEl) chatEl.scrollTop = chatEl.scrollHeight;
      }, 50);
    }, 600);
  }

  // --- RENDER MASTER SHELL ---
  render() {
    const route = this.activeRoute;
    const isFullPage = route === 'landing' || route === 'login' || route === 'onboarding';

    let contentHtml = '';
    switch (route) {
      case 'landing':
        contentHtml = renderLandingPage();
        break;
      case 'login':
        contentHtml = renderLoginPage();
        break;
      case 'onboarding':
        contentHtml = renderOnboardingPage(this.state.onboarding);
        break;
      case 'dashboard':
        contentHtml = renderDashboardPage();
        break;
      case 'discover':
        contentHtml = renderDiscoverPage(this.state.discover);
        break;
      case 'repo':
        contentHtml = renderRepoDetailPage(this.routeParams.id || 'fastapi', this.state.repoTab);
        break;
      case 'issue':
        contentHtml = renderIssueDetailPage(this.routeParams.id || '1428');
        break;
      case 'mentor':
        contentHtml = renderMentorPage(this.state.mentorDialogue);
        break;
      case 'simulate':
        contentHtml = renderSimulationPage(this.state.simulation);
        break;
      case 'profile':
        contentHtml = renderProfilePage();
        break;
      default:
        contentHtml = renderDashboardPage();
        break;
    }

    if (isFullPage) {
      this.root.innerHTML = `
        <div class="full-page">
          ${renderNavbar(route)}
          <div style="padding-top: var(--navbar-h); flex: 1;">
            ${contentHtml}
          </div>
        </div>
      `;
    } else {
      this.root.innerHTML = `
        <div class="app">
          ${renderNavbar(route)}
          <div class="app-body">
            ${renderSidebar(route)}
            <main class="main-content">
              ${contentHtml}
            </main>
          </div>
        </div>
      `;
    }
  }
}

// Start application on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new ContribLensApp();
});
