// import { setMode } from "@stencil/core";

import { setMode } from '@stencil/core';

declare const Context: { [key: string]: string };

// This sets the default CONTEXT MODE for all components that support the optional mode="foobar" attribute:
Context.mode = 'default';
document.documentElement.setAttribute('mode', Context.mode);
setMode(elm => {
  return (elm as any).mode || elm.getAttribute('mode') || Context.mode;
});
