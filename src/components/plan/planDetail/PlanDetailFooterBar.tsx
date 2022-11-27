import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 5px;
  padding: 20px;
  width: 100%;
  position: fixed;
  bottom: 0;
  box-shadow: 0px -10px 20px rgba(222, 222, 222, 0.25);
  background: #FFFFFF;
  padding-bottom: 32px;
`

const Button = styled.button<{ color: string }>`
  flex: ${props => props.color === "white" ? 1 : 2};
  border: none;
  border-radius: 10px;
  padding: 14px;
  background: ${props => props.color === "white" ? "#F5F5F5" : "#FF833E"};
  color: ${props => props.color === "white" ? "#FF833E" : "#FFFFFF"};
`

export default function PlanDetailFooterBar() {
  return (
    <Container>
      <Button color="orange">플랜 저장하기</Button>
      <Button color="white">추천하기</Button>
    </Container>
  );
}