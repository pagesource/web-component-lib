## Naming Components

When creating new component tags, we recommend _not_ using `stencil` in the component name (ex: `<stencil-datepicker>`). This is because the generated component has little to nothing to do with Stencil; it's just a web component!

Instead, use a prefix that fits your company or any name for a group of related components. For example, all of the Ionic generated web components use the prefix `ion`. As part of this component library, we will be using `wc` abbreviation for web components.

**Example**:

```jsx
<wc-link href="https://github.com/pagesource/atomic-react-components">click here</wc-link>
```