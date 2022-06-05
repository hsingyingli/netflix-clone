import {HeaderContainer, Navbar, UserInfo} from './style';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Header = () => {
  const router = useRouter();

  const handleOnClickHome = (e) => {
    e.preventDefault();
    router.push('/');
  }

  const handleOnClickMyList = (e) => {
    e.preventDefault();
    router.push('/my-list');
  }

  return (
    <HeaderContainer>
      {/*Logo*/}
      <Image
        className="logo-img"
        src={'/netflix-logo.png'}
        alt="netflix-logo"
        width={130}
        height={60}
        onClick={handleOnClickHome}
      />
      {/*Nav*/}
      <Navbar> 
        <ul>
          <li onClick={handleOnClickHome}>Home</li>
          <li onClick={handleOnClickMyList}>My List</li>
        </ul>
      
      </Navbar>

      <UserInfo>
      </UserInfo>
    </HeaderContainer>
  );
};

export default Header;
