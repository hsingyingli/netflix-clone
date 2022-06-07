import StyleProvider from '../components/StyledProvider';
import {magic} from '../lib/magic/magic-client';
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';

function MyApp({Component, pageProps}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const requireAuth = async () => {
      const isLoggedIn = await magic.user.isLoggedIn();
      console.log(isLoggedIn);
      if (isLoggedIn) {
        router.push('/');
      } else {
        router.push('/login');
      }
    };
    requireAuth();
  }, []);

  useEffect(() => {
    const handleComplete = () => {
      setIsLoading(false);
    };
    router.events.on('routeChangeComplete', handleComplete);
    return () => {
      router.events.off('routeChangeComplete', handleComplete);
    };
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        is Loading
      </div>
    );
  }

  return (
    <StyleProvider>
      <Component {...pageProps} />
    </StyleProvider>
  );
}

export default MyApp;
