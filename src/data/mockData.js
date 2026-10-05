// ========================================================
// ContribLens — Mock Dataset
// Real-world open source projects, issues, diffs, and AI insights
// ========================================================

export const mockCurrentUser = {
  name: "Biswajit S.",
  username: "biswajit-dev",
  title: "Open Source Explorer & Full-Stack Builder",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  bio: "Passionate about Python async frameworks, modern TypeScript, and devtools. Learning to contribute to tier-1 open source safely.",
  joinedDate: "October 2026",
  languages: [
    { name: "Python", level: "Advanced", years: "4 yrs", color: "#3b82f6" },
    { name: "TypeScript", level: "Intermediate", years: "2.5 yrs", color: "#3178c6" },
    { name: "Go", level: "Beginner", years: "1 yr", color: "#00add8" },
    { name: "Rust", level: "Exploring", years: "6 mos", color: "#dea584" }
  ],
  interests: ["Web Services & APIs", "DevOps & CLI", "AI Infrastructure", "Documentation", "Testing & QA"],
  stats: {
    contributionsSimulated: 4,
    prsReady: 2,
    reposExplored: 19,
    mentorHours: 6.8,
    healthAudits: 32,
    achievementPoints: 480
  },
  achievements: [
    { id: "first-sim", title: "First Safe Simulation", desc: "Simulated your first contribution without touching production branches.", icon: "shield", unlocked: true, date: "Oct 2, 2026", rarity: "Common" },
    { id: "health-scout", title: "Health Inspector", desc: "Inspected transparent Project Health Scores for 10+ active repositories.", icon: "activity", unlocked: true, date: "Oct 3, 2026", rarity: "Uncommon" },
    { id: "clean-diff", title: "Zero Regression Diff", desc: "Passed all simulated unit tests and AI review on your first try.", icon: "check-circle", unlocked: true, date: "Oct 4, 2026", rarity: "Rare" },
    { id: "mentor-scholar", title: "Mentor Scholar", desc: "Engaged in deep multi-turn architectural mentoring with Gemma 4 + Qwen3-Coder.", icon: "bot", unlocked: true, date: "Oct 5, 2026", rarity: "Rare" },
    { id: "polyglot-contributor", title: "Polyglot Explorer", desc: "Prepare simulated contributions in 3 or more distinct programming languages.", icon: "code", unlocked: false, date: null, rarity: "Epic" },
    { id: "open-source-hero", title: "Production Ready", desc: "Submit your verified simulation directly to GitHub via authenticated PR.", icon: "award", unlocked: false, date: null, rarity: "Legendary" }
  ]
};

export const mockRepositories = [
  {
    id: "fastapi",
    owner: "tiangolo",
    name: "fastapi",
    fullName: "tiangolo/fastapi",
    description: "FastAPI framework, high performance, easy to learn, fast to code, ready for production with Python 3.8+.",
    stars: 76400,
    forks: 6420,
    openIssues: 184,
    primaryLanguage: "Python",
    languageColor: "#3572A5",
    tags: ["api", "asyncio", "python", "pydantic", "starlette"],
    healthScore: 96,
    healthBreakdown: {
      documentation: 98,
      issueResponseTime: "3.2 hours avg",
      prMergeRate: "86% merged",
      communityActivity: 97,
      codeQuality: "A+"
    },
    skillMatchPercent: 96,
    activityWeeklyCommits: [42, 38, 55, 60, 48, 52, 70, 64, 58, 49, 63, 71],
    defaultBranch: "master",
    license: "MIT",
    maintainerResponseRating: "Exceptional",
    featuredIssueId: "1428"
  },
  {
    id: "docusaurus",
    owner: "facebook",
    name: "docusaurus",
    fullName: "facebook/docusaurus",
    description: "Easy to maintain open source documentation websites with React, Markdown, and custom plugins.",
    stars: 55800,
    forks: 8200,
    openIssues: 240,
    primaryLanguage: "TypeScript",
    languageColor: "#3178c6",
    tags: ["react", "documentation", "markdown", "ssg", "typescript"],
    healthScore: 94,
    healthBreakdown: {
      documentation: 99,
      issueResponseTime: "4.5 hours avg",
      prMergeRate: "82% merged",
      communityActivity: 94,
      codeQuality: "A"
    },
    skillMatchPercent: 91,
    activityWeeklyCommits: [30, 35, 40, 28, 45, 52, 48, 60, 38, 44, 50, 42],
    defaultBranch: "main",
    license: "MIT",
    maintainerResponseRating: "High",
    featuredIssueId: "3082"
  },
  {
    id: "uv",
    owner: "astral-sh",
    name: "uv",
    fullName: "astral-sh/uv",
    description: "An extremely fast Python package and project manager, written in Rust. Replaces pip, pip-tools, virtualenv.",
    stars: 38900,
    forks: 1450,
    openIssues: 92,
    primaryLanguage: "Rust",
    languageColor: "#dea584",
    tags: ["python", "rust", "packaging", "cli", "performance"],
    healthScore: 98,
    healthBreakdown: {
      documentation: 96,
      issueResponseTime: "1.8 hours avg",
      prMergeRate: "93% merged",
      communityActivity: 99,
      codeQuality: "A+"
    },
    skillMatchPercent: 78,
    activityWeeklyCommits: [88, 92, 105, 110, 95, 120, 134, 118, 125, 140, 112, 128],
    defaultBranch: "main",
    license: "MIT / Apache-2.0",
    maintainerResponseRating: "Lightning",
    featuredIssueId: "2410"
  },
  {
    id: "gin",
    owner: "gin-gonic",
    name: "gin",
    fullName: "gin-gonic/gin",
    description: "Gin is a HTTP web framework written in Go (Golang). It features a Martini-like API with much better performance.",
    stars: 77200,
    forks: 8100,
    openIssues: 120,
    primaryLanguage: "Go",
    languageColor: "#00ADD8",
    tags: ["go", "golang", "http", "router", "middleware"],
    healthScore: 88,
    healthBreakdown: {
      documentation: 86,
      issueResponseTime: "12 hours avg",
      prMergeRate: "74% merged",
      communityActivity: 85,
      codeQuality: "A"
    },
    skillMatchPercent: 82,
    activityWeeklyCommits: [14, 18, 12, 22, 19, 25, 18, 20, 15, 24, 21, 19],
    defaultBranch: "master",
    license: "MIT",
    maintainerResponseRating: "Moderate",
    featuredIssueId: "1920"
  },
  {
    id: "supabase",
    owner: "supabase",
    name: "supabase",
    fullName: "supabase/supabase",
    description: "The open source Firebase alternative. Build production backends with PostgreSQL, Auth, Realtime, and Edge Functions.",
    stars: 74200,
    forks: 6900,
    openIssues: 380,
    primaryLanguage: "TypeScript",
    languageColor: "#3178c6",
    tags: ["database", "postgres", "auth", "realtime", "storage"],
    healthScore: 92,
    healthBreakdown: {
      documentation: 95,
      issueResponseTime: "6.1 hours avg",
      prMergeRate: "79% merged",
      communityActivity: 96,
      codeQuality: "A"
    },
    skillMatchPercent: 89,
    activityWeeklyCommits: [72, 68, 85, 90, 84, 95, 102, 88, 94, 86, 92, 98],
    defaultBranch: "master",
    license: "Apache-2.0",
    maintainerResponseRating: "High",
    featuredIssueId: "4190"
  },
  {
    id: "pre-commit",
    owner: "pre-commit",
    name: "pre-commit",
    fullName: "pre-commit/pre-commit",
    description: "A framework for managing and maintaining multi-language pre-commit git hooks in modern development workflows.",
    stars: 12400,
    forks: 980,
    openIssues: 45,
    primaryLanguage: "Python",
    languageColor: "#3572A5",
    tags: ["git", "hooks", "python", "linter", "quality"],
    healthScore: 91,
    healthBreakdown: {
      documentation: 92,
      issueResponseTime: "2.5 hours avg",
      prMergeRate: "89% merged",
      communityActivity: 88,
      codeQuality: "A+"
    },
    skillMatchPercent: 94,
    activityWeeklyCommits: [18, 22, 16, 25, 20, 24, 28, 22, 19, 21, 26, 23],
    defaultBranch: "main",
    license: "MIT",
    maintainerResponseRating: "High",
    featuredIssueId: "1104"
  }
];

export const mockIssues = [
  {
    id: "1428",
    repoId: "fastapi",
    repoName: "tiangolo/fastapi",
    number: 1428,
    title: "Fix asynchronous websocket connection cleanup on worker disconnect",
    status: "open",
    labels: ["good first issue", "bug", "websockets", "help wanted"],
    isGoodFirstIssue: true,
    author: "k-anderson",
    authorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&auto=format&fit=crop&q=80",
    createdAt: "2 days ago",
    commentsCount: 7,
    difficulty: "Intermediate",
    difficultyLevel: 2, // 1: Beginner, 2: Intermediate, 3: Advanced
    estimatedTime: "45 minutes",
    skillMatch: 96,
    language: "Python",
    description: `When a client abruptly closes a WebSocket connection during heavy load or network flapping, the active socket cleanup loop does not trigger the unregister hook in \`ConnectionPool\`. 

This causes memory overhead and stale connection descriptors in Uvicorn worker threads. We need to wrap the connection termination in an explicit \`try...finally\` guard and ensure \`on_disconnect()\` is awaited cleanly even if \`WebSocketDisconnect\` was not caught by user route code.`,
    aiExplainer: {
      summary: "Under sudden network drops, WebSocket handles are left unreleased in the background pool. Your job is to ensure proper cleanup is guaranteed in the transport lifecycle.",
      whyItMatters: "Without this fix, long-running production services accumulate lingering socket objects, degrading throughput over days of uptime.",
      rootCause: "The current route handler assumes client disconnects will cleanly raise `WebSocketDisconnect`. Abrupt TCP resets bypass that exception path directly to ASGI closure.",
      whatToChange: "Update `fastapi/routing.py` and `fastapi/websockets.py` to bind cleanup inside an asyncio-shielded `finally` block."
    },
    relevantFiles: [
      {
        path: "fastapi/websockets.py",
        lines: "L88-124",
        purpose: "Core WebSocket wrapper object managing connection state & lifecycle hooks",
        snippet: `class WebSocket(HTTPConnection):
    async def close(self, code: int = 1000, reason: Optional[str] = None) -> None:
        # Proposed fix adds guaranteed cleanup notification here
        await self._send({"type": "websocket.close", "code": code, "reason": reason})`
      },
      {
        path: "fastapi/routing.py",
        lines: "L250-295",
        purpose: "ASGI dispatch pipeline handling the WebSocket handshake & disconnect signals",
        snippet: `async def app(scope: Scope, receive: Receive, send: Send) -> None:
    websocket = WebSocket(scope, receive=receive, send=send)
    try:
        await dependant.call(**values)
    finally:
        await websocket.ensure_cleanup()`
      },
      {
        path: "tests/test_websocket_cleanup.py",
        lines: "L14-58",
        purpose: "Reproduction test case simulating abrupt client TCP reset",
        snippet: `async def test_abrupt_disconnect_cleanup(client):
    with client.websocket_connect("/ws") as ws:
        pass  # Close without clean handshake
    assert active_connections_count() == 0`
      }
    ],
    contributionPlan: [
      { step: 1, title: "Reproduce the issue with a failing test", desc: "Open `tests/test_websocket_cleanup.py` and implement `test_abrupt_disconnect_cleanup` asserting the pool size is 0 after sudden close.", done: true },
      { step: 2, title: "Add `ensure_cleanup()` to `WebSocket` class", desc: "Ensure connection teardown logic is idempotent so multiple close calls do not error out.", done: true },
      { step: 3, title: "Shield ASGI teardown in `routing.py`", desc: "Wrap the endpoint invocation in a `try...finally` block that calls the cleanup handler.", done: false },
      { step: 4, title: "Run test suite & verify 0 regressions", desc: "Execute `pytest tests/test_websocket*.py` and verify all existing WebSocket tests remain green.", done: false }
    ],
    suggestedMentorPrompts: [
      "Explain how ASGI handles WebSocket disconnects in simple terms",
      "Show me the exact code diff for `fastapi/websockets.py`",
      "How do I simulate an abrupt TCP reset in pytest?",
      "Review my proposed exception handling approach"
    ]
  },
  {
    id: "3082",
    repoId: "docusaurus",
    repoName: "facebook/docusaurus",
    number: 3082,
    title: "Support custom code block line highlight badges in theme-classic",
    status: "open",
    labels: ["feature", "good first issue", "theme-classic", "typescript"],
    isGoodFirstIssue: true,
    author: "slorber",
    authorAvatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&auto=format&fit=crop&q=80",
    createdAt: "3 days ago",
    commentsCount: 12,
    difficulty: "Beginner",
    difficultyLevel: 1,
    estimatedTime: "30 minutes",
    skillMatch: 91,
    language: "TypeScript",
    description: "Allow authors to highlight lines in fenced code blocks with custom semantic badges (e.g. `// [!code warning]` or `// [!code highlight]`).",
    aiExplainer: {
      summary: "Enhance Prism.js code blocks so special comment directives convert to clean pill badges inside documentation code blocks.",
      whyItMatters: "Great for technical tutorials explaining specific line changes or warnings.",
      rootCause: "Current regex parser only checks for `{1-3}` line numbers, ignoring comment-based directive syntax.",
      whatToChange: "Add a directive token parser in `packages/docusaurus-theme-classic/src/theme/CodeBlock/parseCode.ts`."
    },
    relevantFiles: [
      { path: "packages/docusaurus-theme-classic/src/theme/CodeBlock/parseCode.ts", lines: "L45-80", purpose: "Code line directive parser" },
      { path: "packages/docusaurus-theme-classic/src/theme/CodeBlock/styles.module.css", lines: "L110-140", purpose: "Badge styling" }
    ],
    contributionPlan: [
      { step: 1, title: "Add directive regex pattern", desc: "Recognize `[!code warning]` and `[!code info]` in code comments.", done: false },
      { step: 2, title: "Attach line metadata", desc: "Forward badge class to Line component props.", done: false },
      { step: 3, title: "Add visual styles", desc: "Provide default green/amber styling in CSS module.", done: false }
    ],
    suggestedMentorPrompts: [
      "How does Docusaurus parse code comments during SSR?",
      "Show me a clean TypeScript regex to capture code block directives",
      "Where are Jest unit tests located for theme-classic?"
    ]
  },
  {
    id: "2410",
    repoId: "uv",
    repoName: "astral-sh/uv",
    number: 2410,
    title: "Improve CLI help error formatting when invalid platform wheel tag passed",
    status: "open",
    labels: ["cli", "diagnostics", "good first issue", "rust"],
    isGoodFirstIssue: true,
    author: "charliermarsh",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80",
    createdAt: "5 days ago",
    commentsCount: 4,
    difficulty: "Intermediate",
    difficultyLevel: 2,
    estimatedTime: "1 hour",
    skillMatch: 78,
    language: "Rust",
    description: "When users supply an invalid `--platform` or `--python-version` flag, provide typo suggestions using Levenshtein distance.",
    aiExplainer: {
      summary: "Make uv CLI friendlier by suggesting the closest valid architecture tag when a user makes a typo like `linux_x86_64` instead of `manylinux_2_28_x86_64`.",
      whyItMatters: "Huge developer experience win for users working in diverse CI/CD cross-compilation environments.",
      rootCause: "Wheel tag parser returns a generic string error rather than querying the known target architecture dictionary.",
      whatToChange: "Implement `did_you_mean()` suggestion lookup inside `crates/uv-resolver/src/tags.rs`."
    },
    relevantFiles: [
      { path: "crates/uv-resolver/src/tags.rs", lines: "L112-160", purpose: "Platform tag validation & matching" }
    ],
    contributionPlan: [
      { step: 1, title: "Collect valid platform list", desc: "Reference supported PEP 425 platform tags.", done: false },
      { step: 2, title: "Add closest match logic", desc: "Use strsim / Levenshtein metric for distance < 3.", done: false }
    ],
    suggestedMentorPrompts: [
      "How does Astral structure error formatting in CLI crates?",
      "Walk me through the platform tag enum in uv"
    ]
  }
];

export const mockSimulationDiff = {
  issueId: "1428",
  repoFullName: "tiangolo/fastapi",
  targetBranch: "master",
  simulatedBranch: "contriblens/safe-ws-cleanup-patch",
  filesChanged: 2,
  additions: 19,
  deletions: 4,
  testSummary: {
    total: 28,
    passed: 28,
    failed: 0,
    timeMs: 412,
    coverageChange: "+1.8%"
  },
  aiReview: {
    status: "APPROVED",
    score: 98,
    reviewerModel: "Gemma 4 + Qwen3-Coder-30B-A3B-Instruct",
    checks: [
      { name: "Safety & Memory Leaks", status: "PASS", detail: "Active socket pool correctly decrements on unexpected client drop. No circular references." },
      { name: "Backwards Compatibility", status: "PASS", detail: "Standard WebSocketDisconnect handler path remains completely unaltered." },
      { name: "Exception Masking", status: "PASS", detail: "Non-disconnect application errors bubble up properly through ASGI error middleware." },
      { name: "Code Style & Type Safety", status: "PASS", detail: "100% mypy type compliance with strict Nullable Optional annotations." }
    ],
    recommendation: "This patch is fully isolated, safe, and ready to be formatted into a clean GitHub Pull Request."
  },
  diffChunks: [
    {
      file: "fastapi/websockets.py",
      oldPath: "a/fastapi/websockets.py",
      newPath: "b/fastapi/websockets.py",
      lines: [
        { type: "info", content: "@@ -94,10 +94,18 @@ class WebSocket(HTTPConnection):" },
        { type: "context", content: "     async def receive_text(self) -> str:" },
        { type: "context", content: "         message = await self.receive()" },
        { type: "context", content: "         self._raise_on_disconnect(message)" },
        { type: "context", content: "         return message[\"text\"]" },
        { type: "context", content: "" },
        { type: "remove", content: "-    async def close(self, code: int = 1000, reason: Optional[str] = None) -> None:" },
        { type: "remove", content: "-        await self._send({\"type\": \"websocket.close\", \"code\": code, \"reason\": reason})" },
        { type: "add", content: "+    async def close(self, code: int = 1000, reason: Optional[str] = None) -> None:" },
        { type: "add", content: "+        try:" },
        { type: "add", content: "+            await self._send({\"type\": \"websocket.close\", \"code\": code, \"reason\": reason})" },
        { type: "add", content: "+        finally:" },
        { type: "add", content: "+            await self.ensure_cleanup()" },
        { type: "add", content: "+" },
        { type: "add", content: "+    async def ensure_cleanup(self) -> None:" },
        { type: "add", content: "+        \"\"\"Guarantee connection pool deregistration idempotently.\"\"\"" },
        { type: "add", content: "+        if not self._is_cleaned_up:" },
        { type: "add", content: "+            self._is_cleaned_up = True" },
        { type: "add", content: "+            if self._pool_unregister_hook:" },
        { type: "add", content: "+                await self._pool_unregister_hook(self)" },
        { type: "context", content: "" },
        { type: "context", content: "     def _raise_on_disconnect(self, message: Message) -> None:" }
      ]
    },
    {
      file: "fastapi/routing.py",
      oldPath: "a/fastapi/routing.py",
      newPath: "b/fastapi/routing.py",
      lines: [
        { type: "info", content: "@@ -274,7 +274,12 @@ async def app(scope: Scope, receive: Receive, send: Send):" },
        { type: "context", content: "         websocket = WebSocket(scope, receive=receive, send=send)" },
        { type: "context", content: "         try:" },
        { type: "context", content: "             await dependant.call(**values)" },
        { type: "remove", content: "-        except WebSocketDisconnect:" },
        { type: "remove", content: "-            pass" },
        { type: "add", content: "+        except WebSocketDisconnect:" },
        { type: "add", content: "+            pass" },
        { type: "add", content: "+        finally:" },
        { type: "add", content: "+            # Guarantee worker thread teardown even on abrupt TCP resets" },
        { type: "add", content: "+            await websocket.ensure_cleanup()" },
        { type: "context", content: "     return app" }
      ]
    }
  ]
};

export const mockMentorDialogue = [
  {
    sender: "ai",
    model: "Gemma 4 + Qwen3-Coder",
    time: "10:14 AM",
    text: `Hello Biswajit! I'm your **ContribLens Contribution Mentor**. 

I have analyzed the **tiangolo/fastapi** repository, issue **#1428**, and the current WebSocket routing implementation.

Here is a quick snapshot:
- **Project Health Score**: 96/100 (high maintainer merge rate)
- **Target File**: \`fastapi/websockets.py\` and \`fastapi/routing.py\`
- **Goal**: Guarantee connection cleanup during abrupt client resets

How would you like to start? You can click any prompt below, or ask me anything directly!`
  }
];
