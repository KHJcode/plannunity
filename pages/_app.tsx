import "../styles/globals.css";
import type {AppProps} from "next/app";
import "../public/static/style.css";
import Navigation from "../src/components/templates/Navigation";
import Header from "../src/components/templates/Header";
import NotificationContainer from "../src/components/notification/NotificationContainer";
import {useEffect, useState} from "react";
import {wrapper} from "../src/modules";
import {Provider} from "react-redux";
import {useRouter} from "next/router";
import {auth} from "../src/firebase/firebase";
import CartContainer from "../src/components/cart/CartContainer";
import FriendDetailModalContainer from "../src/components/friend/modal/FriendDetailModalContainer";
// import { getLocal } from "../src/map/search";
import MapContainer from "../src/components/plan/MapContainer";
import Head from "next/head";

export interface IsClicked {
    bag: boolean;
    bell: boolean;
}

export default function App({Component, pageProps}: AppProps) {
    const [logined, setLogined] = useState(false);
    const router = useRouter();
    const route = router.pathname;

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setLogined(true);
            } else {
                if (route !== "/register" && route !== "/login") {
                    router.push("/welcome");
                }
            }
        });
    }, []);

    /*
    useEffect(() => {
      // getLocal();
    }, []);
     */

    const {store} = wrapper.useWrappedStore(pageProps);
    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width"/>
            </Head>
            <Provider store={store}>
                {(route === "/" ||
                    route === "/plan" ||
                    route === "/friend" ||
                    route === "/profile") && (
                    <>
                        <Header/>
                        <Navigation/>
                        <NotificationContainer/>
                        <CartContainer/>
                        <FriendDetailModalContainer/>
                    </>
                )}
                {route !== "/" && route !== "friend" && route !== "profile" && (
                    <MapContainer/>
                )}
                <Component {...pageProps} />
            </Provider>
        </>
    );
};
