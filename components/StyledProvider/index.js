import {GlobalStyles} from '../../styles/global';
import {ThemeProvider} from 'styled-components';
import Theme from '../../lib/theme/theme';
import Layout from '../Layout';

const StyleProvider = ({children}) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Layout>{children}</Layout>
    </ThemeProvider>
  );
};

export default StyleProvider;
