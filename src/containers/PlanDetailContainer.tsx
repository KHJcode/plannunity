import styled from "styled-components";
import ImageCarouselView from "../components/ImageCarouselView";
import Dot from "../../public/images/dot_gray.svg";
import Stars from "../../public/images/stars.svg";
import PlanDetailFooterBar from "../components/PlanDetailFooterBar";
import SecTitle from "../components/SecTitle";
import PlanSchduleList from "../components/PlanSchduleList";
import { useRouter } from "next/router";

const Container = styled.div``

const BackButton = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
  background: #FFFFFF;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`

const PlanDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 28px 20px 20px 20px
`

const Desc1Wrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
  align-items: center;
`

const Desc1 = styled.div`
  font-size: 15px;
  line-height: 19px;
  font-family: 'SUIT-500';
  color: #939393;
`

const Desc2Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 33px;
`

const Desc2 = styled.div`
  font-size: 13px;
  line-height: 16px;
  color: #939393;
`

const Title = styled.div`
  font-size: 22px;
  line-height: 27px;
  font-family: 'SUIT-700';
  margin-bottom: 12px;
`

const PlanInfoBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`

const PlanInfoBox = styled.div`
  flex: 1;
  display: flex;
  background: #F9F9F9;
  border: 1px solid #EDEDED;
  border-radius: 15px;
  padding: 15px 12px;
  flex-direction: column;
  gap: 10px;
`

const InfoTitle = styled.div`
  font-size: 15px;
  line-height: 19px;
`

const InfoText = styled.div`
  font-size: 12px;
  line-height: 18px;
  color: #848484;
`

const PlanSchduleWrapper = styled.div`
  padding: 0 20px;
`

const Box = styled.div`
  height: 100px;
`

export default function PlanDetailContainer() {
  const router = useRouter();
  return (
    <Container>
      <BackButton>
        <img src="/images/arrow-left.svg" onClick={() => router.back()} />
      </BackButton>
      <ImageCarouselView />
      <PlanDetailWrapper>
        <Desc1Wrapper>
          <Desc1>현재 핫한 플랜</Desc1>
          <Dot />
          <Desc1>By 김길동</Desc1>
        </Desc1Wrapper>
        <Title>반나절 강남 한바퀴 돌기</Title>
        <Desc2Wrapper>
          <Desc2>2780 추천, 저장시 10p</Desc2>
          <Stars />
        </Desc2Wrapper>
        <PlanInfoBoxWrapper>
          <PlanInfoBox>
            <InfoTitle>플랜 정보</InfoTitle>
            <InfoText> 6시간, 지역 핫플레이스,<br />서울특별시 강남구 역삼동</InfoText>
          </PlanInfoBox>
          <PlanInfoBox>
            <InfoTitle>플랜 정보</InfoTitle>
            <InfoText> 6시간, 지역 핫플레이스,<br />서울특별시 강남구 역삼동</InfoText>
          </PlanInfoBox>
        </PlanInfoBoxWrapper>
      </PlanDetailWrapper>
      <PlanDetailFooterBar />
      <PlanSchduleWrapper>
        <SecTitle text="플랜 일정" />
        <PlanSchduleList />
      </PlanSchduleWrapper>
      <Box />
    </Container>
  );
}