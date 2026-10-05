// ========================================================
// ContribLens — Onboarding & Skill Setup
// ========================================================
import { Icons } from '../components/icons.js';
import { mockCurrentUser } from '../data/mockData.js';

export function renderOnboardingPage(state = { step: 1, languages: ['Python', 'TypeScript'], experience: 'Intermediate' }) {
  const currentStep = state.step || 1;
  const availableLanguages = [
    { name: "Python", icon: "🐍", default: true },
    { name: "TypeScript", icon: "🔷", default: true },
    { name: "JavaScript", icon: "🟨", default: false },
    { name: "Go", icon: "🐹", default: true },
    { name: "Rust", icon: "🦀", default: false },
    { name: "Java", icon: "☕", default: false },
    { name: "C / C++", icon: "⚡", default: false },
    { name: "SQL", icon: "🗄️", default: false },
    { name: "Kotlin", icon: "🟣", default: false },
    { name: "Ruby", icon: "💎", default: false }
  ];

  const interestDomains = [
    { id: "web", name: "Web Services & APIs", desc: "REST, GraphQL, ASGI, WebSockets" },
    { id: "cli", name: "CLI Tools & Terminal", desc: "Fast command line utilities & devtools" },
    { id: "ai", name: "AI & LLM Infrastructure", desc: "Agent runtimes, embeddings, local models" },
    { id: "devops", name: "DevOps & Cloud Native", desc: "Containers, CI/CD, orchestration" },
    { id: "testing", name: "Testing & Diagnostics", desc: "Test runners, linters, coverage" },
    { id: "docs", name: "Technical Documentation", desc: "Tutorials, API references, guides" }
  ];

  return `
    <div class="full-page flex items-center justify-center animate-fade" style="padding: 40px 16px; background: radial-gradient(circle at 50% 20%, rgba(34,197,94,0.06) 0%, transparent 60%);">
      <div class="card" style="max-width: 680px; width: 100%; border-color: rgba(34,197,94,0.3); box-shadow: var(--shadow-lg);">
        
        <!-- Wizard Header -->
        <div class="flex justify-between items-center" style="margin-bottom: 24px;">
          <div>
            <span class="badge badge-green" style="margin-bottom: 6px;">STEP ${currentStep} OF 3</span>
            <h2 style="font-size: 1.4rem;">
              ${currentStep === 1 ? 'Select Your Core Languages' : (currentStep === 2 ? 'Calibrate Your Experience' : 'Target Contribution Areas')}
            </h2>
          </div>
          <div class="mono" style="font-size: 0.8125rem; color: var(--text-muted);">
            ${currentStep === 1 ? '33%' : (currentStep === 2 ? '66%' : '100%')} Complete
          </div>
        </div>

        <!-- Progress Bar -->
        <div class="progress" style="margin-bottom: 28px; height: 4px;">
          <div class="progress-bar" style="width: ${currentStep === 1 ? '33%' : (currentStep === 2 ? '66%' : '100%')};"></div>
        </div>

        <!-- STEP 1: LANGUAGES -->
        ${currentStep === 1 ? `
          <div>
            <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 18px;">
              Pick the programming languages you want to contribute in. We will filter GitHub issues matching these stacks.
            </p>

            <div class="grid grid-2 gap-12" style="margin-bottom: 28px;">
              ${availableLanguages.map(lang => {
                const isSelected = (state.languages || ['Python', 'TypeScript', 'Go']).includes(lang.name);
                return `
                  <div class="chip ${isSelected ? 'selected' : ''}" style="padding: 12px 16px; border-radius: var(--radius); justify-content: space-between;" onclick="window.ContribLensApp && window.ContribLensApp.toggleSkillLanguage('${lang.name}')">
                    <span class="flex items-center gap-8">
                      <span>${lang.icon}</span>
                      <span style="font-weight: 600;">${lang.name}</span>
                    </span>
                    <span style="color: ${isSelected ? 'var(--primary)' : 'var(--text-dim)'}; font-size: 0.75rem;">
                      ${isSelected ? 'Active' : '+ Add'}
                    </span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        ` : ''}

        <!-- STEP 2: EXPERIENCE -->
        ${currentStep === 2 ? `
          <div>
            <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 18px;">
              Select your overall proficiency level. This helps our AI suggest either "Good First Issues" or deeper architectural tasks.
            </p>

            <div class="grid grid-3 gap-16" style="margin-bottom: 28px;">
              <div class="card card-hover text-center" style="cursor: pointer; border-color: ${state.experience === 'Beginner' ? 'var(--primary)' : 'var(--border)'};" onclick="window.ContribLensApp && window.ContribLensApp.setExperience('Beginner')">
                <div style="font-size: 2rem; margin-bottom: 8px;">🌱</div>
                <div style="font-weight: 700; color: #fff;">Explorer</div>
                <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">Looking for clear "good first issues", typo fixes, and beginner-friendly repos.</p>
              </div>

              <div class="card card-hover text-center" style="cursor: pointer; border-color: ${state.experience === 'Intermediate' || !state.experience ? 'var(--primary)' : 'var(--border)'}; background: rgba(34,197,94,0.04);" onclick="window.ContribLensApp && window.ContribLensApp.setExperience('Intermediate')">
                <div style="font-size: 2rem; margin-bottom: 8px;">⚡</div>
                <div style="font-weight: 700; color: var(--primary-light);">Builder</div>
                <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">Comfortable fixing bugs, adding unit tests, and modifying core modules.</p>
              </div>

              <div class="card card-hover text-center" style="cursor: pointer; border-color: ${state.experience === 'Advanced' ? 'var(--primary)' : 'var(--border)'};" onclick="window.ContribLensApp && window.ContribLensApp.setExperience('Advanced')">
                <div style="font-size: 2rem; margin-bottom: 8px;">🚀</div>
                <div style="font-weight: 700; color: #fff;">Architect</div>
                <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">Ready for performance optimizations, async concurrency, and large refactors.</p>
              </div>
            </div>
          </div>
        ` : ''}

        <!-- STEP 3: INTERESTS -->
        ${currentStep === 3 ? `
          <div>
            <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 18px;">
              Which domains excite you the most? ContribLens uses this to prioritize repository discovery rankings.
            </p>

            <div class="grid grid-2 gap-12" style="margin-bottom: 28px;">
              ${interestDomains.map((domain, i) => `
                <div class="card card-compact card-hover ${i < 3 ? 'border-green' : ''}" style="cursor:pointer;" onclick="this.classList.toggle('selected');">
                  <div style="font-weight:600; font-size:0.875rem; color:#fff;">${domain.name}</div>
                  <div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">${domain.desc}</div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Step Navigation Buttons -->
        <div class="flex justify-between items-center" style="border-top: 1px solid var(--border); padding-top: 20px;">
          ${currentStep > 1 ? `
            <button class="btn btn-secondary" onclick="window.ContribLensApp && window.ContribLensApp.setWizardStep(${currentStep - 1})">
              ← Back
            </button>
          ` : `
            <a href="#landing" class="btn btn-ghost">Cancel</a>
          `}

          ${currentStep < 3 ? `
            <button class="btn btn-primary" onclick="window.ContribLensApp && window.ContribLensApp.setWizardStep(${currentStep + 1})">
              <span>Next Step</span>
              ${Icons.arrowRight(14)}
            </button>
          ` : `
            <a href="#dashboard" class="btn btn-primary btn-lg" onclick="window.ContribLensApp && window.ContribLensApp.finishOnboarding()">
              ${Icons.sparkles(16)}
              <span>Complete Setup & Discover Issues</span>
            </a>
          `}
        </div>

      </div>
    </div>
  `;
}
