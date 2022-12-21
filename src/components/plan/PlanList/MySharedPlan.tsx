import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../modules";

const Container = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 100%;
  padding: 40px 20px 20px 20px;
  position: fixed;
  top: 0;
  left: ${(props) => (props.isActive ? 0 : "100vw")};
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  background: #ffffff;
  z-index: 1000;
  transition: 0.5s;
  overflow-y: scroll;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
  margin-bottom: 30px;
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 3px;
`;

const DotWrapper = styled.span`
  display: flex;
  align-items: flex-end;
  padding-bottom: 3px;
`;

export default function MySharedPlan() {
  const { sharedPlan } = useSelector((state: RootState) => state.isActive);
  return (
    <Container isActive={sharedPlan}>
      
    </Container>
  );
}