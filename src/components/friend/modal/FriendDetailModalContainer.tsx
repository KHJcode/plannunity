import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import styled from "styled-components";
import {RootState} from "../../../modules";
import FriendDetailModal from "./FriendDetailModal";

const Conatiner = styled.div<{ isActive: boolean, zIndex: boolean }>`
  position: fixed;
  bottom: 0;
  height: 100vh;
  width: 100%;
  background: rgba(40, 40, 40, 0.54);
  touch-action: none;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${props => props.zIndex ? 1000 : -1};
  background: ${props => props.isActive ? "rgba(40, 40, 40, 0.54)" : "transparent"};
`

export default function FriendDetailModalContainer() {
    const {friendDetail} = useSelector((state: RootState) => state.isActive);
    const [zIndexDelay, setzIndexDelay] = useState(false);

    useEffect(() => {
        if (friendDetail) {
            setzIndexDelay(friendDetail);
        } else {
            const timeout = setTimeout(() => setzIndexDelay(friendDetail), 500);
            return () => clearTimeout(timeout);
        }
    }, [friendDetail]);

    return (
        <Conatiner isActive={friendDetail} zIndex={zIndexDelay}>
            <FriendDetailModal/>
        </Conatiner>
    );
};
