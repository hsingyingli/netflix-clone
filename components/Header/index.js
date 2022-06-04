import {HeaderContainer, Navbar, UserInfo} from './style';
import Image from 'next/image';

const Header = () => {
  return (
    <HeaderContainer>
      {/*Logo*/}
      <Image
        src={'/netflix-logo.png'}
        alt="netflix-logo"
        width={130}
        height={60}
      />
      {/*Nav*/}
      <Navbar> 
        <ul>
          <li>Home</li>
          <li>Movies</li>
          <li>My List</li>
        </ul>
      
      </Navbar>

      {/*Avter*/}
      <UserInfo>
      </UserInfo>
    </HeaderContainer>
  );
};

export default Header;
