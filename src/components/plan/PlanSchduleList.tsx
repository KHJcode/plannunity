import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../modules";
import { SchdulesState, SchduleState } from "../../modules/schdule";
import PlanSchduleItem from "./PlanSchduleItem";

type PlanSchduleListProps = {
  schduleData?: SchdulesState;
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 25px 20px;
  background: #f9f9f9;
  border: 1px solid #f6f6f6;
  border-radius: 15px;
  min-height: 182px;
`;

const ReplaceText = styled.div`
  font-size: 15px;
  line-height: 20px;
  color: #bfbfbf;
  font-family: "SUIT-400";
`;

export default function PlanSchduleList({ schduleData }: PlanSchduleListProps) {
  const router = useRouter();
  const schdules = useSelector((state: RootState) => state.schdule);
  return (
    <Container>
      {router.pathname === "/plan" ? (
        schdules.length ? (
          schdules.map((schdule: SchduleState) => (
            <PlanSchduleItem schdule={schdule} key={schdule.seq} />
          ))
        ) : (
          <ReplaceText>새로운 일정을 추가해보세요...</ReplaceText>
        )
      ) : (
        schduleData!.map((schdule: SchduleState) => (
          <PlanSchduleItem schdule={schdule} key={schdule.seq} />
        ))
      )}
    </Container>
  );
}
