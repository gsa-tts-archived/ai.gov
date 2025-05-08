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
      fontFace: true,
      keyframes: true,
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
            /usa-in-page.+/
        ]
      },
      dynamicAttributes: [
          "contentEditable",
          "title",
          "type"
      ],
      blocklist: [],
      content: [
        pathJoin(__dirname, 'src/**/*.{astro,svelte,ts,tsx,js,jsx}'),
        pathJoin(__dirname, '../../packages/ui', '/src/**/*.{svelte,js,jsx}'),
      ],
      extractors: [
        {
          extractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
          extensions: ['astro', 'html']
        }
      ]
    })],
});
