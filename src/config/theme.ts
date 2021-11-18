import { extendTheme, themeTools } from 'native-base';

const theme = extendTheme({
  fontConfig: {
    PublicSans: {
      300: {
        normal: 'OpenSans-Light',
      },
      400: {
        normal: 'OpenSans',
      },
      500: {
        normal: 'OpenSans-Medium-500',
      },
      600: {
        normal: 'OpenSans-SemiBold-600',
      },
      700: {
        normal: 'OpenSans-Bold-700',
      },
      800: {
        normal: 'OpenSans-ExtraBold-800',
      },
    },
  },
  colors: {
    primary: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#000000',
    },
  },
  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: 'OpenSans',
    body: 'OpenSans',
    mono: 'OpenSans',
  },
  components: {
    Text: {
      baseStyle: props => ({
        color: themeTools.mode('white', 'black')(props),
      }),
    },
    Button: {
      baseStyle: {},
    },
  },
  useSystemColorMode: false,
  initialColorMode: 'dark',
});

export default theme;
