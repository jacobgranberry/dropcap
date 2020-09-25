import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '../src/contexts/themeContext';
import { GlobalStyles } from '../src/theme/globalStyles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

addDecorator((storyFn) => (
  <ThemeProvider>
    <>
      <GlobalStyles />
      {storyFn()}
    </>
  </ThemeProvider>
));
