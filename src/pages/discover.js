// ========================================================
// ContribLens — Discover Repositories Page
// ========================================================
import { Icons } from '../components/icons.js';
import { mockRepositories } from '../data/mockData.js';

export function renderDiscoverPage(filters = { search: '', language: 'All', minHealth: 80, sortBy: 'match' }) {
  const activeLang = filters.language || 'All';
  const languages = ['All', 'Python', 'TypeScript', 'Go', 'Rust'];

  let repos = [...mockRepositories];
  if (activeLang !== 'All') {
    repos = repos.filter(r => r.primaryLanguage.toLowerCase() === activeLang.toLowerCase());
  }
  if (filters.search) {
    const q = filters.search.toLowerCase();
    repos = repos.filter(r => r.fullName.toLowerCase().includes(q) || r.description.toLowerCase().includes(q) || r.tags.some(t => t.toLowerCase().includes(q)));
  }

  return `
    <div class="animate-fade">
      
      <!-- Header -->
      <div style="margin-bottom: 24px;">
        <h1 style="font-size: 1.8rem; margin-bottom: 6px;">Discover Open Source Repositories</h1>
        <p style="font-size: 0.875rem; color: var(--text-secondary); margin: 0;">
          Transparently scored using real GitHub activity, issue response velocity, and community engagement.
        </p>
      </div>

      <!-- Filter Controls Bar -->
      <div class="card card-compact" style="margin-bottom: 24px; background: rgba(18,18,18,0.8);">
        <div class="flex justify-between items-center" style="flex-wrap: wrap; gap: 14px;">
          
          <!-- Search input -->
          <div class="input-with-icon" style="flex: 1; min-width: 240px;">
            ${Icons.search(16)}
            <input 
              type="text" 
              class="input" 
              placeholder="Search by repo name, tag (e.g. asyncio, react), or keyword..." 
              value="${filters.search || ''}" 
              oninput="window.ContribLensApp && window.ContribLensApp.updateDiscoverSearch(this.value)"
            />
          </div>

          <!-- Language filter pills -->
          <div class="flex items-center gap-6" style="flex-wrap: wrap;">
            ${languages.map(lang => `
              <button 
                class="chip ${activeLang === lang ? 'selected' : ''}" 
                onclick="window.ContribLensApp && window.ContribLensApp.setDiscoverLanguage('${lang}')"
                style="padding: 6px 12px; font-size: 0.75rem;"
              >
                ${lang}
              </button>
            `).join('')}
          </div>

          <!-- Sort dropdown -->
          <div class="flex items-center gap-8 text-muted" style="font-size: 0.8125rem;">
            <span>Sort:</span>
            <select class="input" style="padding: 6px 10px; width: auto; font-size: 0.8125rem;" onchange="window.ContribLensApp && window.ContribLensApp.setDiscoverSort(this.value)">
              <option value="match" selected>Best Skill Match</option>
              <option value="health">Highest Health Score</option>
              <option value="stars">Most Stars</option>
              <option value="recent">Recently Active</option>
            </select>
          </div>

        </div>
      </div>

      <!-- Results Count -->
      <div class="flex justify-between items-center text-muted" style="font-size: 0.8125rem; margin-bottom: 16px;">
        <span>Found <strong>${repos.length}</strong> audited repositories</span>
        <span class="flex items-center gap-4 text-green">${Icons.shield(14)} All repos pass open-license & safety filters</span>
      </div>

      <!-- Repositories Grid -->
      <div class="grid grid-3 gap-24">
        ${repos.map(repo => `
          <div class="card card-hover flex flex-col justify-between" style="border-color: ${repo.healthScore >= 95 ? 'rgba(34,197,94,0.3)' : 'var(--border)'};">
            <div>
              <!-- Card Top -->
              <div class="flex justify-between items-start" style="margin-bottom: 12px;">
                <div>
                  <div class="flex items-center gap-6" style="margin-bottom: 4px;">
                    <span class="badge badge-outline badge-gray" style="font-size: 0.65rem;">${repo.primaryLanguage}</span>
                    <span class="badge badge-green" style="font-size: 0.65rem;">${repo.skillMatchPercent}% Match</span>
                  </div>
                  <a href="#repo/${repo.id}" class="mono hover:text-green" style="font-weight: 700; font-size: 1.05rem; color: #fff;">
                    ${repo.fullName}
                  </a>
                </div>

                <!-- Health Score Stamp -->
                <div class="text-center" style="padding: 6px 10px; background: rgba(34,197,94,0.08); border: 1px solid rgba(34,197,94,0.25); border-radius: var(--radius-sm);">
                  <div class="text-green font-bold" style="font-size: 1.2rem; line-height: 1;">${repo.healthScore}</div>
                  <div style="font-size: 0.58rem; color: var(--text-dim); text-transform: uppercase; margin-top: 2px;">Health</div>
                </div>
              </div>

              <!-- Description -->
              <p style="font-size: 0.8125rem; color: var(--text-muted); line-height: 1.45; margin-bottom: 16px;">
                ${repo.description}
              </p>

              <!-- Tags -->
              <div class="flex gap-4" style="flex-wrap: wrap; margin-bottom: 18px;">
                ${repo.tags.map(t => `<span class="badge badge-outline badge-gray" style="font-size: 0.6875rem;">#${t}</span>`).join('')}
              </div>
            </div>

            <!-- Card Bottom Metrics & Actions -->
            <div>
              <!-- Health signals mini bar -->
              <div style="padding: 10px; background: rgba(0,0,0,0.3); border-radius: var(--radius-sm); border: 1px solid var(--border); font-size: 0.72rem; margin-bottom: 14px;">
                <div class="flex justify-between items-center text-muted">
                  <span>PR Velocity:</span>
                  <span class="text-green font-semibold">${repo.healthBreakdown.issueResponseTime}</span>
                </div>
                <div class="flex justify-between items-center text-muted" style="margin-top: 4px;">
                  <span>Merge Rate:</span>
                  <span class="text-green font-semibold">${repo.healthBreakdown.prMergeRate}</span>
                </div>
              </div>

              <!-- Repo Stats -->
              <div class="flex justify-between items-center text-muted" style="font-size: 0.75rem; margin-bottom: 14px;">
                <span class="flex items-center gap-4">${Icons.star(13)} ${(repo.stars / 1000).toFixed(1)}k</span>
                <span class="flex items-center gap-4">${Icons.fork(13)} ${(repo.forks / 1000).toFixed(1)}k</span>
                <span>${repo.openIssues} open issues</span>
              </div>

              <div class="flex gap-8">
                <a href="#repo/${repo.id}" class="btn btn-primary btn-sm flex-1">
                  <span>Inspect Repo</span>
                  ${Icons.arrowRight(12)}
                </a>
                <a href="https://github.com/${repo.fullName}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" title="View on GitHub">
                  ${Icons.externalLink(13)}
                </a>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

    </div>
  `;
}
