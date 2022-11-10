import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PlanSchduleList from "../components/PlanSchduleList";
import SecTitle from "../components/SecTitle";
import { RootState } from "../modules";
import { setUpdateCurrentId } from "../modules/currentId";
import { setActive } from "../modules/isActive";
import { setCreatePlanSchdule } from "../modules/planSchdule";

const Container = styled.div`
  width: 100%;
  margin-top: 40px;
`

const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 10px;
`

const Button = styled.button<{ btnColor: string }>`
  flex: 1;
  padding: 14px 0;
  border-radius: 10px;
  background: ${props => props.btnColor === "white" ? "#F5F5F5" : "#FF833E" };
  color: ${props => props.btnColor === "white" ? "#FF833E" : "#F5F5F5" };
  border: none;
`

export default function PlanSchduleContainer() {
  const dispatch = useDispatch();
  const newId = useSelector((state: RootState) => state.planSchdule.length)
  const onClick = () => {
    dispatch(setActive("planDetail"));
    dispatch(setCreatePlanSchdule());
    dispatch(setUpdateCurrentId(newId));

  }
  return (
    <Container>
      <SecTitle text="플랜 일정" />
      <PlanSchduleList />
      <ButtonWrapper>
        <Button btnColor="orange" onClick={onClick}>일정 추가하기</Button>
      </ButtonWrapper>
    </Container>
  );
}