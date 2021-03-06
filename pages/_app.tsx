import { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';
import { GlobalStyle } from '../utils';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
      <GlobalStyle />
    </Provider>
  );
};

export default App;
