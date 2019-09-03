import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx';

addParameters({
  options: {
    panelPosition: 'right'
  }
});

addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(jsxDecorator);

configure(() => {
  // automatically import all files ending in *.stories.js
  const req = require.context('../src/', true, /.stories.js$/);
  req.keys().forEach(filename => req(filename));
}, module);
