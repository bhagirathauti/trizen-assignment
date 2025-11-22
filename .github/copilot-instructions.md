<!-- Copilot / AI agent instructions for Trizen-Assignment repository -->

Purpose
-------
This file gives succinct, actionable guidance for AI coding agents working in this repository so they can be productive immediately.

Repository layout (big picture)
------------------------------
- Top-level folders: `client/` and `server/`.
- `client/` is a React + TypeScript app built with Vite. Key files:
  - `client/package.json` (scripts: `dev`, `build`, `lint`, `preview`)
  - `client/vite.config.ts` (Vite config and plugin hooks)
  - `client/tsconfig*.json` (`tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`)
  - `client/eslint.config.js` and `client/README.md` (linting guidance)
  - `client/src/` — main source (entry points: `src/main.tsx`, `src/App.tsx`)
  - `client/public/` — static assets served by Vite
- `server/` currently contains a minimal Node package (`server/package.json`) with no implemented server scripts — treat it as a placeholder unless the user supplies more.

Primary workflows (how devs run and build)
----------------------------------------
- Local development (frontend):
  - Change into `client/` and run `npm install` then `npm run dev` to start Vite HMR (default port 5173).
  - Use `npm run lint` in `client/` to run ESLint.
  - Build for production in `client/` with `npm run build` (note: script runs `tsc -b && vite build`).
  - Preview production build with `npm run preview` inside `client/` after `build`.
- Server: there are no production/test scripts beyond a placeholder `test` in `server/package.json`. Before making server changes, confirm the intended runtime (CommonJS is set by `type: "commonjs"`).

Patterns and conventions discovered in this repo
----------------------------------------------
- TypeScript-first frontend: the client uses TypeScript and TypeScript-aware ESLint rules. Prefer editing `tsconfig.app.json` when adding app-level compiler options.
- Build orchestration: the `client` `build` script runs `tsc -b` before `vite build` — ensure any new TypeScript project references or composite projects are kept correct.
- React 19 with Vite plugin: `@vitejs/plugin-react` is used; prefer functional components and modern React patterns (see `src/App.tsx`).
- Linting: `eslint.config.js` is present; follow existing rules rather than adding ad-hoc ESLint overrides.

Integration points and what to inspect when changing features
-----------------------------------------------------------
- If you change client runtime behavior, inspect `client/vite.config.ts` (dev server proxy, env variables, custom plugin logic).
- Static assets and public path: `client/public/` is served as-is; reference them from `index.html` or via import in `src`.
- Type-aware linting & build: `tsconfig.node.json` and `tsconfig.app.json` are referenced by the ESLint config — update them if adding new paths or build targets.
- If you add an API/server, update `server/package.json`, and document expected ports and CORS settings in `client/vite.config.ts` (dev proxy) to keep local integration smooth.

Examples (explicit references)
------------------------------
- Start dev server: `cd client; npm install; npm run dev`
- Rebuild production bundle: `cd client; npm run build` (this runs `tsc -b && vite build`)
- Lint the client: `cd client; npm run lint`
- Entry points to inspect for UI changes: `client/src/main.tsx` and `client/src/App.tsx`.

When to ask the user
--------------------
- If you plan to implement a server API, ask which framework/runtime they want (Express, Fastify, Nest, etc.), and whether the server should be TypeScript or JavaScript.
- If adding CI/CD or deployment instructions, confirm hosting target and desired build outputs (static `dist/` or server-rendered).

What not to assume
------------------
- Do not assume a running backend exists — `server/` is effectively empty.
- Do not assume tests exist — there are no automated tests in the current tree.

Next steps for an AI agent starting work
---------------------------------------
1. Inspect `client/src/` to locate the UI component for the requested change.
2. Run `cd client; npm i` and `npm run dev` locally to reproduce and iterate.
3. If the task touches build or lint behavior, update `client/package.json`, `tsconfig.*`, and `eslint.config.js` accordingly and run `npm run build` and `npm run lint` to verify.

If anything in this file is unclear or you want additional project-specific rules (commit message style, branching strategy, test conventions), tell me which area to expand and I'll update this file.
