// ========================================================
// ContribLens — Developer Profile & Achievements Page
// ========================================================
import { Icons } from '../components/icons.js';
import { mockCurrentUser } from '../data/mockData.js';

export function renderProfilePage() {
  const user = mockCurrentUser;

  return `
    <div class="animate-fade">
      
      <!-- PROFILE HERO CARD -->
      <div class="card" style="margin-bottom: 28px; background: linear-gradient(180deg, rgba(34,197,94,0.06) 0%, rgba(18,18,18,0.9) 100%); border-color: rgba(34,197,94,0.25);">
        <div class="flex justify-between items-start" style="flex-wrap: wrap; gap: 20px;">
          
          <div class="flex items-center gap-20">
            <div style="position: relative;">
              <img 
                src="${user.avatarUrl}" 
                alt="${user.name}" 
                style="width: 84px; height: 84px; border-radius: 50%; object-fit: cover; border: 3px solid var(--primary); box-shadow: 0 0 24px rgba(34,197,94,0.3);"
              />
              <span style="position: absolute; bottom: 2px; right: 2px; width: 18px; height: 18px; border-radius: 50%; background: var(--primary); border: 3px solid #0a0a0a; display: flex; align-items:center; justify-content:center; font-size: 0.6rem; color:#000; font-weight:900;">
                ✓
              </span>
            </div>

            <div>
              <div class="flex items-center gap-8" style="margin-bottom: 4px;">
                <h1 style="font-size: 1.6rem; margin: 0;">${user.name}</h1>
                <span class="mono" style="font-size: 0.8125rem; color: var(--text-muted);">@${user.username}</span>
                <span class="badge badge-green">Level 4 Contributor</span>
              </div>
              <div style="color: var(--primary-light); font-size: 0.875rem; font-weight: 500; margin-bottom: 8px;">
                ${user.title}
              </div>
              <p style="font-size: 0.8125rem; color: var(--text-secondary); max-width: 580px; margin: 0; line-height: 1.45;">
                ${user.bio}
              </p>
            </div>
          </div>

          <div class="flex gap-8">
            <a href="#onboarding" class="btn btn-secondary btn-sm">
              ${Icons.code(14)}
              <span>Edit Skills</span>
            </a>
            <a href="#discover" class="btn btn-primary btn-sm">
              ${Icons.search(14)}
              <span>Find Issues</span>
            </a>
          </div>

        </div>
      </div>

      <!-- METRICS & SKILLS MATRIX -->
      <div class="grid grid-2 gap-24" style="margin-bottom: 32px;">
        
        <!-- Skill Matrix -->
        <div class="card">
          <div class="flex justify-between items-center" style="margin-bottom: 16px;">
            <h3 style="font-size: 1.1rem; margin: 0;">Verified Technical Skills</h3>
            <span class="badge badge-outline badge-gray">Auto-Calibrated</span>
          </div>

          <div class="flex flex-col gap-14">
            ${user.languages.map(lang => `
              <div>
                <div class="flex justify-between items-center" style="font-size: 0.8125rem; margin-bottom: 4px;">
                  <span style="font-weight: 600; color: #fff;">${lang.name}</span>
                  <span class="text-green font-semibold">${lang.level} (${lang.years})</span>
                </div>
                <div class="progress">
                  <div class="progress-bar" style="width: ${lang.level === 'Advanced' ? '92%' : (lang.level === 'Intermediate' ? '70%' : '40%')};"></div>
                </div>
              </div>
            `).join('')}
          </div>

          <div style="margin-top: 20px; padding-top: 14px; border-top: 1px solid var(--border);">
            <div style="font-size: 0.75rem; color: var(--text-dim); text-transform: uppercase; margin-bottom: 8px; font-weight: 600;">
              Interests & Domain Specializations
            </div>
            <div class="flex gap-6" style="flex-wrap: wrap;">
              ${user.interests.map(i => `<span class="badge badge-outline badge-gray">${i}</span>`).join('')}
            </div>
          </div>
        </div>

        <!-- Summary Stats Overview -->
        <div class="card flex flex-col justify-between">
          <div>
            <h3 style="font-size: 1.1rem; margin: 0 0 16px;">Contribution Scorecard</h3>

            <div class="grid grid-2 gap-12" style="margin-bottom: 16px;">
              <div style="padding: 12px; background: rgba(0,0,0,0.3); border-radius: var(--radius-sm); border: 1px solid var(--border);">
                <div class="text-muted" style="font-size: 0.72rem;">Safe Simulations Run</div>
                <div class="text-green font-bold" style="font-size: 1.4rem;">${user.stats.contributionsSimulated}</div>
              </div>

              <div style="padding: 12px; background: rgba(0,0,0,0.3); border-radius: var(--radius-sm); border: 1px solid var(--border);">
                <div class="text-muted" style="font-size: 0.72rem;">Production Ready PRs</div>
                <div style="color:#fff; font-weight:bold; font-size: 1.4rem;">${user.stats.prsReady}</div>
              </div>

              <div style="padding: 12px; background: rgba(0,0,0,0.3); border-radius: var(--radius-sm); border: 1px solid var(--border);">
                <div class="text-muted" style="font-size: 0.72rem;">Mentor Sessions</div>
                <div style="color:#fff; font-weight:bold; font-size: 1.4rem;">${user.stats.mentorHours} hrs</div>
              </div>

              <div style="padding: 12px; background: rgba(0,0,0,0.3); border-radius: var(--radius-sm); border: 1px solid var(--border);">
                <div class="text-muted" style="font-size: 0.72rem;">Achievement XP</div>
                <div class="text-green font-bold" style="font-size: 1.4rem;">${user.stats.achievementPoints}</div>
              </div>
            </div>
          </div>

          <div style="padding: 12px; background: rgba(34,197,94,0.06); border: 1px solid rgba(34,197,94,0.2); border-radius: var(--radius-sm); font-size: 0.75rem; color: var(--text-muted);">
            <strong style="color: var(--primary-light);">Branch Protection Guarantee:</strong> All simulation runs are saved to your local developer vault.
          </div>
        </div>

      </div>

      <!-- ACHIEVEMENTS GALLERY -->
      <div class="card" style="margin-bottom: 32px;">
        <div class="flex justify-between items-center" style="margin-bottom: 20px;">
          <div>
            <h3 style="font-size: 1.2rem; margin: 0;">Developer Achievements</h3>
            <p style="font-size: 0.8125rem; color: var(--text-muted); margin: 2px 0 0;">
              Earned by mastering repository analysis, testing patterns, and safe sandbox contributions.
            </p>
          </div>
          <span class="badge badge-green">${user.achievements.filter(a => a.unlocked).length} / ${user.achievements.length} Unlocked</span>
        </div>

        <div class="grid grid-3 gap-16">
          ${user.achievements.map(ach => `
            <div class="card card-compact" style="background: ${ach.unlocked ? 'rgba(34,197,94,0.04)' : 'rgba(255,255,255,0.01)'}; border-color: ${ach.unlocked ? 'rgba(34,197,94,0.3)' : 'rgba(255,255,255,0.06)'}; opacity: ${ach.unlocked ? '1' : '0.6'};">
              <div class="flex justify-between items-start" style="margin-bottom: 8px;">
                <div style="width: 34px; height: 34px; border-radius: var(--radius-sm); background: ${ach.unlocked ? 'var(--primary-glow)' : 'var(--bg-elevated)'}; display: flex; align-items:center; justify-content:center; color: ${ach.unlocked ? 'var(--primary)' : 'var(--text-dim)'};">
                  ${Icons[ach.icon] ? Icons[ach.icon](18) : Icons.award(18)}
                </div>
                <span class="badge ${ach.unlocked ? 'badge-green' : 'badge-outline badge-gray'}" style="font-size: 0.65rem;">
                  ${ach.unlocked ? 'UNLOCKED' : 'LOCKED'}
                </span>
              </div>
              <div style="font-weight: 700; font-size: 0.875rem; color: #fff; margin-bottom: 4px;">
                ${ach.title}
              </div>
              <p style="font-size: 0.75rem; color: var(--text-muted); line-height: 1.4; margin: 0 0 10px;">
                ${ach.desc}
              </p>
              <div class="flex justify-between text-muted" style="font-size: 0.6875rem; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 6px;">
                <span>${ach.rarity}</span>
                <span>${ach.date || 'In Progress'}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  `;
}
