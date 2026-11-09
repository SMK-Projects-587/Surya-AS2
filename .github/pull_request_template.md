## Summary

<!-- What does this PR do, and why? One or two sentences. -->

## Preview

🔗 **Deployed preview:** <!-- https://... -->

## Screenshots

<!-- Required for any visual change. Delete this section if not applicable. -->

|            Before             |             After             |
| :---------------------------: | :---------------------------: |
| <!-- drag screenshot here --> | <!-- drag screenshot here --> |

## Checklist

### Code quality (run these, then tick)

- [ ] Self-reviewed my own code (`git diff main`)
- [ ] Formatted: `pnpm format`
- [ ] No lint errors: `pnpm lint`
- [ ] No TypeScript errors: `pnpm tsc --noEmit`
- [ ] Production build passes: `pnpm build`
- [ ] No new console warnings or errors (browser DevTools, F12)

### Conventions

- [ ] Commit messages follow `type: subject` (e.g. `feat: add navbar markup`)
- [ ] Classes composed with `cn()` — no manual string concatenation
- [ ] No inline `style={{}}` and no component-scoped CSS files
- [ ] Imports use `@/` for anything outside the current folder
- [ ] Props typed with an interface named `[ComponentName]Props`, no `any`
- [ ] Root element of each component accepts and forwards `className`

### Behavior

- [ ] Mobile-first: checked at ~390px, then tablet, then desktop (DevTools device toolbar)
- [ ] Semantic HTML and accessible controls (`<nav>`, `<button>`, labels); no `jsx-a11y` lint warnings
- [ ] Cross-browser checked (Chrome, Firefox)
- [ ] Tests pass if any were added or touched: `pnpm test`
