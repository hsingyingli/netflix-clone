import Head from 'next/head';
import Image from 'next/image';
import {useState, useCallback, useEffect} from 'react';
import {useRouter} from 'next/router';
import {magic} from '../lib/magic/magic-client';
import {LoginContainer, LoginForm, LoginHeader} from '../styles/login';

const Login = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [isValidEmail, setIsValidEmail] = useState(true);
  const router = useRouter();

  const handleOnChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);
  
  useEffect(()=> {
    const handleComplete = () => {
      setIsLoading(false)
    }
    router.events.on('routeChangeComplete', handleComplete);
    return ()=> {
      router.events.off('routeChangeComplete', handleComplete)
    }
  }, [])


  const handleOnLogin = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true)
      const didToken = await magic.auth.loginWithMagicLink({email});
      if (didToken){
        setEmail('')
        setIsValidEmail(true)
      }
      router.push('/');
    } catch (error) {
      setIsValidEmail(false)
      setIsLoading(false)
    }
  };

  return (
    <LoginContainer imgUrl={'/netflix-bg-img.jpeg'}>
      <Head>
        <title>Netflix-Clone Login Page</title>
        <meta name="description" content="Login Page" />
      </Head>
      <LoginHeader>
        <Image
          className="logo-img"
          src={'/netflix-logo.png'}
          alt="netflix-logo"
          width={260}
          height={120}
        />
      </LoginHeader>
      <LoginForm>
        <h1>Login/Sign in</h1>
        <input
          type="email"
          placeholder="Email Address"
          onChange={handleOnChangeEmail}
          value={email}
        />
        {!isValidEmail && <p>Email is not validated</p>}
        <button onClick={handleOnLogin}>
          {isLoading? "Loading..." : "Login / Sign in"}
        </button>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
