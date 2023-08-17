import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../modules";
import { unsetActive } from "../../../modules/isActive";
import PageTitle from "../../templates/PageTitle";
import Dot from "../../../../public/images/Dot.svg";
import PlanThumbnail from "../../templates/PlanThumbnail";
// import { useEffect, useState } from "react";
// import { getAllData } from "../../../firebase/database";
import IconSVG from "../../templates/IconSVG";

type MyAllPlan = {
  plans: any;
};

const Container = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 100%;
  padding: 40px 20px 60px 20px;
  position: fixed;
  top: 0;
  left: ${(props) => (props.isActive ? 0 : "100vw")};
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  background: #ffffff;
  z-index: 1000;
  transition: 0.5s;
  overflow-y: scroll;
`;

const TopWrapper = styled.div`
  padding: 0 5px;
  margin-bottom: 40px;
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 3px;
`;

const DotWrapper = styled.span`
  display: flex;
  align-items: flex-end;
  padding-bottom: 3px;
`;

const MainText = styled.div`
  font-size: 20px;
  line-height: 35px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const PlanList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

export default function MyAllPlan({ plans }: any) {
  const { allPlan } = useSelector((state: RootState) => state.isActive);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(unsetActive("allPlan"));
  };

  return (
    <Container isActive={allPlan}>
      <TopWrapper>
        <TitleWrapper>
          <IconSVG
            imageId="arrow-left"
            width={24}
            height={24}
            stroke="currentColor"
            strokeWidth={2}
            onClick={onClick}
          />
          <PageTitle text="나의 모든 플랜" />
          <DotWrapper>
            <Dot />
          </DotWrapper>
        </TitleWrapper>
      </TopWrapper>
      <MainText>
        현재 총 {plans.length}개의
        <br />
        플랜을 만들었어요
      </MainText>
      <PlanList>
        {plans.length &&
          plans.map((plan: any) => (
            <PlanThumbnail styleOption="private" plan={plan} key={plan.id} />
          ))}
      </PlanList>
    </Container>
  );
}
