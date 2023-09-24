export enum TextVariants {
  H1 = 'H1',
  H2 = 'H2',
  P1 = 'P1',
  P2 = 'P2',
  S = 'S',
}

export const fontWeight = {
  bold: 600,
  semiBold: 500,
  normal: 400,
};

export const variants = {
  [TextVariants.H1]: {
    fontSize: '3.5rem',
    fontWeight: 600,
    letterSpacing: '2px',
  },
  [TextVariants.H2]: {
    fontSize: '2.8rem',
    fontWeight: 600,
    letterSpacing: '1px',
  },
  [TextVariants.P1]: {
    fontSize: '1.2rem',
    fontWeight: 500,
    letterSpacing: '1px',
  },
  [TextVariants.P2]: {
    fontSize: '1rem',
    fontWeight: 400,
    letterSpacing: '1px',
  },
  [TextVariants.S]: {
    fontSize: '0.8rem',
    fontWeight: 400,
    letterSpacing: '1px',
  },
};
