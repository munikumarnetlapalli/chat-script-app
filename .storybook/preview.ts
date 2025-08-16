import type { Preview } from '@storybook/react';
import '../client/src/index.css';
import React from 'react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#0f172a',
        },
      ],
    },
    docs: {
      toc: true,
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light';
      
      return React.createElement(
        'div',
        {
          className: theme === 'dark' ? 'dark' : '',
          style: {
            minHeight: '100vh',
            backgroundColor: theme === 'dark' ? '#0f172a' : '#ffffff',
            padding: '1rem',
          },
        },
        React.createElement(Story)
      );
    },
  ],
};

export default preview;
