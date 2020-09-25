import React, { FC, useState, useEffect, useContext, createContext } from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { GlobalStyles } from '../theme/globalStyles';
import theme from '../theme/theme';

type Theme = {
  dark: boolean;
  toggle: () => void;
};

interface IThemeState {
  dark: boolean;
  hasThemeMounted: boolean;
}

const ThemeContext = createContext<Theme>({
  dark: false,
  toggle: () => {},
});

const useTheme = () => useContext(ThemeContext);

const useEffectDarkMode = (): any => {
  const [themeState, setThemeState] = useState<IThemeState>({
    dark: false,
    hasThemeMounted: false,
  });
  useEffect(() => {
    const isDark = localStorage.getItem('dark') === 'true';
    setThemeState({ ...themeState, dark: isDark, hasThemeMounted: true });
  }, []);

  return [themeState, setThemeState];
};

interface IThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: FC<IThemeProviderProps> = ({ children }) => {
  const [themeState, setThemeState] = useEffectDarkMode();

  if (!themeState.hasThemeMounted) {
    return <div />;
  }

  const toggle = () => {
    const dark = !themeState.dark;
    localStorage.setItem('dark', JSON.stringify(dark));
    setThemeState({ ...themeState, dark });
  };

  const computedTheme = themeState.dark ? theme('dark') : theme('light');

  return (
    <EmotionThemeProvider theme={computedTheme}>
      <ThemeContext.Provider
        value={{
          dark: themeState.dark,
          toggle,
        }}
      >
        <GlobalStyles />
        {children}
      </ThemeContext.Provider>
    </EmotionThemeProvider>
  );
};

export { ThemeProvider, useTheme };
