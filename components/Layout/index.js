import {LayoutContainer} from './style';
import Header from '../Header';
const Layout = ({children}) => {
  return (
    <LayoutContainer>
      <Header />
      {children}
    </LayoutContainer>
  );
};

export default Layout;
