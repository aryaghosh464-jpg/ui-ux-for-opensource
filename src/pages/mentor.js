// ========================================================
// ContribLens — AI Contribution Mentor
// Co-powered by Gemma 4 & Qwen3-Coder-30B
// ========================================================
import { Icons } from '../components/icons.js';
import { mockMentorDialogue, mockIssues } from '../data/mockData.js';

export function renderMentorPage(dialogue = mockMentorDialogue) {
  const issue = mockIssues[0]; // Active issue #1428

  const suggestions = [
    "Explain how ASGI handles WebSocket disconnects in simple terms",
    "Show me the exact patch for fastapi/websockets.py",
    "How do I write an asynchronous reproduction test in pytest?",
    "What potential memory leak risks should I guard against?"
  ];

  return `
    <div class="animate-fade" style="height: calc(100vh - var(--navbar-h) - 64px); display: flex; flex-direction: column;">
      
      <!-- Top Bar with Model Badges -->
      <div class="card card-compact flex justify-between items-center" style="margin-bottom: 16px; background: rgba(18,20,18,0.9); border-color: rgba(34,197,94,0.3);">
        <div class="flex items-center gap-12">
          <div style="width: 32px; height: 32px; border-radius: var(--radius-sm); background: var(--primary-glow); display:flex; align-items:center; justify-content:center; color: var(--primary);">
            ${Icons.bot(18)}
          </div>
          <div>
            <div style="font-weight: 700; font-size: 0.9375rem; color: #fff;">
              ContribLens AI Mentor
            </div>
            <div style="font-size: 0.72rem; color: var(--primary-light);">
              Dual Engine: Gemma 4 (Reasoning) + Qwen3-Coder-30B (Code Synthesis)
            </div>
          </div>
        </div>

        <div class="flex items-center gap-8">
          <span class="badge badge-green">${Icons.shield(12)} Context: tiangolo/fastapi #1428</span>
          <a href="#simulate" class="btn btn-primary btn-sm">
            <span>Open Simulation</span>
            ${Icons.arrowRight(12)}
          </a>
        </div>
      </div>

      <!-- Main Workspace: Split Chat and Context Sidebar -->
      <div style="display: grid; grid-template-columns: 1fr 320px; gap: 16px; flex: 1; min-height: 0;">
        
        <!-- Chat Panel (Left) -->
        <div class="card flex flex-col justify-between" style="padding: 16px; min-height: 0; background: #0e0e0e;">
          
          <!-- Message Scroll Area -->
          <div id="mentor-chat-messages" style="overflow-y: auto; flex: 1; padding-right: 8px; display: flex; flex-direction: column; gap: 14px;">
            ${dialogue.map(msg => `
              <div class="chat-bubble ${msg.sender === 'user' ? 'chat-bubble-user' : 'chat-bubble-ai'}">
                <div class="flex items-center gap-6" style="margin-bottom: 6px; font-size: 0.72rem; color: ${msg.sender === 'user' ? 'var(--primary-light)' : 'var(--text-muted)'}; font-weight: 600;">
                  ${msg.sender === 'user' ? '<span>You</span>' : `<span class="flex items-center gap-4 text-green">${Icons.bot(13)} ${msg.model || 'Gemma 4 + Qwen3-Coder'}</span>`}
                  <span style="font-weight: 400; color: var(--text-dim); margin-left: auto;">${msg.time || 'Just now'}</span>
                </div>
                <div style="color: #f4f4f5; font-size: 0.84rem; line-height: 1.6;">
                  ${formatMarkdown(msg.text)}
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Suggestion Chips Bar -->
          <div style="margin: 12px 0 8px; overflow-x: auto; white-space: nowrap; padding-bottom: 4px;" class="flex gap-6">
            ${suggestions.map(s => `
              <button 
                class="chip" 
                style="font-size: 0.72rem; padding: 5px 12px;" 
                onclick="window.ContribLensApp && window.ContribLensApp.sendMentorMessage('${s.replace(/'/g, "\\'")}')"
              >
                ${s}
              </button>
            `).join('')}
          </div>

          <!-- Chat Input Field -->
          <div class="flex gap-8 items-center" style="position: relative;">
            <input 
              id="mentor-user-input"
              type="text" 
              class="input" 
              placeholder="Ask anything about the codebase, async routing, or test patterns..." 
              style="padding-right: 80px;"
              onkeydown="if(event.key==='Enter') { window.ContribLensApp && window.ContribLensApp.sendMentorMessage(this.value); this.value=''; }"
            />
            <button 
              class="btn btn-primary btn-sm" 
              style="position: absolute; right: 6px;"
              onclick="const el=document.getElementById('mentor-user-input'); if(el && el.value.trim()){ window.ContribLensApp && window.ContribLensApp.sendMentorMessage(el.value); el.value=''; }"
            >
              <span>Send</span>
              ${Icons.arrowRight(12)}
            </button>
          </div>

        </div>

        <!-- Repository & Issue Context Sidebar (Right) -->
        <div class="card flex flex-col justify-between" style="padding: 16px; min-height: 0; overflow-y: auto;">
          <div>
            <div style="font-weight: 700; font-size: 0.875rem; color: #fff; margin-bottom: 12px; display:flex; align-items:center; gap:6px;">
              ${Icons.code(16)}
              <span>Live Codebase Context</span>
            </div>

            <!-- Context Box -->
            <div style="padding: 10px; background: rgba(0,0,0,0.3); border-radius: var(--radius-sm); border: 1px solid var(--border); font-size: 0.75rem; margin-bottom: 12px;">
              <div class="text-muted" style="margin-bottom: 2px;">Repository</div>
              <div class="mono" style="font-weight:700; color:#fff;">tiangolo/fastapi</div>
              <div class="text-muted" style="margin-top: 6px; margin-bottom: 2px;">Issue</div>
              <div style="color:var(--primary-light); font-weight:600;">#1428: WebSocket cleanup</div>
            </div>

            <!-- Target Files List -->
            <div style="margin-bottom: 14px;">
              <div style="font-size: 0.75rem; font-weight: 600; color: var(--text-muted); margin-bottom: 6px; text-transform: uppercase;">
                Target Files
              </div>
              <div class="flex flex-col gap-6" style="font-size: 0.75rem; font-family: var(--font-mono);">
                <div style="padding: 6px 8px; background: rgba(34,197,94,0.06); border: 1px solid rgba(34,197,94,0.2); border-radius: 4px; color: var(--green-300);">
                  fastapi/websockets.py
                </div>
                <div style="padding: 6px 8px; background: rgba(255,255,255,0.03); border: 1px solid var(--border); border-radius: 4px; color: var(--text-secondary);">
                  fastapi/routing.py
                </div>
                <div style="padding: 6px 8px; background: rgba(255,255,255,0.03); border: 1px solid var(--border); border-radius: 4px; color: var(--text-secondary);">
                  tests/test_websocket_cleanup.py
                </div>
              </div>
            </div>

            <!-- AI Guardrails -->
            <div style="padding: 10px; background: rgba(34,197,94,0.04); border-radius: var(--radius-sm); border: 1px solid rgba(34,197,94,0.15); font-size: 0.72rem; color: var(--text-muted);">
              <div style="color: var(--primary); font-weight: 600; margin-bottom: 4px;">Mentor Safety Guarantee</div>
              All code snippets generated by Qwen3-Coder are strictly checked for zero regressions against FastAPI's public API contract.
            </div>
          </div>

          <div style="margin-top: 16px;">
            <a href="#simulate" class="btn btn-primary w-full btn-sm">
              ${Icons.play(13)}
              <span>Switch to Simulation Studio</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  `;
}

function formatMarkdown(text = '') {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code class="mono" style="color:var(--green-300); background:rgba(34,197,94,0.08); padding:1px 5px; border-radius:3px;">$1</code>')
    .replace(/\n\n/g, '<br/><br/>')
    .replace(/\n- /g, '<br/>• ');
}
