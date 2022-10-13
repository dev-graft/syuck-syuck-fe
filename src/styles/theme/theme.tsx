import '@emotion/react';

export interface ITheme {
  bgColor: string;
  textColor: string;
  border: string;
}

export const lightTheme: ITheme = {
  bgColor: '#e0e0e0',
  textColor: '#2e2e2e',
  border: '#71bfffbab',
};

export const darkTheme: ITheme = {
  bgColor: '#000a25',
  textColor: '#2e2e2e',
  border: '#0066b9b8b',
};

export const theme = {
  lightTheme,
  darkTheme,
};

export default theme;
