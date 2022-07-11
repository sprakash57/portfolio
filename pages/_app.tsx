import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import { SWRConfig } from 'swr';
import '@/styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SWRConfig value={{ revalidateOnFocus: false }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
};

export default App;
