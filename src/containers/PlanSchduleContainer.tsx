import styled from "styled-components";
import PlanSchduleList from "../components/PlanSchduleList";
import SecTitle from "../components/SecTitle";

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
  return (
    <Container>
      <SecTitle text="플랜 일정" />
      <PlanSchduleList />
      <ButtonWrapper>
        <Button btnColor="orange" >일정 추가하기</Button>
      </ButtonWrapper>
    </Container>
  );
}