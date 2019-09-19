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
  @Prop() public displaytext?: string;
  /**
   * Set href attribute if you want the output to be link else button will be created
   */
  @Prop() public href?: string;

  public render() {
    let props = {};
    /**
     * Choose if href is passed in tag then a tag is generated else button tag is generated
     */
    const Wrapper: any = this.href ? 'a' : 'button';
    /**
     * Set href props
     */

    if (this.href) {
      props = {
        href: this.href
      };
    }
    return (
      <Wrapper {...props}>
        <slot></slot>
        {this.displaytext}
      </Wrapper>
    );
  }
}
