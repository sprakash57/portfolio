import Document, { Html, Head, Main, NextScript } from 'next/document';

const isProduction = process.env.NODE_ENV === 'production';
export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {isProduction && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.ANALYTICS_MEASUREMENT_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.ANALYTICS_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `,
                }}
              />
            </>
          )}
          <script
            defer
            data-name="BMC-Widget"
            data-cfasync="false"
            src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
            data-id="sunnyprakash"
            data-description="Support me on Buy me a coffee!"
            data-message="Thank you for visiting. You can now Buy me a coffee."
            data-color="#F66345"
            data-position="Right"
            data-x_margin="8"
            data-y_margin="8"
          />
        </Head>
        <body>
          <Main />
          <div id="portal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
