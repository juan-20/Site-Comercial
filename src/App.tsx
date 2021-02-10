import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import Content from './components/Content';
import Header from './components/Header';
import GlobalStyle from './styles/global';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import usePeristedState from './utils/usePersistedState';



const App = () => {
  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <Content />
      </div>
    </ThemeProvider>
  );
}

export default App;
