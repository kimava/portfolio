import { ThemeProvider } from 'styled-components';
import Menu from './menu/menu';
import Hero from './hero/hero';
import GlobalStyle from './styles/globalStyle';
import { defaultTheme } from './styles/theme';
import About from './about/about';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Menu />
      <Hero />
      <About />
    </ThemeProvider>
  );
}

export default App;
