import { addParameters } from "@storybook/vue";


addParameters({
  docs: { inlineStories: true },
  options: {
      storySort: (a, b) => a[1].id.localeCompare(b[1].id),
  },
});
