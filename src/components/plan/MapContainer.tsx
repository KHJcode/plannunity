import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
// import { createMap } from "../../map/map";s
import { RootState } from "../../modules";
import { setActive, unsetActive } from "../../modules/isActive";
import { Map, MapMarker, MarkerClusterer } from "react-kakao-maps-sdk"
import { SchduleState } from "../../modules/schdule";
import { useRef } from "react";

const Container = styled.div<{ isActive: boolean }>`
  position: fixed;
  bottom: 0;
  height: 100vh;
  width: 100%;
  z-index: ${(props) => (props.isActive ? 1001 : -1)};
  display: ${(props) => (props.isActive ? "unset" : "none")};
  background: #FFFFFF;
`;

const CancelButton = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 1002;
`

export default function MapContainer() {
  const { map } = useSelector((state: RootState) => state.isActive);
  const schdule = useSelector((state: RootState) => state.schdule);
  const dispatch = useDispatch();

  const onClickCancelButton = () => {
    dispatch(unsetActive("map"));
  }

  return (
    <Container isActive={map}>
      <CancelButton>
        <img src="/images/cancel.svg" onClick={onClickCancelButton} />
      </CancelButton>
      <Map center={{lat: 37.5427559235541, lng: 126.967185290642}} style={{ "width": "100%", "height": "100%" }} level={5}>
        <MarkerClusterer
        averageCenter={true}
        minLevel={10}
        >
          {schdule.map((schdule: SchduleState) => (
            <MapMarker key={schdule.seq} image={{
              src: "/images/marker.svg",
              size: {
                width: 20,
                height: 20
              },
            }} position={{lat: Number(schdule.place.y), lng: Number(schdule.place.x)}}>{schdule.place.place_name}</MapMarker>
          ))}
        </MarkerClusterer>
      </Map>
    </Container>
  );
}