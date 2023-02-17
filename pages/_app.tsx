import '../styles/global.css'
import localFont from '@next/font/local';

const font = localFont({
  src: [
    {path: '../fonts/HankenGrotesk/HankenGrotesk-VariableFont_wght.ttf', style: 'normal'},
    {path: '../fonts/HankenGrotesk/HankenGrotesk-Italic-VariableFont_wght.ttf', style: 'italic'},
  ],
});

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  );
}
