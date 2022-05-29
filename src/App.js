import { ThemeProvider } from 'styled-components';
import Menu from './menu/menu';
import GlobalStyle from './styles/globalStyle';
import { defaultTheme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Menu />
    </ThemeProvider>
  );
}

export default App;
