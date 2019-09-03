/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Generate a functional component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called? (No prefix in function name)',
      default: 'button',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value) ? 'A component with this name already exists' : true;
        }
        return 'The name is required';
      }
    }
  ],
  actions: data => {
    const actions = [
      {
        type: 'add',
        path: '../src/components/{{name}}/{{name}}.tsx',
        templateFile: './component/functionalComponent.js.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../src/components/{{name}}/{{name}}.spec.ts',
        templateFile: './component/unitTest.js.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../src/components/{{name}}/{{name}}.e2e.ts',
        templateFile: './component/e2eTest.js.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../src/components/{{name}}/{{name}}.default.scss',
        templateFile: './component/styles.js.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../src/components/{{name}}/{{name}}.stories.js',
        templateFile: './component/stories.js.hbs',
        abortOnFail: true
      }
    ];

    actions.push({
      type: 'prettify',
      path: '/components/'
    });

    return actions;
  }
};
