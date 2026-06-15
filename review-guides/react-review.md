# React Review Rubric

Use this checklist when reviewing React/TypeScript changes in this repo.

## Must-check areas

- Hook correctness: stable dependencies, cleanup for subscriptions/timers/event listeners, no render-time side effects.
- State design: avoid derived state when props or computed values are enough; keep state local unless sharing is needed.
- Component boundaries: keep components focused; split large components when logic, layout, and data fetching blur together.
- Props and keys: use stable keys in lists; avoid index keys when items can reorder or be inserted/removed.
- Async flows: handle loading, empty, and error states; avoid unhandled promise paths and race conditions.
- Accessibility: semantic elements, keyboard support, focus management, alt text, color contrast, and aria only when needed.
- Performance: flag unnecessary re-renders, heavy work in render, overuse of memoization, and large bundles or static imports that should be lazy-loaded.
- TypeScript quality: prefer explicit domain types over `any`, unsafe casts, and duplicated shapes.
- Security and safety: avoid unsafe HTML, insecure URL handling, leaking secrets, or trusting user input without validation.
- Deploy risks: watch GitHub Pages base paths, asset paths, and client-side routing behavior.

## React-specific cautions

- Do not recommend `useMemo` or `useCallback` by default; only suggest them when there is a clear measurable need.
- Flag `useEffect` used for pure derivation, formatting, or copying props into state.
- Flag missing cleanup for subscriptions, intervals, observers, and custom event listeners.
- Flag stale closures, unstable object/function dependencies, and effects that can loop.
- Flag deeply nested prop drilling when a simpler local component boundary or context would be clearer.

## Review style

- Report only concrete, actionable risks.
- Separate real bugs from style preferences.
- Prioritize issues that affect correctness, maintainability, accessibility, performance, or deployability.
- If no meaningful problems exist, say so explicitly instead of inventing nitpicks.
