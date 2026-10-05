// ========================================================
// ContribLens — Landing Page
// ========================================================
import { Icons } from '../components/icons.js';
import { mockRepositories } from '../data/mockData.js';

export function renderLandingPage() {
  const steps = [
    { title: "SKILLS", desc: "Profile your languages, frameworks & experience level" },
    { title: "DISCOVERY", desc: "Search repositories scored with transparent Project Health metrics" },
    { title: "ISSUE", desc: "Pinpoint curated issues tailored precisely to your skill match" },
    { title: "UNDERSTANDING", desc: "AI unpacks complex issues into plain-English root causes" },
    { title: "AI MENTOR", desc: "Ask questions to Gemma 4 + Qwen3-Coder with codebase context" },
    { title: "CONTRIBUTION PATH", desc: "Follow step-by-step verified execution checklists" },
    { title: "SIMULATION", desc: "Build & test your patch in a 100% safe, non-destructive sandbox" },
    { title: "REVIEW", desc: "Automated regression testing and safety audits before submission" },
    { title: "DONE", desc: "Generate a clean, maintainer-friendly PR description" },
    { title: "ACHIEVEMENT", desc: "Level up your open source developer karma & credentials" }
  ];

  return `
    <div class="full-page animate-fade" style="background: radial-gradient(circle at 50% 10%, rgba(34,197,94,0.08) 0%, transparent 60%);">
      
      <!-- HERO -->
      <section style="padding: 72px 24px 48px; text-align: center;">
        <div class="container" style="max-width: 980px;">
          
          <!-- Badge -->
          <div class="badge badge-green" style="margin-bottom: 24px; padding: 6px 14px; font-size: 0.8125rem;">
            ${Icons.sparkles(15)}
            <span>Powered by Gemma 4 & Qwen3-Coder-30B-A3B-Instruct</span>
          </div>

          <!-- Main H1 -->
          <h1 style="font-size: clamp(2.4rem, 5vw, 4rem); font-weight: 800; line-height: 1.15; margin-bottom: 24px; letter-spacing: -0.035em;">
            Go from <span style="color:var(--text-muted); font-style:italic;">"I want to contribute"</span> to<br/>
            <span class="text-gradient">"I know exactly what, where & how to build."</span>
          </h1>

          <!-- Lede -->
          <p style="font-size: clamp(1rem, 2vw, 1.25rem); color: var(--text-secondary); max-width: 760px; margin: 0 auto 36px; line-height: 1.6;">
            ContribLens is an AI-powered open source mentorship platform that analyzes real GitHub codebases, matches issues to your skills, teaches you how to solve them, and lets you <strong>safely simulate your contribution</strong> before submitting.
          </p>

          <!-- CTAs -->
          <div class="flex items-center justify-center gap-16 hero-actions">
            <a href="#onboarding" class="btn btn-primary btn-lg">
              ${Icons.sparkles(18)}
              <span>Start Free Exploration</span>
            </a>
            <a href="#dashboard" class="btn btn-secondary btn-lg">
              ${Icons.play(15)}
              <span>Explore Live Demo</span>
            </a>
          </div>

          <!-- Trust guarantee -->
          <div class="flex items-center justify-center gap-8 text-muted" style="margin-top: 24px; font-size: 0.8125rem;">
            ${Icons.shield(15)}
            <span>100% Non-Destructive • No auto-pushing to real GitHub repositories</span>
          </div>
        </div>
      </section>

      <!-- CORE WORKFLOW VISUALIZER -->
      <section style="padding: 40px 24px; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); background: rgba(17,17,17,0.6);">
        <div class="container">
          <div style="text-align: center; margin-bottom: 24px;">
            <div style="font-size: 0.75rem; font-weight: 700; color: var(--primary); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 6px;">
              🔄 THE END-TO-END WORKFLOW
            </div>
            <h2 style="font-size: 1.5rem;">From First Discovery to Verified Contribution</h2>
          </div>

          <!-- Horizontal workflow scroll / grid -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px;">
            ${steps.map((s, idx) => `
              <div class="card card-compact" style="background: rgba(22,22,22,0.8); border: 1px solid rgba(255,255,255,0.06); position: relative; overflow:hidden;">
                <div style="position: absolute; top: 6px; right: 10px; font-size: 0.7rem; font-weight: 800; color: rgba(255,255,255,0.12);">
                  0${idx + 1}
                </div>
                <div style="font-size: 0.78rem; font-weight: 700; color: var(--primary-light); margin-bottom: 4px; display: flex; align-items:center; gap: 4px;">
                  <span style="width: 5px; height: 5px; border-radius: 50%; background: var(--primary);"></span>
                  ${s.title}
                </div>
                <p style="font-size: 0.75rem; color: var(--text-muted); margin: 0; line-height: 1.35;">
                  ${s.desc}
                </p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- FEATURE SHOWCASE -->
      <section style="padding: 72px 24px;">
        <div class="container">
          <div style="text-align:center; max-width:640px; margin:0 auto 48px;">
            <div class="badge badge-green" style="margin-bottom: 12px;">ENGINEERED FOR MODERN DEVELOPERS</div>
            <h2>Why Developers Choose ContribLens</h2>
            <p style="margin-top: 8px;">Break through the intimidating wall of open source with AI-guided repository intelligence.</p>
          </div>

          <div class="grid grid-3 gap-24">
            
            <!-- Feature 1: Health Score -->
            <div class="card">
              <div style="width: 44px; height: 44px; border-radius: var(--radius); background: var(--primary-glow); display: flex; align-items:center; justify-content:center; color: var(--primary); margin-bottom: 18px;">
                ${Icons.activity(22)}
              </div>
              <h3 style="margin-bottom: 8px;">Transparent Project Health Score</h3>
              <p style="font-size: 0.875rem; line-height: 1.5;">
                We synthesize README depth, maintainer PR merge velocity, issue responsiveness, and active commit distribution into an intuitive 0–100 score.
              </p>
              <div style="margin-top: 16px; padding: 12px; background: rgba(0,0,0,0.3); border-radius: var(--radius-sm); border: 1px solid var(--border);">
                <div class="flex justify-between items-center" style="font-size: 0.75rem;">
                  <span>Documentation Quality</span>
                  <span class="text-green font-semibold">98%</span>
                </div>
                <div class="flex justify-between items-center" style="font-size: 0.75rem; margin-top: 6px;">
                  <span>Maintainer PR Velocity</span>
                  <span class="text-green font-semibold">&lt; 4.2 hrs</span>
                </div>
              </div>
            </div>

            <!-- Feature 2: Contribution Simulation -->
            <div class="card" style="border-color: var(--border-green); background: linear-gradient(180deg, rgba(34,197,94,0.03) 0%, rgba(20,20,20,0.8) 100%);">
              <div style="width: 44px; height: 44px; border-radius: var(--radius); background: var(--primary-glow); display: flex; align-items:center; justify-content:center; color: var(--primary); margin-bottom: 18px;">
                ${Icons.shield(22)}
              </div>
              <div class="flex items-center gap-6" style="margin-bottom: 8px;">
                <h3 style="margin: 0;">Contribution Simulation</h3>
                <span class="badge badge-green">Flagship</span>
              </div>
              <p style="font-size: 0.875rem; line-height: 1.5;">
                Safely prepare your patch in an isolated sandbox. Run automated test suites and receive Gemma 4 code audits before making a real GitHub commit.
              </p>
              <div style="margin-top: 16px; padding: 12px; background: #0c0c0c; border-radius: var(--radius-sm); border: 1px solid rgba(34,197,94,0.2); font-family: var(--font-mono); font-size: 0.72rem; color: var(--green-300);">
                $ pytest tests/test_cleanup.py<br/>
                <span style="color:#4ade80;">[PASS]</span> 28 passed in 0.41s
              </div>
            </div>

            <!-- Feature 3: AI Contribution Mentor -->
            <div class="card">
              <div style="width: 44px; height: 44px; border-radius: var(--radius); background: var(--primary-glow); display: flex; align-items:center; justify-content:center; color: var(--primary); margin-bottom: 18px;">
                ${Icons.bot(22)}
              </div>
              <h3 style="margin-bottom: 8px;">AI Contribution Mentor</h3>
              <p style="font-size: 0.875rem; line-height: 1.5;">
                Co-powered by Gemma 4 and Qwen3-Coder-30B. Identifies the exact files, explains asynchronous patterns, suggests tests, and unblocks tricky syntax.
              </p>
              <div style="margin-top: 16px; padding: 12px; background: rgba(0,0,0,0.3); border-radius: var(--radius-sm); border: 1px solid var(--border); font-size: 0.75rem;">
                <div class="flex items-center gap-6 text-green">
                  ${Icons.bot(14)}
                  <span style="font-weight:600;">Gemma 4 + Qwen3-Coder</span>
                </div>
                <div style="color: var(--text-secondary); margin-top: 4px;">"Targeting \`fastapi/routing.py\` around line 274..."</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- LIVE REPOSITORIES TEASER -->
      <section style="padding: 48px 24px 72px; background: rgba(12,12,12,0.7); border-top: 1px solid var(--border);">
        <div class="container">
          <div class="flex justify-between items-center" style="margin-bottom: 32px; flex-wrap: wrap; gap: 16px;">
            <div>
              <h2>Popular Analyzed Repositories</h2>
              <p style="font-size: 0.875rem; margin-top: 4px;">Scored with live GitHub repository telemetry.</p>
            </div>
            <a href="#discover" class="btn btn-secondary btn-sm">
              <span>View All Repositories</span>
              ${Icons.arrowRight(14)}
            </a>
          </div>

          <div class="grid grid-3 gap-24">
            ${mockRepositories.slice(0, 3).map(repo => `
              <div class="card card-hover" style="display:flex; flex-direction:column; justify-content:space-between;">
                <div>
                  <div class="flex justify-between items-center" style="margin-bottom: 12px;">
                    <div style="font-size: 0.8125rem; font-weight:700; color:#fff;" class="mono">${repo.fullName}</div>
                    <span class="badge badge-green">${repo.healthScore} Health</span>
                  </div>
                  <p style="font-size: 0.8125rem; color: var(--text-muted); line-height: 1.45; margin-bottom: 16px;">
                    ${repo.description}
                  </p>
                </div>
                <div>
                  <div class="flex items-center gap-12" style="font-size: 0.75rem; color: var(--text-dim); margin-bottom: 16px;">
                    <span class="flex items-center gap-4">${Icons.star(13)} ${(repo.stars / 1000).toFixed(1)}k</span>
                    <span class="flex items-center gap-4">${Icons.fork(13)} ${(repo.forks / 1000).toFixed(1)}k</span>
                    <span class="badge badge-outline badge-gray">${repo.primaryLanguage}</span>
                  </div>
                  <a href="#repo/${repo.id}" class="btn btn-secondary btn-sm w-full">
                    <span>Inspect Repository</span>
                    ${Icons.arrowRight(12)}
                  </a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- FOOTER -->
      <footer style="padding: 36px 24px; border-top: 1px solid var(--border); text-align: center; color: var(--text-dim); font-size: 0.8125rem;">
        <div class="container flex justify-between items-center" style="flex-wrap: wrap; gap: 16px;">
          <div class="flex items-center gap-8">
            ${Icons.logo(20)}
            <span style="color:#fff; font-weight:600;">ContribLens</span>
            <span>— AI-Powered Open Source Infrastructure</span>
          </div>
          <div>
            Built with Gemma 4 & Qwen3-Coder • Safe Sandbox Guaranteed
          </div>
        </div>
      </footer>

    </div>
  `;
}
