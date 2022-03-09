import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import html from '@rollup/plugin-html';

const path = require('path');
const { name } = require("./package");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  base: 'http://localhost:3001/',
  plugins: [vue(), html({
    // copy 自 https://github.com/rollup/plugins/blob/db4a3f2e8ebd3328b5d43bcb272589866dfd5729/packages/html/src/index.ts#L34
    template: ({ attributes, files, meta, publicPath, title }) => {
      const makeHtmlAttributes = (attributes) => {
        if (!attributes) {
          return '';
        }
        const keys = Object.keys(attributes);
        return keys.reduce((result, key) => (result += ` ${key}="${attributes[key]}"`), '');
      };
      const scripts = (files.js || [])
        .map(({ fileName }) => {
          const attrs = makeHtmlAttributes(attributes.script);
          return `<script src="${publicPath}${fileName}"${attrs}></script>`;
        })
        .join('\n');
    
      const links = (files.css || [])
        .map(({ fileName }) => {
          const attrs = makeHtmlAttributes(attributes.link);
          return `<link href="${publicPath}${fileName}" rel="stylesheet"${attrs}>`;
        })
        .join('\n');
    
      const metas = meta
        .map((input) => {
          const attrs = makeHtmlAttributes(input);
          return `<meta${attrs}>`;
        })
        .join('\n');
    
      return `<!doctype html>
        <html${makeHtmlAttributes(attributes.html)}>
          <head>
            ${metas}
            <title>${title}</title>
            ${links}
            <link href="./style.css" rel="stylesheet"></link>
          </head>
          <body>
            <div id="app"></div>
            ${scripts}
          </body>
        </html>`;
    }
  })],
  build: {
    target: "esnext",
    lib: {
      name: `${name}-[name]`,
      entry: path.resolve(__dirname, "src/main.ts"),
      formats: ["umd"],
    },
  },
  server: {
    port: 3001
  }
})
