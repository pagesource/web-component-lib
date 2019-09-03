/**
 *
 * cta
 *
 */

import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: `wc-cta`,
  styleUrls: {
    default: './cta.default.scss'
  },
  shadow: true
})
export class CtaComponent {
  /**
   * Optional. Specify which of your styleUrls to apply.
   * Defaults to the value of the global Context.mode defined in app.ts.
   * Each "mode" results in a separate component dist file, thus avoiding unused css in component variants.
   */
  @Prop() public mode?: string;

  // optional message prop
  @Prop() public message?: string;

  public render() {
    return <div>{this.message}</div>;
  }
}
