import { getLocal } from "./search"

export const KAKAO_URL = "//dapi.kakao.com"
export const KAKAO_REST_API_KRY = process.env.NEXT_PUBLIC_KAKAO_API_KEY
export const KAKAO_JS_API_KEY = process.env.NEXT_PUBLIC_KAKAO_APP_KEY
const KAKAO_MAP_SDK = "/v2/maps/sdk.js"
let map: any;
// let markers: any[] = [new window.kakao.Marker({
//     position : new window.kakao.LatLng(37.566826004661, 126.978652258309)
// })];
let markers:any[] = []
declare global {   
    interface Window {     
        kakao: any   
    } 
}

export const createMap = async (local: string = "서울시") => {
    const script = document.createElement("script")
    script.async = true
    script.src = `${KAKAO_URL}${KAKAO_MAP_SDK}?appkey=${KAKAO_JS_API_KEY}&autoload=false`;
    document.head.appendChild(script)
    const datas = (await getLocal(local)).data
    const data = datas.documents[0]
    const lat = parseFloat(data.address.y)
    const lon = parseFloat(data.address.x)
    script.addEventListener("load", () => {
        window.kakao.maps.load(() => {
            const mapContainer = document.getElementById("map");
            console.log(mapContainer);
            const mapOption = {
                center : new window.kakao.maps.LatLng(lat, lon),
                level:8
            }
            map = new window.kakao.maps.Map(mapContainer, mapOption)
        })
    })
}

export const createMarker = (lat: number, lon: number) => {
    const position = new window.kakao.maps.LatLng(lat, lon)
    const marker = new window.kakao.maps.Marker({
        position
    })
    marker.setMap(map)
    markers.push(marker)
}

export const setMarkers = () => {
    markers.forEach(marker => {
        marker.setMap(map)
    })
}