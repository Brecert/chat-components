import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import postcssPresentEnv from 'postcss-preset-env'
console.log(postcssPresentEnv)
export const config: Config = {
  namespace: 'chat-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [
    sass(),
    postcss({
      plugins: [postcssPresentEnv()]
    })
  ]
};
