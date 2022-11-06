import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PartyParticipateModal from "../components/PartyParticipateModal";
import { RootState } from "../modules";
import { unsetActive } from "../modules/isActive";

const Container = styled.div<{ isActive: boolean }>`
  position: fixed;
  bottom: 0;
  height: 100vh;
  width: 100%;
  background: ${props => props.isActive ? "rgba(0, 0, 0, 0.41)" : "#FFFFFF"};
  touch-action: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: ${props => props.isActive ? 1000 : -1};
  opacity: ${props => props.isActive ? 1 : 0};
  transition: .3s;
`

const Box = styled.div`
  width: 100%;
  height: 100%;
`

export default function PartyParticipateModalContainer() {
  const { partyItem } = useSelector((state: RootState) => state.isActive);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(unsetActive("partyItem"));
  }

  return (
    <Container isActive={partyItem}>
      <Box onClick={onClick} />
      <PartyParticipateModal />
    </Container>
  );
}