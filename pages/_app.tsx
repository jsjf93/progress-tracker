import { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';
import { GlobalStyle } from '../utils';
import Layout from '@components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyle />
    </Provider>
  );
};

export default App;
