import { useRouter } from "next/router";
import styled from "styled-components";

const Conatiner = styled.div`
  width: 100%;
  height: 70px;
  border-radius: 15px;
  background: #F9F9F9;
  border: 1px solid #EDEDED;
  display: flex;
  align-items: center;
  padding: 10px;
`

const Ranking = styled.span`
  margin: 20px 18px 20px 8px;
  width: 15px;
  font-size: 24px;
  lign-height: 30px;
  color: #FF833E;
  text-align: center;
`

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin-right: 12px;
`

const TextWrapper = styled.div``

const Title = styled.div`
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 6px;
`

const Desc = styled.div`
  font-size: 11px;
  line-height: 14px;
  color: #AEAEAE;
`

export default function RankingItem() {
  const planURL = `plan/${3}`;
  const router = useRouter();
  const onClick = () => {
    router.push(planURL);
  }

  return (
    <Conatiner onClick={onClick}>
      <Ranking>1</Ranking>
      <Image src="https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_1280.png" />
      <TextWrapper>
        <Title>독특한 포항 여행 플랜</Title>
        <Desc>가장 추천을 많이 받았어요</Desc>
      </TextWrapper>
    </Conatiner>
  );
}