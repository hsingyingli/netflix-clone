import StyleProvider from '../components/StyledProvider';

function MyApp({Component, pageProps}) {
  return (
    <StyleProvider>
      <Component {...pageProps} />
    </StyleProvider>
  );
}

export default MyApp;
