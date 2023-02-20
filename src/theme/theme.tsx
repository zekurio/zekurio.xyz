export enum AppTheme {
  DARK = 0,
  LIGHT = 1,
}

export const DarkTheme = {
  background: '#111417',
  backgroundDarker: '#191c20',
  backgroundDarkest: '#25282c',

  text: '#f4f4f5',

  accent: '#1facfe',
  accentDarker: '#2091d3',

  white: '#f4f4f5',
  whiteDarker: '#dddddd',
  darkGray: '#1e1e1e',
  red: '#ed4245',
  orange: '#f57c00',
  yellow: '#fbc02d',
  green: '#43a047',
  lime: '#57f287',
  cyan: '#03a9f4',
  pink: '#eb459e',
};

export const LightTheme: Theme = {
  ...DarkTheme,

  background: '#fffffe',
  backgroundDarker: '#dddddd',
  backgroundDarkest: '#cecece',

  text: '#212121',
};

export const DefaultTheme = DarkTheme;
export type Theme = typeof DefaultTheme;