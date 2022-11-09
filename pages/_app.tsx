import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../public/static/style.css";
import Navigation from "../src/components/Navigation";
import Header from "../src/components/Header";
import NotificationContainer from "../src/containers/NotificationContainer";
import { useEffect, useState } from "react";
import { wrapper } from "../src/modules";
import { Provider, useDispatch } from "react-redux";
import PartyParticipateModalContainer from '../src/containers/PartyParticipateModalContainer';
import CreatePlanContainer from "../src/containers/CreatePlanContainer";
import { useRouter } from "next/router";
import { auth } from "../src/firebase/firebase";
import SharePlanContainer from "../src/containers/SharePlanContainer";
import CreatePartyContainer from "../src/containers/CreatePartyContainer";
import PlanSchduleDeatilContainer from "../src/containers/PlanScheduleDetailContainer";
import axios from "axios";

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
      if(user) {
        setLogined(true);
      } else {
        if(route !== "/register" && route !== "/login" && route !== "/welcome") {
          router.push("/welcome");
        }
      }
    });
  }, []);

  // useEffect(() => {
  //   console.log(localStorage.getItem("name"));
  //   if(localStorage.getItem("name")) {
  //     setLogined(true);
  //   } else {
  //     if(route !== "/register" && route !== "/login" && route !== "/welcome") {
  //       router.push("/welcome");
  //     }
  //   }
  // }, []);

  const { store } = wrapper.useWrappedStore(pageProps);
  return (
    <>
      <Provider store={store}>
        {route === "/plan" && <><CreatePlanContainer /><SharePlanContainer /></>}
        {route === "/party" && <><CreatePartyContainer /></>}
        {((route === "/" || route === "/plan" || route === "/party" || route === "/profile") && logined) && (
          <>
            <Header />
            <Navigation />
            <NotificationContainer />
            <PartyParticipateModalContainer />
            <PlanSchduleDeatilContainer />
          </>
        )}
        <Component {...pageProps} />
      </Provider>
    </>
  )
}