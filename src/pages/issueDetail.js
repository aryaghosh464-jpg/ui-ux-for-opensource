// ========================================================
// ContribLens — Issue Detail & AI Explainer Page
// ========================================================
import { Icons } from '../components/icons.js';
import { mockIssues } from '../data/mockData.js';

export function renderIssueDetailPage(issueId = '1428') {
  const issue = mockIssues.find(i => i.id === issueId) || mockIssues[0];

  return `
    <div class="animate-fade">
      
      <!-- Breadcrumb -->
      <div class="flex items-center gap-6 text-muted" style="font-size: 0.8125rem; margin-bottom: 16px;">
        <a href="#discover" class="hover:text-green">Discover</a>
        <span>/</span>
        <a href="#repo/${issue.repoId}" class="mono hover:text-green">${issue.repoName}</a>
        <span>/</span>
        <span style="color:#fff;" class="mono">Issue #${issue.number}</span>
      </div>

      <!-- Issue Header -->
      <div class="card" style="margin-bottom: 24px; border-color: rgba(34,197,94,0.3); background: rgba(18,20,18,0.85);">
        <div class="flex justify-between items-start" style="flex-wrap: wrap; gap: 16px; margin-bottom: 16px;">
          <div style="flex:1; min-width: 280px;">
            <div class="flex items-center gap-8" style="margin-bottom: 8px;">
              <span class="badge badge-green">${issue.skillMatch}% Skill Match</span>
              <span class="badge ${issue.difficulty === 'Beginner' ? 'badge-blue' : 'badge-yellow'}">${issue.difficulty}</span>
              ${issue.isGoodFirstIssue ? `<span class="badge badge-outline badge-green">Good First Issue</span>` : ''}
              <span class="mono text-muted" style="font-size: 0.8125rem;">Opened by @${issue.author} ${issue.createdAt}</span>
            </div>
            <h1 style="font-size: 1.6rem; line-height: 1.3; margin: 0 0 10px;">${issue.title}</h1>
            <div class="flex gap-6" style="flex-wrap: wrap;">
              ${issue.labels.map(l => `<span class="badge badge-outline badge-gray">${l}</span>`).join('')}
            </div>
          </div>

          <!-- CTAs -->
          <div class="flex gap-8">
            <a href="#mentor" class="btn btn-secondary">
              ${Icons.bot(15)}
              <span>Discuss with AI Mentor</span>
            </a>
            <a href="#simulate" class="btn btn-primary">
              ${Icons.shield(15)}
              <span>Launch Safe Simulation</span>
            </a>
          </div>
        </div>

        <!-- Issue Description Box -->
        <div style="padding: 16px; background: rgba(0,0,0,0.4); border-radius: var(--radius-sm); border: 1px solid var(--border); font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6;">
          ${issue.description.replace(/\n\n/g, '<br/><br/>')}
        </div>
      </div>

      <!-- AI EXPLAINER PANEL (Powered by Gemma 4 + Qwen3-Coder) -->
      <div class="card" style="margin-bottom: 28px; border-color: var(--primary); background: radial-gradient(circle at 10% 20%, rgba(34,197,94,0.08) 0%, rgba(18,18,18,0.95) 70%);">
        <div class="flex items-center gap-8" style="margin-bottom: 16px;">
          <div style="width: 32px; height: 32px; border-radius: var(--radius-sm); background: var(--primary-glow); display: flex; align-items:center; justify-content:center; color: var(--primary);">
            ${Icons.sparkles(18)}
          </div>
          <div>
            <h3 style="font-size: 1.15rem; margin: 0;">AI Issue Explainer</h3>
            <span style="font-size: 0.72rem; color: var(--primary-light);">Deep Codebase Analysis by Gemma 4 + Qwen3-Coder-30B</span>
          </div>
        </div>

        <div class="grid grid-2 gap-16" style="font-size: 0.84rem; line-height: 1.55;">
          
          <div style="padding: 14px; background: rgba(0,0,0,0.3); border-radius: var(--radius-sm); border: 1px solid var(--border);">
            <div style="font-weight: 700; color: #fff; margin-bottom: 4px;">🎯 What Needs to Happen</div>
            <p style="color: var(--text-secondary); margin: 0;">${issue.aiExplainer.summary}</p>
          </div>

          <div style="padding: 14px; background: rgba(0,0,0,0.3); border-radius: var(--radius-sm); border: 1px solid var(--border);">
            <div style="font-weight: 700; color: #fff; margin-bottom: 4px;">🔍 Root Cause</div>
            <p style="color: var(--text-secondary); margin: 0;">${issue.aiExplainer.rootCause}</p>
          </div>

          <div style="padding: 14px; background: rgba(0,0,0,0.3); border-radius: var(--radius-sm); border: 1px solid var(--border);">
            <div style="font-weight: 700; color: #fff; margin-bottom: 4px;">💡 Why It Matters</div>
            <p style="color: var(--text-secondary); margin: 0;">${issue.aiExplainer.whyItMatters}</p>
          </div>

          <div style="padding: 14px; background: rgba(0,0,0,0.3); border-radius: var(--radius-sm); border: 1px solid var(--border);">
            <div style="font-weight: 700; color: #fff; margin-bottom: 4px;">🛠️ Recommended Solution</div>
            <p style="color: var(--text-secondary); margin: 0;">${issue.aiExplainer.whatToChange}</p>
          </div>

        </div>
      </div>

      <!-- RELEVANT FILES & CONTRIBUTION PLAN -->
      <div class="grid grid-2 gap-24">
        
        <!-- Relevant Files identified by AI -->
        <div class="card">
          <div class="flex justify-between items-center" style="margin-bottom: 16px;">
            <h3 style="font-size: 1.1rem; margin: 0;">Relevant Codebase Files</h3>
            <span class="badge badge-green">${issue.relevantFiles.length} Target Files</span>
          </div>

          <div class="flex flex-col gap-12">
            ${issue.relevantFiles.map((file, idx) => `
              <div style="padding: 14px; background: rgba(0,0,0,0.35); border: 1px solid var(--border); border-radius: var(--radius-sm);">
                <div class="flex justify-between items-center" style="margin-bottom: 6px;">
                  <span class="mono" style="font-weight: 700; font-size: 0.8125rem; color: var(--primary-light);">${file.path}</span>
                  <span class="badge badge-outline badge-gray" style="font-size: 0.65rem;">${file.lines}</span>
                </div>
                <p style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 10px;">
                  ${file.purpose}
                </p>
                ${file.snippet ? `
                  <pre style="background: #090909; padding: 10px; border-radius: 4px; font-family: var(--font-mono); font-size: 0.72rem; color: #d4d4d8; overflow-x: auto; border: 1px solid rgba(255,255,255,0.05);"><code>${file.snippet}</code></pre>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Step-by-Step Contribution Plan -->
        <div class="card">
          <div class="flex justify-between items-center" style="margin-bottom: 16px;">
            <h3 style="font-size: 1.1rem; margin: 0;">Step-by-Step Contribution Plan</h3>
            <span class="badge badge-outline badge-gray">${issue.estimatedTime}</span>
          </div>

          <div class="flex flex-col gap-12">
            ${issue.contributionPlan.map(step => `
              <div class="card card-compact" style="background: ${step.done ? 'rgba(34,197,94,0.04)' : 'rgba(255,255,255,0.02)'}; border-color: ${step.done ? 'var(--border-green)' : 'var(--border)'};">
                <div class="flex items-start gap-12">
                  <div style="width: 22px; height: 22px; border-radius: 50%; background: ${step.done ? 'var(--primary)' : 'var(--bg-elevated)'}; color: ${step.done ? '#000' : 'var(--text-muted)'}; display: flex; align-items:center; justify-content:center; font-size: 0.72rem; font-weight: 700; flex-shrink: 0; margin-top: 2px;">
                    ${step.done ? '✓' : step.step}
                  </div>
                  <div>
                    <div style="font-weight: 600; font-size: 0.875rem; color: #fff; margin-bottom: 2px;">
                      ${step.title}
                    </div>
                    <p style="font-size: 0.78rem; color: var(--text-muted); margin: 0; line-height: 1.4;">
                      ${step.desc}
                    </p>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid var(--border);">
            <a href="#simulate" class="btn btn-primary w-full">
              ${Icons.play(14)}
              <span>Begin Safe Simulation in Sandbox</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  `;
}
