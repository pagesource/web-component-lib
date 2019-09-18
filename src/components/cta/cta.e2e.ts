import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('cta E2E Tests >>>', () => {
  it('should render a cta Component', async () => {
    const page: E2EPage = await newE2EPage({
      html: `<wc-cta></wc-cta>`
    });

    const results = await page.compareScreenshot();
    // expect(results).toMatchScreenshot();
  });
});
