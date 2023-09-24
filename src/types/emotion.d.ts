import { TextVariants } from 'theme/typography';
import { Colors } from 'theme/colors';

declare module '@emotion/react' {
  interface TextVariantsStyle {
    fontSize: string;
    fontWeight: number;
    letterSpacing: string;
  }
  export interface Theme {
    colors: Colors;
    text: {
      fontWeight: {
        bold: number;
        semiBold: number;
        normal: number;
      };
      variants: Record<TextVariants, TextVariantsStyle>;
    };
    screenSize: {
      mobileS: string;
    };
  }
}
