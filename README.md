# Handling Events: Vue VS. Solid

This project compares adding multiple events to the same HTML element in both Vue and Solid using multiple components. Projects are intended to be as equivalent as possible.

In Vue, you can add events to the same HTML element from multiple components. However in Solid, events are overridden unless the root of component is an HTML element (multiple events cannot be added to multiple components using the same HTML element).

## Get Started

1. Install dependencies: `pnpm install`
2. Start both Vue/Solid projects: `pnpm dev` (two browser tabs will be opened)
3. Open developer tools to see `console.logs`
4. Toggle [`useDivAsComponent` in Solid](./events-solid/src/index.tsx#L5) and [`useDivAsComponent` in Vue](./events-vue/src/Inner.vue#L3) to see differences in behavior.
