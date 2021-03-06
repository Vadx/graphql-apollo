import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    background: {
      default: '#F1F9FF'
    },
    primary: {
      main: '#205E8B',
      contrastText: '#fff'
    },
    secondary: {
      main: '#BBDEE8',
      contrastText: '#fff'
    },
    text: {
      primary: '#333'
    },
    action: {
      active: '#205E8B'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1920
    }
  },
  overrides: {
    MuiButton: {
      contained: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none'
        }
      }
    },
    MuiTextField: {
      root: {
        // background: '#F1F9FF'
      }
    },
    MuiSelect: {
      root: {
        background: '#F1F9FF'
      }
    },
    MuiSvgIcon: {
      root: {
        fill: '#4094C9'
      }
    }
  },
  typography: {
    fontSize: 15,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Open Sans"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    h1: {
      fontFamily: '"Georgia", sans-serif'
    },
    h2: {
      fontFamily: '"Georgia", sans-serif'
    },
    h3: {
      fontFamily: '"Georgia", sans-serif'
    },
    h4: {
      fontFamily: '"Georgia", sans-serif'
    },
    h5: {
      fontFamily: '"Georgia", sans-serif'
    },
    h6: {
      fontFamily: '"Georgia", sans-serif'
    }
  }
})
