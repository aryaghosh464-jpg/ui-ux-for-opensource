// ========================================================
// ContribLens — Dashboard Page
// ========================================================
import { Icons } from '../components/icons.js';
import { mockCurrentUser, mockRepositories, mockIssues } from '../data/mockData.js';

export function renderDashboardPage() {
  const topIssues = mockIssues;

  return `
    <div class="animate-fade">
      
      <!-- Welcome Card with Skills Bar -->
      <div class="card" style="margin-bottom: 28px; background: linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(20,20,20,0.9) 100%); border-color: rgba(34,197,94,0.25);">
        <div class="flex justify-between items-center" style="flex-wrap: wrap; gap: 16px;">
          <div>
            <div class="badge badge-green" style="margin-bottom: 8px;">
              ${Icons.shield(14)}
              <span>Safe Sandbox Active</span>
            </div>
            <h1 style="font-size: 1.8rem; margin-bottom: 6px;">Welcome back, ${mockCurrentUser.name}</h1>
            <p style="font-size: 0.875rem; color: var(--text-secondary); margin: 0;">
              Matched to <strong>18 high-confidence open source issues</strong> based on your 
              ${mockCurrentUser.languages.map(l => `<span class="badge badge-outline badge-gray" style="margin: 0 2px;">${l.name}</span>`).join('')} stack.
            </p>
          </div>
          <div class="flex gap-12">
            <a href="#discover" class="btn btn-secondary">
              ${Icons.search(15)}
              <span>Discover Repos</span>
            </a>
            <a href="#mentor" class="btn btn-primary">
              ${Icons.bot(15)}
              <span>Open AI Mentor</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Quick Metrics Grid -->
      <div class="grid grid-4 gap-16" style="margin-bottom: 28px;">
        
        <div class="card card-compact">
          <div class="flex justify-between items-center text-muted" style="font-size: 0.75rem; margin-bottom: 8px;">
            <span>Simulated Contributions</span>
            <span class="text-green">${Icons.shield(16)}</span>
          </div>
          <div class="stat-card-value text-green">${mockCurrentUser.stats.contributionsSimulated}</div>
          <div class="stat-card-label">0 production branch conflicts</div>
        </div>

        <div class="card card-compact">
          <div class="flex justify-between items-center text-muted" style="font-size: 0.75rem; margin-bottom: 8px;">
            <span>PRs Ready to Export</span>
            <span class="text-green">${Icons.gitBranch(16)}</span>
          </div>
          <div class="stat-card-value">${mockCurrentUser.stats.prsReady}</div>
          <div class="stat-card-label">Verified with test suite</div>
        </div>

        <div class="card card-compact">
          <div class="flex justify-between items-center text-muted" style="font-size: 0.75rem; margin-bottom: 8px;">
            <span>Repositories Explored</span>
            <span class="text-green">${Icons.code(16)}</span>
          </div>
          <div class="stat-card-value">${mockCurrentUser.stats.reposExplored}</div>
          <div class="stat-card-label">Avg Health: 94.2/100</div>
        </div>

        <div class="card card-compact">
          <div class="flex justify-between items-center text-muted" style="font-size: 0.75rem; margin-bottom: 8px;">
            <span>Achievement XP</span>
            <span class="text-green">${Icons.award(16)}</span>
          </div>
          <div class="stat-card-value text-green">${mockCurrentUser.stats.achievementPoints}</div>
          <div class="stat-card-label">4 badges unlocked</div>
        </div>

      </div>

      <!-- Main Columns: Recommended Repos & Flagship Simulation Box -->
      <div class="grid grid-2 gap-24" style="margin-bottom: 32px;">
        
        <!-- Active Sandbox Quick Jump -->
        <div class="card" style="border-color: rgba(34,197,94,0.3); background: rgba(18,22,18,0.7); display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <div class="flex justify-between items-center" style="margin-bottom: 12px;">
              <span class="badge badge-green">${Icons.shield(13)} ACTIVE SIMULATION IN PROGRESS</span>
              <span class="mono" style="font-size:0.75rem; color:var(--text-muted);">tiangolo/fastapi #1428</span>
            </div>
            <h3 style="margin-bottom: 8px;">Fix asynchronous websocket connection cleanup</h3>
            <p style="font-size: 0.8125rem; color: var(--text-secondary); line-height:1.5;">
              Your simulated patch in <code class="mono" style="color:var(--green-300);">fastapi/websockets.py</code> has passed all 28 automated pytest checks with +1.8% coverage.
            </p>
            
            <div style="margin: 16px 0; padding: 12px; background: rgba(0,0,0,0.4); border-radius: var(--radius-sm); border: 1px solid var(--border); font-size: 0.75rem;">
              <div class="flex justify-between items-center">
                <span>AI Review (Gemma 4 + Qwen3-Coder):</span>
                <span class="text-green font-semibold">APPROVED (98/100)</span>
              </div>
              <div class="flex justify-between items-center" style="margin-top: 6px;">
                <span>Automated Tests:</span>
                <span class="text-green font-semibold">28 / 28 PASSED</span>
              </div>
            </div>
          </div>

          <div class="flex gap-12">
            <a href="#simulate" class="btn btn-primary btn-sm flex-1">
              ${Icons.play(13)}
              <span>Open Simulation Studio</span>
            </a>
            <a href="#mentor" class="btn btn-secondary btn-sm">
              ${Icons.bot(13)}
              <span>Mentor Advice</span>
            </a>
          </div>
        </div>

        <!-- High Health Repositories -->
        <div class="card">
          <div class="flex justify-between items-center" style="margin-bottom: 16px;">
            <div>
              <h3 style="font-size: 1.1rem; margin:0;">Top Health Repositories</h3>
              <p style="font-size: 0.75rem; color: var(--text-muted); margin: 2px 0 0;">Highest responsive maintainer velocity</p>
            </div>
            <a href="#discover" style="font-size: 0.75rem; color: var(--primary);" class="hover:underline">View all →</a>
          </div>

          <div class="flex flex-col gap-12">
            ${mockRepositories.slice(0, 3).map(repo => `
              <a href="#repo/${repo.id}" class="card card-compact card-hover flex justify-between items-center" style="text-decoration:none; padding: 12px 14px; background: rgba(255,255,255,0.02);">
                <div>
                  <div class="flex items-center gap-8">
                    <span class="mono" style="font-weight:700; font-size:0.875rem; color:#fff;">${repo.fullName}</span>
                    <span class="badge badge-outline badge-gray" style="font-size:0.65rem;">${repo.primaryLanguage}</span>
                  </div>
                  <div class="flex items-center gap-12" style="font-size:0.75rem; color:var(--text-dim); margin-top:4px;">
                    <span>★ ${(repo.stars / 1000).toFixed(1)}k</span>
                    <span>${repo.healthBreakdown.issueResponseTime}</span>
                  </div>
                </div>
                <div class="text-center">
                  <div class="text-green font-semibold" style="font-size: 1.15rem;">${repo.healthScore}</div>
                  <div style="font-size: 0.625rem; color: var(--text-dim); text-transform:uppercase;">Health</div>
                </div>
              </a>
            `).join('')}
          </div>
        </div>

      </div>

      <!-- Matched Issues Section -->
      <div class="card" style="margin-bottom: 32px;">
        <div class="flex justify-between items-center" style="margin-bottom: 20px; flex-wrap:wrap; gap: 8px;">
          <div>
            <h3 style="font-size: 1.2rem; margin:0;">Curated Issues for Your Skills</h3>
            <p style="font-size: 0.8125rem; color: var(--text-muted); margin: 2px 0 0;">
              Filtered by Python, TypeScript, and Go with transparent root cause analysis.
            </p>
          </div>
          <div class="flex gap-8">
            <span class="badge badge-green">Match &gt; 75%</span>
            <span class="badge badge-outline badge-gray">Good First Issue</span>
          </div>
        </div>

        <div class="flex flex-col gap-12">
          ${topIssues.map(issue => `
            <div class="card card-compact card-hover flex justify-between items-center" style="padding: 16px; background: rgba(255,255,255,0.02); flex-wrap: wrap; gap: 14px;">
              <div style="flex: 1; min-width: 260px;">
                <div class="flex items-center gap-8" style="margin-bottom: 6px;">
                  <span class="mono" style="font-size: 0.75rem; color: var(--primary); font-weight:600;">${issue.repoName} #${issue.number}</span>
                  <span class="badge badge-green" style="font-size:0.6875rem;">${issue.skillMatch}% Match</span>
                  <span class="badge ${issue.difficulty === 'Beginner' ? 'badge-blue' : 'badge-yellow'}" style="font-size:0.6875rem;">${issue.difficulty}</span>
                </div>
                <a href="#issue/${issue.id}" style="font-weight:600; font-size:0.9375rem; color:#fff;" class="hover:text-green">
                  ${issue.title}
                </a>
                <div class="flex items-center gap-16 text-muted" style="font-size: 0.75rem; margin-top: 6px;">
                  <span>Est. Time: ${issue.estimatedTime}</span>
                  <span>Language: ${issue.language}</span>
                  <span>${issue.commentsCount} comments</span>
                </div>
              </div>

              <div class="flex items-center gap-8">
                <a href="#mentor" class="btn btn-ghost btn-sm" title="Ask AI Mentor">
                  ${Icons.bot(14)}
                  <span>Ask Mentor</span>
                </a>
                <a href="#issue/${issue.id}" class="btn btn-secondary btn-sm">
                  <span>Inspect Issue</span>
                  ${Icons.arrowRight(12)}
                </a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  `;
}
