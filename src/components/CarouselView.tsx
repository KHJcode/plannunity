import styled from "styled-components";

const Container = styled.div`
  height: 167px;
  width: 100%;
  display: flex;
  overflow: hidden;
  gap: 10px;
  justify-content: center;
  padding: 0 20px;
`

const CarouselItem = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 15px;
  border: 1px solid #EDEDED;
  background: #F9F9F9;
  flex-shrink: 0;
  padding: 20px;
`

const SubText = styled.div`
  color: #818181;
  font-size: 10px;
  line-height: 15px;
  font-family: 'SUIT-500';
  margin-bottom: 5px;
`

const MainText = styled.div`
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 15px;
`

const Strong = styled.div`
  color: #FF833E;
`

const Button = styled.button`
  padding: 4px 9px;
  background: #FF833E;
  color: #FFFFFF;
  font-size: 10px;
  line-height: 16px;
  border-radius: 5px;
  border: none;
`

export default function CarouselView() {
  return (
    <Container>
      <CarouselItem />
      <CarouselItem>
        <SubText>플래뮤니티 이벤트</SubText>
        <MainText><Strong>파티 만드시고,</Strong>포인트 받으세요!</MainText>
        <Button>지금 시작하기</Button>
      </CarouselItem>
      <CarouselItem />
    </Container>
  );
}