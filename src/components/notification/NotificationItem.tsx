import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #F9F9F9;
  border: 1px solid #EDEDED;
  border-radius: 15px; 
  padding: 14px 16px;
`

const Desc = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #B8B8B8;
  margin-bottom: 8px;
`

const Title = styled.div`
  font-size: 15px;
  line-height: 18.72px;
`

export default function NotificationItem() {
  return (
    <Container>
      <Desc>올리신 플랜에 새로운 소식이 있어요</Desc>
      <Title>플랜 추천이 3개 더 달렸어요</Title>
    </Container>
  );
}