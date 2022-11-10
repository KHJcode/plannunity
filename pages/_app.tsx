import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../public/static/style.css";
import Navigation from "../src/components/Navigation";
import Header from "../src/components/Header";
import NotificationContainer from "../src/containers/NotificationContainer";
import { useEffect, useState } from "react";
import { wrapper } from "../src/modules";
import { Provider } from "react-redux";
import PartyParticipateModalContainer from "../src/containers/PartyParticipateModalContainer";
import { useRouter } from "next/router";
import { auth } from "../src/firebase/firebase";
import axios from "axios";

export const getMap = (local: string = "서울시") => {
  axios
    .get(`https://dapi.kakao.com/v2/local/search/address?query=${local}`, {
      headers: {
        Authorization: `KakaoAK ${"4741cf75cb47cc7e86543bd2a76f9b48"}`,
      },
    })
    .then((value) => {
      console.log(value);
    })
    .catch((err) => console.log(err));
};

export interface IsClicked {
  bag: boolean;
  bell: boolean;
}

export default function App({ Component, pageProps }: AppProps) {
  const [logined, setLogined] = useState(false);
  const router = useRouter();
  const route = router.pathname;

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setLogined(true);
      } else {
        if (
          route !== "/register" &&
          route !== "/login" 
        ) {
          router.push("/welcome");
        }
      }
    });
  }, []);

  useEffect(() => {
    getMap();
  }, []);

  const { store } = wrapper.useWrappedStore(pageProps);
  return (
    <>
      <Provider store={store}>
        {(route === "/" ||
          route === "/plan" ||
          route === "/party" ||
          route === "/profile") && (
            <>
              <Header />
              <Navigation />
              <NotificationContainer />
              <PartyParticipateModalContainer />
            </>
          )}
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
