import '../styles/global.css';
import 'highlight.js/styles/base16/material.css';
import localFont from '@next/font/local';

import { DarkModeContext } from '../context/darkmode';

const font = localFont({
  src: [
    { path: '../fonts/HankenGrotesk/HankenGrotesk-VariableFont_wght.ttf', style: 'normal' },
    { path: '../fonts/HankenGrotesk/HankenGrotesk-Italic-VariableFont_wght.ttf', style: 'italic' },
  ],
});

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={font.className}>
      <DarkModeContext>
        <Component {...pageProps} />
      </DarkModeContext>
    </main>
  );
}
