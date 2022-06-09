import { ThemeProvider } from 'styled-components';
import Menu from './menu/menu';
import Hero from './hero/hero';
import GlobalStyle from './styles/globalStyle';
import { defaultTheme } from './styles/theme';
import About from './about/about';
import Projects from './projects/projects';
import Blog from './blog/blog';
import Footer from './footer/footer';
import ScrollToTop from './common/scrollToTop';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Menu />
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  );
}

export default App;
