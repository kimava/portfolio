import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyle';
import { defaultTheme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      Init 이닛
    </ThemeProvider>
  );
}

export default App;
