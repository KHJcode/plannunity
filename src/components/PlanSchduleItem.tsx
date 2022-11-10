import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setActive } from "../modules/isActive";

const Container = styled.div`
  display: flex;
  gap: 18px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.div`
  font-size: 18px;
  line-height: 20px;
`;

const Desc1 = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #9a9a9a;
`;

const Number = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #ffffff;
  border: 5px solid #ff833e;
  font-size: 20px;
  line-height: 20px;
  color: #ff833e;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function PlanSchduleItem() {
  return (
    <Container>
      <Number>1</Number>
      <TextWrapper>
        <Title>관악산역 도착</Title>
        <Desc1>신림선을 통해 탑승하세요</Desc1>
      </TextWrapper>
    </Container>
  );
}
