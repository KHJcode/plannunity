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
  z-index: 2;
`



export default function CarouselView() {
  return (
    <Container>
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
    </Container>
  );
}