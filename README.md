# ContribLens — AI-Powered Open Source Contribution Platform

> **"ContribLens helps developers go from 'I want to contribute to open source' to 'I know exactly what to build, where to build it, and how to safely contribute it.'"**

ContribLens is an AI-powered open source mentorship and contribution platform that analyzes real GitHub repository telemetry (README, issues, pull requests, commit activity, language distributions, and documentation depth) to calculate a transparent **Project Health Score** and match developers with contribution opportunities tailored to their skills.

Once an issue is selected, ContribLens provides an **AI Contribution Mentor** co-powered by **Gemma 4** and **Qwen3-Coder-30B-A3B-Instruct** with deep codebase context, step-by-step contribution checklists, and an isolated **Contribution Simulation Sandbox** to safely prepare and test patches before submitting anything to real GitHub repositories.

---

## 🔄 Core End-to-End Workflow

```
SKILLS → DISCOVERY → ISSUE → UNDERSTANDING → AI MENTOR → CONTRIBUTION PATH → SIMULATION → REVIEW → DONE → ACHIEVEMENT
```

1. **SKILLS:** Multi-step wizard calibrating languages, framework proficiency, and domain interests.
2. **DISCOVERY:** Repository explorer scored by real GitHub activity and maintainer responsiveness.
3. **ISSUE:** Skill-matched curated issues with difficulty estimations and time predictions.
4. **UNDERSTANDING:** AI plain-English root-cause explainer demystifying what needs to change.
5. **AI MENTOR:** Architectural guidance and code walkthroughs via Gemma 4 + Qwen3-Coder.
6. **CONTRIBUTION PATH:** Step-by-step verified execution checklist.
7. **SIMULATION:** Flagship safe sandbox featuring Split and Unified diff viewers.
8. **REVIEW:** Automated test execution (Pytest) and automated AI safety/security audits.
9. **DONE:** Maintainer-friendly PR description generator.
10. **ACHIEVEMENT:** Developer karma, XP, and glowing badge gallery.

---

## ⭐ Key Features

- 🔍 **GitHub Repository Discovery:** Transparent scoring of PR velocity, issue responsiveness, and commit pulses.
- 📊 **Project Health Score (0–100):** Multi-factor analysis across documentation, maintainer velocity, and code quality.
- 🎯 **Skill-Based Matching:** Automatic alignment with Python, TypeScript, Go, Rust, Java, C/C++, and SQL skills.
- 📝 **AI Issue Explainer:** Breaks down complex issues into Plain English, Root Cause, and Recommended Fix.
- 🤖 **AI Contribution Mentor:** Dual-engine conversational assistant (Gemma 4 + Qwen3-Coder-30B).
- 🧪 **Contribution Simulation Studio:** Non-destructive sandbox with live side-by-side diffs and automated test runner.
- 🛡️ **Branch Protection Guarantee:** Zero auto-pushing or PR submissions without explicit user authorization.
- 🏆 **Achievement & XP System:** Unlocks badges for clean diffs, health inspections, and mentor mastery.
- 📱 **Responsive Emerald/Dark Aesthetic:** Optimized for desktop, tablet, and mobile with keyboard shortcuts (<kbd>⌘K</kbd> / <kbd>Ctrl+K</kbd>).

---

## 🚀 Running Locally

ContribLens is built with native modern web standards (ES Modules & CSS Variables), requiring **zero build step** to preview:

### Option 1: Python HTTP Server (Recommended)
```bash
# From the project root
python -m http.server 5173

# Open in your browser:
# http://localhost:5173/#dashboard
```

### Option 2: Any Static Web Server
```bash
npx serve .
# or
php -S localhost:5173
```

---

## 📁 Project Structure

```
contriblens/
├── index.html                 # HTML5 entry point with dark theme shell
├── .gitignore
├── README.md
├── public/
│   └── favicon.svg            # ContribLens emerald lens brand mark
└── src/
    ├── app.js                 # Master reactive router & state controller
    ├── styles/
    │   └── global.css         # Dark theme (#0a0a0a) with emerald/green accents (#22c55e)
    ├── data/
    │   └── mockData.js        # Repositories, issues, telemetry, diffs, and achievements
    ├── components/
    │   ├── icons.js           # Reusable Lucide-style inline SVGs
    │   ├── navbar.js          # Search bar, model badge, notifications, and profile
    │   └── sidebar.js         # Navigation links & sandbox security status
    └── pages/
        ├── landing.js         # Hero, 10-step workflow, pillars, and telemetry teaser
        ├── login.js           # Google, GitHub & instant demo authentication
        ├── onboarding.js      # 3-step skill calibration wizard
        ├── dashboard.js       # Scorecard, recommended repos, and matched issues
        ├── discover.js        # Filterable repository catalog with search & tags
        ├── repoDetail.js      # Health gauge, 12-week velocity chart, and file tree
        ├── issueDetail.js     # AI Issue Explainer, relevant files & contribution plan
        ├── mentor.js          # Gemma 4 + Qwen3-Coder multi-turn chat interface
        ├── simulation.js      # Sandbox diff viewer, test runner & AI review
        └── profile.js         # Developer scorecard & achievements gallery
```

---

## 🛡️ License

MIT License. Designed and engineered for open source developers everywhere.
