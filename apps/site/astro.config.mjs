// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import purgecss from 'astro-purgecss';
import { join as pathJoin, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    // purgecss should go last
    purgecss({
      fontFace: true, // Removes unused @font-face rules
      keyframes: true, // Removes unused keyframes
      safelist: {
        standard: [
          /abbr/,
          "kbd",
          "samp",
          "sub",
          "optgroup",
          "fieldset",
          "summary",
          "cite",
          "dfn",
          "pre",
        ],
        deep: [
          /usa-in-page.+/,
        ],
      },
      dynamicAttributes: [
        "contentEditable",
        "title",
        "type",
      ],
      blocklist: [],
      content: [
        pathJoin(__dirname, 'src/**/*.{astro,svelte,ts,tsx,js,jsx}'),
        pathJoin(__dirname, '../../packages/ui', '/src/**/*.{svelte,js,jsx}'),
      ],
      extractors: [
        {
          extractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
          extensions: ['astro', 'html'],
        },
      ],
    }),
  ],
  experimental: {
    // Astro Experimental Fonts API for managing custom fonts
    fonts: [
      {
        name: 'Archivo',
        cssVariable: '--ai-font-family-sans', // Scoped variable name
        provider: 'local', // Serves fonts locally
        variants: [
          {
            src: [{ url: './src/fonts/archivo-regular.woff2' }],
            weight: 400,
            style: 'normal',
          },
          {
            src: [{ url: './src/fonts/archivo-semibold.woff2' }],
            weight: 600,
            style: 'normal',
          },
        ],
      },
    ],
  },
});