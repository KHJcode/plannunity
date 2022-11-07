import { useRouter } from "next/router";
import styled from "styled-components";

const Conatiner = styled.div`
  width: 100%;
  height: 185px;
  border-radius: 15px;
  background: linear-gradient(180deg, rgba(180, 180, 180, 0.26) 19.7%, rgba(0, 0, 0, 0.58) 100%), url(https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_1280.png);
  background-size: 100% 185px;
  margin-top: 5px;
  padding: 15px 10px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

const LeftWrapper = styled.div``

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 5px;
`

const SubText = styled.div`
  color: #FFFFFF;
  font-size: 12px;
  line-height: 15px;
  font-family: 'SUIT-500';
`

const MainText = styled.div`
  color: #FFFFFF;
  font-size: 20px;
  line-height: 25px;
`

export default function PlanThumbnail() {
  const planURL = `plan/${3}`;
  const router = useRouter();
  const onClick = () => {
    router.push(planURL);
  }

  return (
    <Conatiner onClick={onClick}>
      <LeftWrapper>
        <SubText>최근 회원님께서 작성하셨어요</SubText>
        <MainText>강남 간단 여행 플랜</MainText>
      </LeftWrapper>
      <RightWrapper>
        <SubText>123 저장</SubText>
        <SubText>32 추천</SubText>
      </RightWrapper>
    </Conatiner>
  );
}