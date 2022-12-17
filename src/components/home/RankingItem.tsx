import { useRouter } from "next/router";
import styled from "styled-components";
import { PlanData } from "../../../pages";

type RankingItemProps = {
  plan: PlanData;
  rank: number;
}

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

export default function RankingItem({ plan, rank }: RankingItemProps) {
  const planURL = `plan/${plan.id}`;
  const router = useRouter();
  const onClick = () => {
    router.push(planURL);
  }

  return (
    <Conatiner onClick={onClick}>
      <Ranking>{rank}</Ranking>
      <Image src="https://cdn.pixabay.com/photo/2017/10/26/19/45/red-2892235_1280.png" />
      <TextWrapper>
        <Title>{plan.planTitle}</Title>
        <Desc>가장 추천을 많이 받았어요</Desc>
      </TextWrapper>
    </Conatiner>
  );
}