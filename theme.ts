import { Platform, StatusBar } from 'react-native';

// All font sizes in the app come from here. Base body size is at least 18 (P3).
export const fontSize = {
  body: 18,
  title: 28,
};

export const spacing = {
  small: 8,
  medium: 16,
  large: 24,
};

export const colors = {
  background: '#FFFFFF',
  text: '#1A1A1A',
  border: '#767676',
  primary: '#1F5FAD',
  onPrimary: '#FFFFFF',
  demoBanner: '#FFF3C4',
};

// Every touch target is at least 48×48 dp (P3)
export const touchTarget = 48;

// Space kept free for the phone's status bar (top) and system navigation (bottom).
// Set by hand because the app uses no safe-area library:
// Android reports its status bar height; iOS values cover phones with a notch and a home indicator.
export const safeArea = {
  top: Platform.OS === 'android' ? (StatusBar.currentHeight ?? 24) : 50,
  bottom: Platform.OS === 'android' ? 48 : 34,
};
