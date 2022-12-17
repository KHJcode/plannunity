import axios from "axios";
import {KAKAO_URL, KAKAO_REST_API_KRY} from "./map"
const KAKAO_LOCALAPI_ROUTE = "/v2/local/search/address.json"

export let lat:number, lon:number;

export const getLocal = async (local: string = "서울시") => {
    return await axios
      .get(`${KAKAO_URL}${KAKAO_LOCALAPI_ROUTE}?query=${local}`, {
        headers: {
          Authorization: `KakaoAK ${KAKAO_REST_API_KRY}`,
        },
      })
  };

