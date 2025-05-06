import baseConfig from '../../.prettierrc.mjs';

export default {
  ...baseConfig,
  overrides: [
    ...baseConfig.overrides,
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  plugins: ['prettier-plugin-astro'],
};
