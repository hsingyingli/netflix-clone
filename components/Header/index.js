import {HeaderContainer, Navbar, UserInfo} from './style';
import {useRouter} from 'next/router';
import Image from 'next/image';
import {magic} from '../../lib/magic/magic-client';
import {useEffect, useState} from 'react';
import {AiOutlineLogout} from 'react-icons/ai';

const Header = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      const isLoggedIn = await magic.user.isLoggedIn();
      if (isLoggedIn) {
        const user = await magic.user.getMetadata();
        setUser(user);
      }
    };

    getUserData();
  }, []);

  const handleOnClickHome = (e) => {
    e.preventDefault();
    router.push('/');
  };


  const handleOnLogout = async () => {
    try {
      await magic.user.logout();
      router.push('/login')
    } catch {
      console.log('logout fail');
    }
  };

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
        </ul>
      </Navbar>

      <UserInfo>
        <p>{user?.email}</p>
        <div onClick={handleOnLogout}>
          <AiOutlineLogout />
          <span>Logout</span>
        </div>
      </UserInfo>
    </HeaderContainer>
  );
};

export default Header;
