// ========================================================
// ContribLens — Repository Detail Page
// ========================================================
import { Icons } from '../components/icons.js';
import { mockRepositories, mockIssues } from '../data/mockData.js';

export function renderRepoDetailPage(repoId = 'fastapi', activeTab = 'issues') {
  const repo = mockRepositories.find(r => r.id === repoId) || mockRepositories[0];
  const repoIssues = mockIssues.filter(i => i.repoId === repo.id);

  // Sparkline bars calculation
  const maxCommit = Math.max(...repo.activityWeeklyCommits);

  return `
    <div class="animate-fade">
      
      <!-- Breadcrumb -->
      <div class="flex items-center gap-6 text-muted" style="font-size: 0.8125rem; margin-bottom: 16px;">
        <a href="#discover" class="hover:text-green">Discover</a>
        <span>/</span>
        <span style="color:#fff;" class="mono">${repo.fullName}</span>
      </div>

      <!-- Repo Header -->
      <div class="card" style="margin-bottom: 24px; border-color: rgba(34,197,94,0.3); background: linear-gradient(180deg, rgba(34,197,94,0.05) 0%, rgba(18,18,18,0.9) 100%);">
        <div class="flex justify-between items-start" style="flex-wrap: wrap; gap: 20px;">
          <div style="flex: 1; min-width: 280px;">
            <div class="flex items-center gap-8" style="margin-bottom: 8px;">
              <h1 style="font-size: 1.8rem; margin: 0;" class="mono">${repo.fullName}</h1>
              <span class="badge badge-green">${repo.skillMatchPercent}% Skill Match</span>
              <span class="badge badge-outline badge-gray">${repo.license}</span>
            </div>
            <p style="font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 16px;">
              ${repo.description}
            </p>
            <div class="flex items-center gap-16 text-muted" style="font-size: 0.8125rem; flex-wrap: wrap;">
              <span class="flex items-center gap-4 text-green">${Icons.star(14)} ${(repo.stars / 1000).toFixed(1)}k stars</span>
              <span class="flex items-center gap-4">${Icons.fork(14)} ${(repo.forks / 1000).toFixed(1)}k forks</span>
              <span>${repo.openIssues} open issues</span>
              <span>Branch: <code class="mono" style="color:var(--primary-light);">${repo.defaultBranch}</code></span>
            </div>
          </div>

          <!-- CTAs -->
          <div class="flex gap-8">
            <a href="https://github.com/${repo.fullName}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
              ${Icons.externalLink(14)}
              <span>GitHub</span>
            </a>
            <a href="#mentor" class="btn btn-primary">
              ${Icons.bot(15)}
              <span>Start AI Mentor</span>
            </a>
          </div>
        </div>
      </div>

      <!-- HEALTH SCORE & ACTIVITY HERO GRID -->
      <div class="grid grid-2 gap-24" style="margin-bottom: 28px;">
        
        <!-- Health Score Deep Dive -->
        <div class="card">
          <div class="flex justify-between items-center" style="margin-bottom: 16px;">
            <div>
              <div class="badge badge-green" style="margin-bottom: 4px;">VERIFIED TELEMETRY</div>
              <h3 style="font-size: 1.15rem; margin: 0;">Project Health Score</h3>
            </div>
            <div style="font-size: 1.8rem; font-weight: 800; color: var(--primary);">
              ${repo.healthScore}<span style="font-size: 1rem; color: var(--text-dim); font-weight: 400;">/100</span>
            </div>
          </div>

          <div class="flex flex-col gap-10" style="font-size: 0.8125rem;">
            <div>
              <div class="flex justify-between text-muted" style="margin-bottom: 4px;">
                <span>Documentation Depth & Guides</span>
                <span class="text-green font-semibold">${repo.healthBreakdown.documentation}%</span>
              </div>
              <div class="progress"><div class="progress-bar" style="width: ${repo.healthBreakdown.documentation}%;"></div></div>
            </div>

            <div>
              <div class="flex justify-between text-muted" style="margin-bottom: 4px;">
                <span>Community & Maintainer Activity</span>
                <span class="text-green font-semibold">${repo.healthBreakdown.communityActivity}%</span>
              </div>
              <div class="progress"><div class="progress-bar" style="width: ${repo.healthBreakdown.communityActivity}%;"></div></div>
            </div>

            <div class="flex justify-between items-center" style="padding: 10px; background: rgba(0,0,0,0.3); border-radius: var(--radius-sm); border: 1px solid var(--border); margin-top: 6px;">
              <span class="text-muted">Avg PR Merge Velocity:</span>
              <span class="text-green font-semibold">${repo.healthBreakdown.issueResponseTime}</span>
            </div>

            <div class="flex justify-between items-center" style="padding: 10px; background: rgba(0,0,0,0.3); border-radius: var(--radius-sm); border: 1px solid var(--border);">
              <span class="text-muted">PR Acceptance Ratio:</span>
              <span class="text-green font-semibold">${repo.healthBreakdown.prMergeRate}</span>
            </div>
          </div>
        </div>

        <!-- Weekly Activity & Commit Sparkline -->
        <div class="card flex flex-col justify-between">
          <div>
            <div class="flex justify-between items-center" style="margin-bottom: 8px;">
              <h3 style="font-size: 1.15rem; margin: 0;">Commit Velocity (Last 12 Weeks)</h3>
              <span class="badge badge-outline badge-gray">${repo.maintainerResponseRating} Velocity</span>
            </div>
            <p style="font-size: 0.8125rem; color: var(--text-muted); margin-bottom: 18px;">
              Steady pulse indicates active maintainers reviewing incoming PRs promptly.
            </p>

            <!-- Bar Chart Visualization -->
            <div style="display: flex; align-items: flex-end; gap: 8px; height: 90px; padding: 8px 0; border-bottom: 1px solid var(--border);">
              ${repo.activityWeeklyCommits.map((val, i) => {
                const heightPercent = Math.round((val / maxCommit) * 100);
                return `
                  <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap: 4px;">
                    <div 
                      title="Week ${i+1}: ${val} commits" 
                      style="width: 100%; height: ${heightPercent}%; background: ${i === repo.activityWeeklyCommits.length - 1 ? 'var(--primary)' : 'rgba(34,197,94,0.45)'}; border-radius: 3px 3px 0 0; transition: height 0.3s;"
                    ></div>
                    <span style="font-size: 0.6rem; color: var(--text-dim);">W${i+1}</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <div class="flex justify-between items-center text-muted" style="font-size: 0.75rem; margin-top: 14px;">
            <span>Total recorded commits: <strong>${repo.activityWeeklyCommits.reduce((a,b)=>a+b, 0)}</strong></span>
            <span class="text-green flex items-center gap-4">${Icons.checkCircle(13)} Zero stale contributor backlog</span>
          </div>
        </div>

      </div>

      <!-- REPOSITORY TABS -->
      <div class="tabs">
        <button class="tab ${activeTab === 'issues' ? 'active' : ''}" onclick="window.ContribLensApp && window.ContribLensApp.setRepoTab('issues')">
          Curated Issues (${repoIssues.length})
        </button>
        <button class="tab ${activeTab === 'structure' ? 'active' : ''}" onclick="window.ContribLensApp && window.ContribLensApp.setRepoTab('structure')">
          Codebase Structure
        </button>
        <button class="tab ${activeTab === 'guidelines' ? 'active' : ''}" onclick="window.ContribLensApp && window.ContribLensApp.setRepoTab('guidelines')">
          Contributing Guidelines
        </button>
      </div>

      <!-- TAB CONTENT: ISSUES -->
      ${activeTab === 'issues' ? `
        <div class="flex flex-col gap-12">
          ${repoIssues.map(issue => `
            <div class="card card-compact card-hover flex justify-between items-center" style="padding: 18px; flex-wrap: wrap; gap: 14px;">
              <div style="flex: 1; min-width: 280px;">
                <div class="flex items-center gap-8" style="margin-bottom: 6px;">
                  <span class="badge badge-green" style="font-size: 0.6875rem;">${issue.skillMatch}% Match</span>
                  <span class="badge ${issue.difficulty === 'Beginner' ? 'badge-blue' : 'badge-yellow'}" style="font-size: 0.6875rem;">${issue.difficulty}</span>
                  <span class="mono" style="font-size: 0.75rem; color: var(--text-dim);">#${issue.number}</span>
                </div>
                <a href="#issue/${issue.id}" style="font-weight: 600; font-size: 1rem; color: #fff;" class="hover:text-green">
                  ${issue.title}
                </a>
                <p style="font-size: 0.8125rem; color: var(--text-muted); margin: 6px 0 0; line-height: 1.4;">
                  ${issue.aiExplainer.summary}
                </p>
              </div>

              <div class="flex items-center gap-8">
                <a href="#issue/${issue.id}" class="btn btn-primary btn-sm">
                  <span>Explore Issue</span>
                  ${Icons.arrowRight(12)}
                </a>
              </div>
            </div>
          `).join('')}
        </div>
      ` : ''}

      <!-- TAB CONTENT: STRUCTURE -->
      ${activeTab === 'structure' ? `
        <div class="card" style="font-family: var(--font-mono); font-size: 0.8125rem;">
          <div class="flex justify-between items-center" style="margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 600; color: #fff;">Repository Architecture Tree</span>
            <span class="badge badge-green">3 Relevant Contribution Modules Highlighted</span>
          </div>
          <div style="line-height: 1.8; color: var(--text-secondary);">
            📁 fastapi/<br/>
            &nbsp;&nbsp;├── 📄 __init__.py<br/>
            &nbsp;&nbsp;├── 📄 applications.py<br/>
            &nbsp;&nbsp;├── 📄 <span style="color:var(--green-300); font-weight:600;">routing.py</span> <span class="badge badge-outline badge-green" style="font-size:0.6rem;">Target: Issue #1428</span><br/>
            &nbsp;&nbsp;├── 📄 <span style="color:var(--green-300); font-weight:600;">websockets.py</span> <span class="badge badge-outline badge-green" style="font-size:0.6rem;">Target: Issue #1428</span><br/>
            &nbsp;&nbsp;└── 📁 dependencies/<br/>
            📁 tests/<br/>
            &nbsp;&nbsp;├── 📄 <span style="color:var(--green-300); font-weight:600;">test_websocket_cleanup.py</span> <span class="badge badge-outline badge-green" style="font-size:0.6rem;">Reproduction Test</span><br/>
            &nbsp;&nbsp;└── 📄 test_tutorial.py<br/>
          </div>
        </div>
      ` : ''}

      <!-- TAB CONTENT: GUIDELINES -->
      ${activeTab === 'guidelines' ? `
        <div class="card" style="line-height: 1.6; font-size: 0.875rem;">
          <h3 style="margin-bottom: 12px;">FastAPI Contribution Rules (AI Extracted)</h3>
          <ul style="list-style: disc; padding-left: 20px; color: var(--text-secondary); display:flex; flex-direction:column; gap:8px;">
            <li>All PRs must include accompanying pytest tests under <code class="mono">tests/</code> with 100% test coverage.</li>
            <li>Run <code class="mono">ruff format</code> and <code class="mono">mypy --strict</code> locally before requesting maintainer review.</li>
            <li>Do not modify public function signatures without deprecation warnings.</li>
            <li>Keep PRs tightly focused on a single issue or bugfix.</li>
          </ul>
        </div>
      ` : ''}

    </div>
  `;
}
