import AXE_LOCALE_JA from "axe-core/locales/ja.json";

import '../src/index.css';

// Register the msw addon
import { initialize, mswLoader } from "msw-storybook-addon";

// Initalize MSW
initialize();

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    a11y: {
      config: {
        locale: AXE_LOCALE_JA, // Japanese locale
      },
    },
  },
  loaders: [mswLoader],
};

export default preview;
