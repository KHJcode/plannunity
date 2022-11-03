import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '../public/static/style.css';
import Navigation from '../src/components/Navigation';
import Header from '../src/components/Header';
import NotificationContainer from '../src/container/NotificationContainer';
import { useState } from 'react';

export interface IsClicked {
  bag: boolean;
  bell: boolean;
}

export default function App({ Component, pageProps }: AppProps) {
  const [isClicked, setIsClicked] = useState<IsClicked>({ bag: false, bell: false });
  return (
    <div>
      <NotificationContainer isClicked={isClicked} setIsClicked={setIsClicked} />
      <Header isClicked={isClicked} setIsClicked={setIsClicked} />
      <Component {...pageProps} />
      <Navigation />
    </div>
  );
}
