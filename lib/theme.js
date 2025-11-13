import { makeTheme } from 'dripsy';

const theme = makeTheme({
  colors: {
    $background: '#0f172a',
    $surface: '#1e293b',
    $primary: '#2d8b57',
    $primaryLight: '#4ade80',
    $text: '#f1f5f9',
    $textSecondary: '#94a3b8',
    $success: '#10b981',
    $error: '#ef4444',
  },
  space: [0, 4, 8, 12, 16, 24, 32, 48, 64],
  fontSizes: [12, 14, 16, 18, 24, 32, 48, 64],
});

export default theme;