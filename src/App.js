/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ThemeProvider } from 'theme-ui';
import theme from './theme';
import Content from './Content';

export default function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <Content />
    </ThemeProvider>
  );
}
