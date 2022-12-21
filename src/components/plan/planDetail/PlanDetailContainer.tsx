import styled from "styled-components";
import ImageCarouselView from "./ImageCarouselView";
import Dot from "../../../../public/images/dot_gray.svg";
import Stars from "../../../../public/images/stars.svg";
import PlanDetailFooterBar from "./PlanDetailFooterBar";
import SecTitle from "../../templates/SecTitle";
import PlanSchduleList from "../PlanSchduleList";
import { useRouter } from "next/router";
import BudgetList from "../BudgetList";
import InfoLinkList from "../InfoLinkList";
import MapIcon from "../MapIcon";
import { useEffect, useState } from "react";

type PlanDetailContainerProps = {
  plan: any;
}

const Container = styled.div`
  background: #FFFFFF;
`;

const BackButton = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
  background: #ffffff;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const PlanDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 28px 20px 20px 20px;
`;

const Desc1Wrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
  align-items: center;
`;

const Desc1 = styled.div`
  font-size: 15px;
  line-height: 19px;
  font-family: "SUIT-500";
  color: #939393;
`;

const Desc2Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 33px;
`;

const Desc2 = styled.div`
  font-size: 13px;
  line-height: 16px;
  color: #939393;
`;

const Title = styled.div`
  font-size: 22px;
  line-height: 27px;
  font-family: "SUIT-700";
  margin-bottom: 12px;
`;

const PlanInfoBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

const PlanInfoBox = styled.div`
  flex: 1;
  display: flex;
  background: #f9f9f9;
  border: 1px solid #ededed;
  border-radius: 15px;
  padding: 15px 12px;
  flex-direction: column;
  gap: 10px;
`;

const InfoTitle = styled.div`
  font-size: 15px;
  line-height: 19px;
`;

const InfoText = styled.div`
  font-size: 12px;
  line-height: 18px;
  color: #848484;
`;

const Wrapper = styled.div`
  padding: 20px;
`;

const Box = styled.div`
  height: 96.5px;
`;

export default function PlanDetailContainer({ plan }: PlanDetailContainerProps) {
  const router = useRouter();

  return (
    <Container>
      <BackButton>
        <img src="/images/arrow-left.svg" onClick={() => router.back()} />
      </BackButton>
      <ImageCarouselView schdules={plan.schdules} />
      <PlanDetailWrapper>
        <Desc1Wrapper>
          <Desc1>현재 핫한 플랜</Desc1>
          <Dot />
          <Desc1 style={{ "color": "#FF833E" }}>By {plan.author}</Desc1>
        </Desc1Wrapper>
        <Title>{plan.title}</Title>
        <Desc2Wrapper>
          <Desc2>{plan.heart} 추천, 저장시 10p</Desc2>
        </Desc2Wrapper>
        <PlanInfoBoxWrapper>
          <PlanInfoBox>
            <InfoTitle>플랜 소개</InfoTitle>
            <InfoText>
              {plan.intro}
            </InfoText>
          </PlanInfoBox>
          <PlanInfoBox>
            <InfoTitle>카테고리</InfoTitle>
            <InfoText>
              {plan.category.map((item: string) => (
                <span key={item}>{item}, </span>
              ))}
            </InfoText>
          </PlanInfoBox>
        </PlanInfoBoxWrapper>
      </PlanDetailWrapper>
      <PlanDetailFooterBar />
      <Wrapper>
        <SecTitle text="플랜 일정" />
        <PlanSchduleList schduleData={plan.schdules} />
      </Wrapper>
      <Wrapper>
        <SecTitle text="플랜 예산" />
        <BudgetList budgetData={plan.budgets} />
      </Wrapper>
      <Wrapper>
        <SecTitle text="플랜 관련 링크" />
        <InfoLinkList linkData={plan.links}  />
      </Wrapper>
      <Box />
    </Container>
  );
}
