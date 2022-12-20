import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../modules";
import { SchdulesState, SchduleState } from "../../modules/schdule";
import PlanSchduleItem from "./PlanSchduleItem";

type PlanSchduleListProps = {
  schduleData?: SchdulesState
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 25px 20px;
  background: #F9F9F9;
  border: 1px solid #F6F6F6;
  border-radius: 15px;
  min-height: 182px;
`

const ReplaceText = styled.div`
  font-size: 15px;
  line-height: 20px;
  color: #BFBFBF;
  font-family: 'SUIT-400';
`

export default function PlanSchduleList({ schduleData }: PlanSchduleListProps) {
  const router = useRouter();
  const schdules = useSelector((state: RootState) => state.schdule)
  if(router.pathname === "/plan" && schdules.length) {
    return (
      <Container>
        {schdules.map((schdule: SchduleState) => (
          <PlanSchduleItem schdule={schdule} key={schdule.seq} />
        ))}
      </Container>
    );
  } else if(router.pathname === "/plan" && !schdules.length) {
    return (
      <Container>
        <ReplaceText>새로운 일정을 추가해보세요...</ReplaceText>
      </Container>
    )
  } else {
    return (
      <Container>
        {schduleData!.map((schdule: SchduleState) => (
          <PlanSchduleItem schdule={schdule} key={schdule.seq} />
        ))}
      </Container>
    )
  }
}