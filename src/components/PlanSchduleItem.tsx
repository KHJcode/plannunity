import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 18px;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Title = styled.div`
  font-size: 18px;
  line-height: 20px;
`

const Desc = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #9A9A9A;
`

export default function PlanSchduleItem() {
  return (
    <Container>
      <img src="/images/circle.svg" style={{ "minWidth": "50px" }} />
      <TextWrapper>
          <Title>관악산역 하차</Title>
          <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Desc>
      </TextWrapper>
    </Container>
  );
}