import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../../modules";
import SchduleDetailModal from "./SchduleDetailModal";

const Container = styled.div<{ isActive: boolean }>`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background: ${(props) =>
    props.isActive ? "rgba(0, 0, 0, 0.41)" : "#FFFFFF"};
  touch-action: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: ${(props) => (props.isActive ? 1000 : -1)};
`;

export default function SchduleDetailModalContainer() {
  const { schduleDetail } = useSelector((state: RootState) => state.isActive);
  return (
    <Container isActive={schduleDetail}>
      <SchduleDetailModal />
    </Container>
  );
}