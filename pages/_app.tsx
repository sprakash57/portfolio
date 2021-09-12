import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import { SWRConfig } from 'swr';
import '@/styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{
      revalidateOnFocus: false,
      revalidateOnMount: false
    }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  )
}

export default MyApp;
