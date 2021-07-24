import NextDocument, { Html, Main, NextScript } from 'next/document';
import GoogleFonts from 'next-google-fonts';
import { ColorModeScript } from "@chakra-ui/react";
import theme from '../styles/theme';

export default class CustomDocument extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" />
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
