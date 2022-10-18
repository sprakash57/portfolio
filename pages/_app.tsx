import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import '@/styles/globals.scss';
import Script from 'next/script';
import { fetcher } from '@/helpers/utils';
import Layout from '@/components/Layout';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.ANALYTICS_MEASUREMENT_ID}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.ANALYTICS_MEASUREMENT_ID}');
        `}
      </Script>
      <SWRConfig value={{ fetcher, revalidateOnFocus: false, revalidateIfStale: false, shouldRetryOnError: false }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </>
  );
};

export default App;
