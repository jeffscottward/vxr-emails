// import buttonVariants from './theme/buttons'
const GlobalTheme = {
  initialColorMode: 'light',
  colors: {
    text: '#fff',
    background: '#222',
    primary: '#222',
    secondary: '#3f3f3f',
    muted: '#9f9f9f',
    highlight: '#FEDA00',
    highlight0: '#ffed81',
    highlight00: '#d3b504',
    alternate: '#003F63',
    gray: '#6c6c6c',
    gray0: '#e0e0e0',
    accent: '#3f3f3f'
  },
  fonts: {
    body: 'Silom, monospace',
    heading: 'Silom, monospace',
    monospace: 'monospace'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    display: 900
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  textStyles: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading'
    },
    display: {
      variant: 'textStyles.heading',
      fontSize: [5, 6],
      fontWeight: 'display',
      letterSpacing: '-0.03em',
      mt: 3
    }
  },
  styles: {
    Container: {
      p: 3,
      maxWidth: 1024
    },
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    h1: {
      variant: 'textStyles.display'
    },
    h2: {
      variant: 'textStyles.heading',
      fontSize: 5
    },
    h3: {
      variant: 'textStyles.heading',
      fontSize: 4
    },
    h4: {
      variant: 'textStyles.heading',
      fontSize: 3
    },
    h5: {
      variant: 'textStyles.heading',
      fontSize: 2
    },
    h6: {
      variant: 'textStyles.heading',
      fontSize: 1
    },
    p: {
      fontSize: 2
    },
    a: {
      color: 'primary',
      '&:hover': {
        color: 'secondary'
      }
    },
    pre: {
      fontFamily: 'monospace',
      fontSize: 1,
      p: 3,
      color: 'text',
      bg: 'muted',
      borderColor: 'text',
      borderStyle: 'solid',
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 8,
      borderBottomWidth: 8,
      overflow: 'auto',
      code: {
        color: 'inherit'
      }
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 1
    },
    inlineCode: {
      fontFamily: 'monospace',
      color: 'secondary',
      bg: 'muted',
      px: 2
    },
    ul: {
      listStyleType: 'square'
    },
    table: {
      width: '100%',
      my: 4,
      borderSpacing: 0,
      // borderCollapse: 'seperate',
      'td,th': {
        py: '4px',
        pr: '4px',
        pl: 0,
        borderColor: 'text',
        borderBottomStyle: 'solid'
        // borderCollapse: 'seperate',
      }
    },
    th: {
      bg: 'muted',
      verticalAlign: 'bottom',
      borderBottomWidth: 8
    },
    td: {
      verticalAlign: 'top',
      borderBottomWidth: 4
    },
    hr: {
      border: 0,
      borderBottom: '8px solid',
      borderColor: 'text'
    }
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      fontFamily: 'body',
      cursor: 'pointer',
      borderRadius: 0,
      '&:hover': {
        color: 'highlight'
      }
    },
    secondary: {
      color: 'primary',
      bg: 'background',
      fontFamily: 'body',
      cursor: 'pointer',
      borderRadius: 0,
      '&:hover': {
        bg: 'highlight',
        color: 'primary'
      }
    },
    disabled: {
      color: 'background',
      cursor: 'not-allowed',
      fontFamily: 'body',
      borderRadius: 0
    }
  },
  links: {
    primary: {
      cursor: 'pointer',
      color: 'primary',
      '&:hover': {
        color: 'secondary'
      }
    },
    underline: {
      cursor: 'pointer',
      color: 'primary',
      borderBottom: '2px solid',
      '&:hover': {
        color: 'secondary'
      }
    },
    bold: {
      cursor: 'pointer',
      fontWeight: 'bold',
      '&:hover': {
        color: 'secondary'
      }
    }
  },
  forms: {
    input: {
      fontFamily: 'monospace',
      fontSize: 2,
      primary: {
        fontFamily: 'body',
        bg: 'background',
        color: 'text'
      },
      secondary: {
        fontFamily: 'body',
        bg: 'text',
        color: 'background',
        borderColor: 'highlight'
      }
    },
    textarea: {
      fontFamily: 'monospace',
      fontSize: 2
    }
  },
  breakpoints: ['640px', '768px', '1024px', '1280px']
};

export default GlobalTheme;
