import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <div id="portal" />
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
          ></script>
          <NextScript />
        </body>
      </Html>
    );
  }
}
