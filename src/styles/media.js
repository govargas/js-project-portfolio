import { theme } from './theme';
export const media = Object.fromEntries(
  Object.entries(theme.breakpoints).map(
    ([label, px]) => [label, `@media (min-width: ${px})`]
  )
);