import { ThemeProvider } from 'styled-components';
import Menu from './menu/menu';
import Hero from './hero/hero';
import GlobalStyle from './styles/globalStyle';
import { defaultTheme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Menu />
      <Hero />
    </ThemeProvider>
  );
}

export default App;
