module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/preset-create-react-app"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    autodocs: 'tag',
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      allowSyntheticDefaultImports: false,
      // speeds up storybook build time
      esModuleInterop: false,
      // speeds up storybook build time
      shouldExtractLiteralValuesFromEnum: true,
      // makes union prop types like variant and size appear as select controls
      shouldRemoveUndefinedFromOptional: true,
      // makes string and boolean types that can be undefined appear as inputs and switches
      propFilter: prop => prop.parent ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName) : true
    }
  }
};
