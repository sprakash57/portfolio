import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import { SWRConfig } from 'swr';
import '@/styles/globals.scss';
import Script from 'next/script';

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
      <SWRConfig value={{ revalidateOnFocus: false }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </>
  );
};

export default App;
