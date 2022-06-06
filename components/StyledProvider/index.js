import {GlobalStyles} from '../../styles/global';
import {ThemeProvider} from 'styled-components';
import Theme from '../../lib/theme/theme';

const StyleProvider = ({children}) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default StyleProvider;
