import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import '@/styles/globals.scss';
import { fetcher } from '@/helpers/utils';
import Layout from '@/components/Layout';
import { useTrackPageViews } from '@/helpers/hooks';

const App = ({ Component, pageProps }: AppProps) => {
  useTrackPageViews();
  return (
    <SWRConfig value={{ fetcher, revalidateOnFocus: false, revalidateIfStale: false, shouldRetryOnError: false }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
};

export default App;
