// ========================================================
// ContribLens — Navbar Component
// ========================================================
import { Icons } from './icons.js';
import { mockCurrentUser } from '../data/mockData.js';

export function renderNavbar(activeRoute = "dashboard") {
  const isAuthPage = activeRoute === "login" || activeRoute === "landing";

  return `
    <header class="navbar">
      <div class="navbar-inner">
        <!-- Logo -->
        <a href="#landing" class="navbar-logo" title="ContribLens Home">
          ${Icons.logo(30)}
          <span>Contrib<span class="text-green">Lens</span></span>
          <span class="badge badge-green" style="font-size: 0.65rem; padding: 2px 7px; margin-left: 2px;">AI BETA</span>
        </a>

        ${!isAuthPage ? `
          <!-- Search trigger -->
          <div class="navbar-search" onclick="window.ContribLensApp && window.ContribLensApp.openSearchModal()">
            ${Icons.search(15)}
            <span>Search repos, issues, tags...</span>
            <kbd>⌘K</kbd>
          </div>

          <!-- Quick Navigation links -->
          <nav class="flex items-center gap-8" style="margin-left: 12px;">
            <a href="#dashboard" class="btn btn-ghost btn-sm ${activeRoute === 'dashboard' ? 'text-green font-semibold' : ''}">Dashboard</a>
            <a href="#discover" class="btn btn-ghost btn-sm ${activeRoute === 'discover' ? 'text-green font-semibold' : ''}">Discover</a>
            <a href="#mentor" class="btn btn-ghost btn-sm ${activeRoute === 'mentor' ? 'text-green font-semibold' : ''}">
              <span style="display:inline-block; width:6px; height:6px; border-radius:50%; background:var(--primary); margin-right:4px;"></span>
              AI Mentor
            </a>
            <a href="#simulate" class="btn btn-ghost btn-sm ${activeRoute === 'simulate' ? 'text-green font-semibold' : ''}">
              ${Icons.shield(13)}
              Simulation
            </a>
          </nav>
        ` : ''}

        <!-- Right actions -->
        <div class="navbar-actions">
          ${!isAuthPage ? `
            <!-- Notifications -->
            <button class="navbar-notification" title="Notifications" onclick="window.ContribLensApp && window.ContribLensApp.showToast('You have 2 new matched issues with 95%+ skill alignment!')">
              ${Icons.bell(18)}
              <span class="dot"></span>
            </button>

            <!-- User Avatar & Profile Link -->
            <a href="#profile" class="flex items-center gap-8" style="text-decoration:none;" title="View Profile">
              <div class="navbar-avatar">
                <img src="${mockCurrentUser.avatarUrl}" alt="${mockCurrentUser.name}" style="width:100%; height:100%; border-radius:50%; object-fit:cover;" />
              </div>
              <div class="user-meta" style="line-height:1.2; display: none;">
                <div style="font-size: 0.8125rem; font-weight:600; color:#fff;">${mockCurrentUser.name}</div>
                <div style="font-size: 0.6875rem; color:var(--text-muted);">${mockCurrentUser.stats.achievementPoints} XP</div>
              </div>
            </a>
          ` : `
            <a href="#login" class="btn btn-ghost btn-sm">Sign In</a>
            <a href="#onboarding" class="btn btn-primary btn-sm">Get Started</a>
          `}
        </div>
      </div>
    </header>
  `;
}
