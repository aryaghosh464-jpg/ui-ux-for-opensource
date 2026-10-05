// ========================================================
// ContribLens — Contribution Simulation Sandbox (Flagship)
// ========================================================
import { Icons } from '../components/icons.js';
import { mockSimulationDiff } from '../data/mockData.js';

export function renderSimulationPage(state = { viewMode: 'split', testRan: true, isRunningTests: false }) {
  const diff = mockSimulationDiff;
  const isSplit = state.viewMode === 'split';

  return `
    <div class="animate-fade">
      
      <!-- SAFETY BANNER -->
      <div class="card card-compact" style="margin-bottom: 20px; background: rgba(34,197,94,0.06); border-color: rgba(34,197,94,0.3);">
        <div class="flex justify-between items-center" style="flex-wrap: wrap; gap: 12px;">
          <div class="flex items-center gap-10">
            <div style="width: 28px; height: 28px; border-radius: 50%; background: var(--primary-glow); display:flex; align-items:center; justify-content:center; color: var(--primary); flex-shrink: 0;">
              ${Icons.shield(16)}
            </div>
            <div>
              <div style="font-weight: 700; font-size: 0.875rem; color: #fff;">
                Isolated Contribution Sandbox
              </div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">
                Protecting target branch <code class="mono" style="color:var(--primary-light);">${diff.repoFullName}:${diff.targetBranch}</code>. All edits are simulated locally in memory.
              </div>
            </div>
          </div>

          <div class="flex items-center gap-8">
            <span class="badge badge-green">Sandbox Ready</span>
            <span class="mono" style="font-size:0.75rem; color:var(--text-dim);">+${diff.additions} / -${diff.deletions}</span>
          </div>
        </div>
      </div>

      <!-- Controls & Summary Bar -->
      <div class="card card-compact flex justify-between items-center" style="margin-bottom: 20px; flex-wrap: wrap; gap: 14px;">
        <div class="flex items-center gap-12">
          <span style="font-weight: 700; font-size: 0.9375rem; color: #fff;">Proposed Patch Preview</span>
          <span class="badge badge-outline badge-gray">${diff.filesChanged} Files Changed</span>
        </div>

        <div class="flex items-center gap-12">
          <!-- View mode toggle -->
          <div class="flex items-center gap-4" style="background: rgba(0,0,0,0.4); padding: 3px; border-radius: var(--radius-sm); border: 1px solid var(--border);">
            <button 
              class="btn btn-sm ${isSplit ? 'btn-primary' : 'btn-ghost'}" 
              style="padding: 4px 10px; font-size: 0.75rem;"
              onclick="window.ContribLensApp && window.ContribLensApp.setSimulationViewMode('split')"
            >
              Split Diff
            </button>
            <button 
              class="btn btn-sm ${!isSplit ? 'btn-primary' : 'btn-ghost'}" 
              style="padding: 4px 10px; font-size: 0.75rem;"
              onclick="window.ContribLensApp && window.ContribLensApp.setSimulationViewMode('unified')"
            >
              Unified Diff
            </button>
          </div>

          <!-- Run test suite button -->
          <button 
            class="btn btn-primary btn-sm" 
            onclick="window.ContribLensApp && window.ContribLensApp.runSimulatedTests()"
          >
            ${Icons.terminal(14)}
            <span>${state.isRunningTests ? 'Running Pytest...' : 'Execute Test Suite'}</span>
          </button>
        </div>
      </div>

      <!-- DIFF VIEWER PANEL -->
      <div class="card" style="padding: 0; overflow: hidden; margin-bottom: 24px; border-color: rgba(255,255,255,0.1);">
        ${diff.diffChunks.map(chunk => `
          <div>
            <!-- Chunk Header -->
            <div class="flex justify-between items-center" style="padding: 10px 16px; background: #111; border-bottom: 1px solid var(--border); font-size: 0.8125rem;">
              <span class="mono" style="font-weight: 700; color: var(--primary-light);">${chunk.file}</span>
              <span class="badge badge-outline badge-gray" style="font-size: 0.65rem;">Modified</span>
            </div>

            <!-- Code lines -->
            <div style="background: #080808; overflow-x: auto; padding: 6px 0;">
              ${chunk.lines.map((line, lidx) => {
                let lineClass = '';
                let prefix = ' ';
                if (line.type === 'add') { lineClass = 'diff-add'; prefix = '+'; }
                else if (line.type === 'remove') { lineClass = 'diff-remove'; prefix = '-'; }
                else if (line.type === 'info') { lineClass = 'diff-info'; prefix = ' '; }

                return `
                  <div class="diff-line ${lineClass}">
                    <span class="diff-line-number">${lidx + 94}</span>
                    <span>${escapeHtml(line.content)}</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- TEST SUITE TERMINAL & AI REVIEW GRID -->
      <div class="grid grid-2 gap-24" style="margin-bottom: 28px;">
        
        <!-- Interactive Simulated Test Runner -->
        <div class="card" style="background: #090909; border-color: rgba(34,197,94,0.3); font-family: var(--font-mono);">
          <div class="flex justify-between items-center" style="margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <div class="flex items-center gap-6" style="color: var(--primary-light); font-size: 0.8125rem; font-weight: 600;">
              ${Icons.terminal(15)}
              <span>Sandbox Test Runner (Pytest 8.2)</span>
            </div>
            <span class="badge badge-green" style="font-size: 0.65rem;">Coverage: ${diff.testSummary.coverageChange}</span>
          </div>

          <div style="font-size: 0.75rem; line-height: 1.7; color: #a1a1aa;">
            <span style="color: #71717a;">$ pytest tests/test_websocket_cleanup.py -v</span><br/>
            tests/test_websocket_cleanup.py::<span style="color:#fff;">test_clean_disconnect</span> <span style="color:#4ade80;">PASSED [ 25%]</span><br/>
            tests/test_websocket_cleanup.py::<span style="color:#fff;">test_client_abrupt_disconnect</span> <span style="color:#4ade80;">PASSED [ 50%]</span><br/>
            tests/test_websocket_cleanup.py::<span style="color:#fff;">test_connection_pool_deregistration</span> <span style="color:#4ade80;">PASSED [ 75%]</span><br/>
            tests/test_websocket_cleanup.py::<span style="color:#fff;">test_socket_leak_under_high_load</span> <span style="color:#4ade80;">PASSED [100%]</span><br/>
            <div style="margin-top: 10px; padding: 8px; background: rgba(34,197,94,0.1); border-radius: 4px; color: var(--green-300); font-weight: 600;">
              ✔ ${diff.testSummary.passed} passed in ${(diff.testSummary.timeMs / 1000).toFixed(2)}s — ZERO REGRESSIONS DETECTED
            </div>
          </div>
        </div>

        <!-- AI Automated Code Review Audit -->
        <div class="card flex flex-col justify-between" style="border-color: var(--primary);">
          <div>
            <div class="flex justify-between items-center" style="margin-bottom: 12px;">
              <div class="flex items-center gap-6">
                <span class="badge badge-green">AI REVIEW VERDICT</span>
                <span style="font-size: 0.8125rem; font-weight: 700; color: #fff;">${diff.aiReview.status}</span>
              </div>
              <div class="text-green font-bold" style="font-size: 1.25rem;">
                ${diff.aiReview.score}<span style="font-size: 0.8125rem; color: var(--text-dim); font-weight: 400;">/100</span>
              </div>
            </div>

            <p style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 14px;">
              ${diff.aiReview.recommendation}
            </p>

            <div class="flex flex-col gap-8" style="font-size: 0.75rem;">
              ${diff.aiReview.checks.map(c => `
                <div style="padding: 8px 10px; background: rgba(0,0,0,0.3); border-radius: var(--radius-sm); border: 1px solid var(--border);">
                  <div class="flex justify-between items-center" style="margin-bottom: 2px;">
                    <span style="font-weight: 600; color: #fff;">${c.name}</span>
                    <span class="text-green font-semibold">${c.status}</span>
                  </div>
                  <div style="color: var(--text-muted); font-size: 0.72rem;">${c.detail}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Bottom Action -->
          <div style="margin-top: 18px; padding-top: 14px; border-top: 1px solid var(--border);" class="flex gap-8">
            <a href="#mentor" class="btn btn-secondary btn-sm flex-1">
              ${Icons.bot(13)}
              <span>Refine with Mentor</span>
            </a>
            <button 
              class="btn btn-primary btn-sm flex-1" 
              onclick="window.ContribLensApp && window.ContribLensApp.markContributionComplete()"
            >
              ${Icons.checkCircle(13)}
              <span>Claim & Mark Complete</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  `;
}

function escapeHtml(str = '') {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
