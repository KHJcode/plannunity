import { useSelector } from "react-redux";
import styled from "styled-components";
import BudgetAddModal from "./BudgetAddModal";
import { RootState } from "../../../../modules";
import CategorySelectModal from "./CategorySelectModal";

const Container = styled.div<{ isActive: boolean }>`
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
`;

export default function CategorySelectModalContainer() {
  const { categorySelect } = useSelector((state: RootState) => state.isActive);
  return (
    <Container isActive={categorySelect}>
      <CategorySelectModal />
    </Container>
  );
}