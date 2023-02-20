module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  // "staticDirs": ['../public/'],
  // "typescript": { reactDocgen: 'react-docgen' }
  // staticDirs: [{ from: "../public", to: "/assets" }],
  webpackFinal: async (config) => {
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test(".svg")
    );
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      enforce: "pre",
      loader: require.resolve("@svgr/webpack"),
    });
    return config;
  },
};
