import { useSelector } from "react-redux";
import styled from "styled-components";
import SearchInfoAddModal from "../components/SearchInfoAddModal";
import { RootState } from "../modules";

const Container = styled.div<{ isActive: boolean }>`
  transition: 0.3s;
  position: fixed;
  bottom: 0;
  height: 100vh;
  width: 100%;
  background: ${(props) =>
    props.isActive ? "rgba(0, 0, 0, 0.41)" : "#FFFFFF"};
  touch-action: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: ${(props) => (props.isActive ? 1000 : -1)};
  opacity: ${(props) => (props.isActive ? 1 : 0)};
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
`;

export default function SearchInfoAddModalContainer() {
  const { searchInfoAdd } = useSelector((state: RootState) => state.isActive);
  return (
    <Container isActive={searchInfoAdd}>
      <Box />
      <SearchInfoAddModal />
    </Container>
  );
}
