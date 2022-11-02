import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '../public/static/style.css';
import Navigation from '../src/components/Navigation';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Navigation />
    </>
  );
}
