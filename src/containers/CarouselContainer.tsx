import styled from "styled-components";
import CarouselView from "../components/CarouselView";

const Container = styled.div`
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
`

const Text = styled.div`
  font-family: SUIT-500;
  margin-left: 5px;
  font-size: 20px;
  margin-bottom: 20px;
  line-height: 30px;
  padding-left: 20px;
`

const BoldText = styled.span`
  font-family: SUIT-600;
`

export default function Carousel() {
  return (
    <Container>
      <Text>환영합니다, <BoldText>나제원 회원님!</BoldText></Text>
      <CarouselView />
    </Container>
  );
}