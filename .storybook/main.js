module.exports = {
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register',
    '@storybook/addon-knobs/register',
    '../seeAlso/register',
  ],
  babel: async (options) => ({
    // Update your babel configuration here
    ...options,
  }),
  framework: '@storybook/react',
  stories: ['../**/*.stories.@(js|mdx)'],
  webpackFinal: async (config, { configType }) => {
    // Make whatever fine-grained changes you need
    // Return the altered config
    return config;
  },
};