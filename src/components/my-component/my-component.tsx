import { Component, h, Prop } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() public first: string;

  /**
   * The middle name
   */
  @Prop() public middle: string;

  /**
   * The last name
   */
  @Prop() public last: string;

  public render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }
}
