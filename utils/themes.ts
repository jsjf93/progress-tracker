import { blue, neutral, yellow, red, green } from './colors';
import { primaryFont } from './typography';

export const defaultTheme = {
  primaryColor: blue[300],
  primaryColorHover: blue[200],
  primaryColorActive: blue[400],
  disabled: blue[500],
  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  primaryFont,
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
};
