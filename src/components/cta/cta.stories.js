import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
// Load component readme file:
import readmeFile from './readme.md';

storiesOf('wc-cta', module)
  .addDecorator(withReadme(readmeFile))
  .add('CTA', () => {
    const props = {
      message: text('feature text', 'Hello World')
    };

    return <wc-cta {...props} mode="default"></wc-cta>;
  });
