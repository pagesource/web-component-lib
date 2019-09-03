import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

// Postcss
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import pxtorem from 'postcss-pxtorem';
import url from 'postcss-url';

const inlineOptions = {
  url: 'inline'
};

// https://www.npmjs.com/package/node-sass
const nodeSassConfig: any = {};

// https://github.com/postcss/autoprefixer
const autoprefixerConfig: any = {
  cascade: true,
  grid: 'autoplace'
};

// https://github.com/cuth/postcss-pxtorem
const pxtoremOptions: any = {
  rootValue: 16,
  unitPrecision: 5,
  propList: ['*'],
  selectorBlackList: [],
  replace: true,
  mediaQuery: true,
  minPixelValue: 1
};

export const config: Config = {
  namespace: 'web-component-lib',
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
  globalStyle: 'src/global/scss/index.scss',
  globalScript: 'src/global/js/app.ts',
  plugins: [
    sass(nodeSassConfig),
    postcss({
      plugins: [autoprefixer(autoprefixerConfig), pxtorem(pxtoremOptions)]
    })
  ]
};
