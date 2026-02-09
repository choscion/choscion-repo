import type { Preview } from "@storybook/react"

const preview: Preview = {
  decorators: [
    (Story) => {
      if (typeof document !== "undefined") {
        document.documentElement.dataset.theme = "light"
        document.documentElement.style.colorScheme = "light"
      }
      return Story()
    },
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "padded",
  },
}

export default preview
