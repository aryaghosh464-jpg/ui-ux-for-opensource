// ========================================================
// ContribLens — Login Page
// ========================================================
import { Icons } from '../components/icons.js';

export function renderLoginPage() {
  return `
    <div class="full-page flex items-center justify-center animate-fade" style="padding: 32px 16px; min-height: 100vh; background: radial-gradient(circle at 50% 30%, rgba(34,197,94,0.08) 0%, transparent 70%);">
      <div class="card" style="max-width: 440px; width: 100%; border-color: rgba(34,197,94,0.25); box-shadow: 0 16px 48px rgba(0,0,0,0.6);">
        
        <!-- Header -->
        <div style="text-align: center; margin-bottom: 28px;">
          <a href="#landing" style="display: inline-flex; align-items:center; gap: 8px; margin-bottom: 16px;">
            ${Icons.logo(36)}
            <span style="font-size: 1.4rem; font-weight: 800; color:#fff;">Contrib<span class="text-green">Lens</span></span>
          </a>
          <h2 style="font-size: 1.35rem; margin-bottom: 6px;">Welcome Back</h2>
          <p style="font-size: 0.875rem; color: var(--text-muted); margin: 0;">
            Sign in to discover matched issues and simulate open source contributions.
          </p>
        </div>

        <!-- Auth buttons -->
        <div class="flex flex-col gap-12">
          <!-- Google Sign in -->
          <button class="btn btn-secondary w-full" style="padding: 12px; font-weight:600;" onclick="window.ContribLensApp && window.ContribLensApp.loginWithProvider('Google')">
            <svg width="18" height="18" viewBox="0 0 24 24" style="margin-right: 8px;">
              <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"/>
              <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"/>
              <path fill="#FBBC05" d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12.3 0 15.2s.7 5.5 1.9 7.9l3.7-2.9z"/>
              <path fill="#34A853" d="M12 23.5c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2-6.4-4.8L1.9 17C3.7 20.7 7.5 23.5 12 23.5z"/>
            </svg>
            <span>Continue with Google</span>
          </button>

          <!-- GitHub Sign in -->
          <button class="btn btn-secondary w-full" style="padding: 12px; font-weight:600;" onclick="window.ContribLensApp && window.ContribLensApp.loginWithProvider('GitHub')">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 8px;">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>Continue with GitHub</span>
          </button>
        </div>

        <!-- Divider -->
        <div style="display: flex; align-items: center; margin: 20px 0; color: var(--text-dim); font-size: 0.75rem;">
          <div style="flex:1; height: 1px; background: var(--border);"></div>
          <span style="padding: 0 12px; text-transform: uppercase;">or explore immediately</span>
          <div style="flex:1; height: 1px; background: var(--border);"></div>
        </div>

        <!-- Instant Demo Access -->
        <a href="#dashboard" class="btn btn-primary w-full" style="padding: 12px; font-weight:600;">
          ${Icons.sparkles(16)}
          <span>Launch Instant Demo Account</span>
        </a>

        <!-- Safety Notice -->
        <div style="margin-top: 24px; padding: 12px; background: rgba(34,197,94,0.06); border: 1px solid rgba(34,197,94,0.2); border-radius: var(--radius-sm); font-size: 0.75rem; color: var(--text-muted); display:flex; gap: 8px;">
          ${Icons.shield(16)}
          <div>
            <strong>Read-only GitHub Scope:</strong> ContribLens accesses public repo metadata and issues. No automated commits or PRs will ever be initiated.
          </div>
        </div>

        <!-- Back Link -->
        <div style="text-align: center; margin-top: 18px;">
          <a href="#landing" style="font-size: 0.8125rem; color: var(--text-muted);" class="hover:text-green">
            ← Return to Landing Page
          </a>
        </div>

      </div>
    </div>
  `;
}
