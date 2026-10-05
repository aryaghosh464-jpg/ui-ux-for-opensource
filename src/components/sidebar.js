// ========================================================
// ContribLens — Sidebar Navigation Component
// ========================================================
import { Icons } from './icons.js';
import { mockRepositories, mockCurrentUser } from '../data/mockData.js';

export function renderSidebar(activeRoute = "dashboard") {
  return `
    <aside class="sidebar">
      <div class="sidebar-section-title">Workflow Explorer</div>
      
      <a href="#dashboard" class="sidebar-link ${activeRoute === 'dashboard' ? 'active' : ''}">
        ${Icons.activity(18)}
        <span>Dashboard</span>
      </a>

      <a href="#discover" class="sidebar-link ${activeRoute === 'discover' ? 'active' : ''}">
        ${Icons.search(18)}
        <span>Discover Repos</span>
        <span class="sidebar-count">${mockRepositories.length}</span>
      </a>

      <a href="#repo/fastapi" class="sidebar-link ${activeRoute === 'repo' ? 'active' : ''}">
        ${Icons.gitBranch(18)}
        <span>Active Repository</span>
        <span class="badge badge-green" style="font-size:0.65rem; margin-left:auto;">96 Score</span>
      </a>

      <a href="#issue/1428" class="sidebar-link ${activeRoute === 'issue' ? 'active' : ''}">
        ${Icons.issue(18)}
        <span>Issue #1428</span>
        <span class="sidebar-count">96% match</span>
      </a>

      <div class="sidebar-section">
        <div class="sidebar-section-title">AI Assistance</div>
        
        <a href="#mentor" class="sidebar-link ${activeRoute === 'mentor' ? 'active' : ''}">
          ${Icons.bot(18)}
          <span>Contribution Mentor</span>
          <span style="width: 8px; height: 8px; border-radius:50%; background:var(--primary); margin-left:auto; box-shadow: 0 0 8px var(--primary);"></span>
        </a>

        <a href="#simulate" class="sidebar-link ${activeRoute === 'simulate' ? 'active' : ''}">
          ${Icons.shield(18)}
          <span>Simulation Sandbox</span>
          <span class="badge badge-green" style="font-size:0.65rem; margin-left:auto;">Protected</span>
        </a>
      </div>

      <div class="sidebar-section">
        <div class="sidebar-section-title">Developer Hub</div>
        
        <a href="#profile" class="sidebar-link ${activeRoute === 'profile' ? 'active' : ''}">
          ${Icons.award(18)}
          <span>Achievements</span>
          <span class="sidebar-count">${mockCurrentUser.stats.achievementPoints} XP</span>
        </a>

        <a href="#onboarding" class="sidebar-link ${activeRoute === 'onboarding' ? 'active' : ''}">
          ${Icons.code(18)}
          <span>Update Skills</span>
        </a>
      </div>

      <!-- Safe Guard Info Box -->
      <div style="margin-top:auto; padding:14px; background:rgba(34,197,94,0.05); border:1px solid rgba(34,197,94,0.18); border-radius:var(--radius); font-size:0.75rem;">
        <div class="flex items-center gap-6" style="color:var(--primary-light); font-weight:600; margin-bottom:4px;">
          ${Icons.shield(14)}
          <span>Protected Sandbox</span>
        </div>
        <p style="color:var(--text-muted); line-height:1.4; font-size:0.72rem; margin:0;">
          ContribLens never commits or pushes to GitHub branches without your explicit multi-step authorization.
        </p>
      </div>
    </aside>
  `;
}
