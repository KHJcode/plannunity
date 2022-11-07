import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../public/static/style.css";
import Navigation from "../src/components/Navigation";
import Header from "../src/components/Header";
import NotificationContainer from "../src/containers/NotificationContainer";
import { useEffect, useState } from "react";
import { wrapper } from "../src/modules";
import { Provider } from "react-redux";
import PartyParticipateModalContainer from '../src/containers/PartyParticipateModalContainer';
import CreatePlanContainer from "../src/containers/CreatePlanContainer";
import { useRouter } from "next/router";
import { auth } from "../src/firebase/firebase";

export interface IsClicked {
  bag: boolean;
  bell: boolean;
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const route = router.pathname;

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user) {
        console.log(user.email);
      } else {
        if(route !== "/register" && route !== "/login" && route !== "/welcome") {
          router.push("/welcome");
        }
      }
    })
  }, []);

  const { store } = wrapper.useWrappedStore(pageProps);
  return (
    <>
      <Provider store={store}>
        {route === "/plan" && <CreatePlanContainer />}
        {(route === "/" || route === "/plan" || route === "/party" || route === "/profile") && (
          <>
            <Header />
            <Navigation />
            <NotificationContainer />
          </>
        )}
        {(route === "/" || route === "/party") && <PartyParticipateModalContainer />}
        <Component {...pageProps} />
      </Provider>
    </>
  );
}