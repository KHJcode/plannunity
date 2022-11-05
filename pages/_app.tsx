import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../public/static/style.css";
import Navigation from "../src/components/Navigation";
import Header from "../src/components/Header";
import NotificationContainer from "../src/containers/NotificationContainer";
import { useState } from "react";
import { wrapper } from "../src/modules";
import { Provider } from "react-redux";
import { getUser } from "../src/firebase/auth";

export interface IsClicked {
  bag: boolean;
  bell: boolean;
}

export default function App({ Component, pageProps }: AppProps) {
  const [isClicked, setIsClicked] = useState<IsClicked>({
    bag: false,
    bell: false,
  });
  const [isLogined, setIsLogined] = useState(false);

  const { store } = wrapper.useWrappedStore(pageProps);
  return (
    <>
      <Provider store={store}>
        <NotificationContainer isClicked={isClicked} setIsClicked={setIsClicked} />
        <Header isClicked={isClicked} setIsClicked={setIsClicked} />
        <Navigation />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
