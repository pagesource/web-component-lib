import { newSpecPage } from '@stencil/core/dist/testing';

import { CtaComponent } from './cta';

const compMarkup = `<wc-cta heading="About the collection" active="false"></wc-cta>`;

describe('cta Spec Tests >>>', () => {
  it('should render a cta Component', async () => {
    const page = await newSpecPage({
      html: compMarkup,
      components: [CtaComponent],
      supportsShadowDom: false
    });
    expect(page.root).not.toBeNull();
    // snapshot testing
    expect(page.root).toMatchSnapshot();
  });
});
