import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../modules";
import { SchduleState } from "../modules/schdule";
import PlanSchduleItem from "./PlanSchduleItem";

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

export default function PlanSchduleList() {
  const schdules = useSelector((state: RootState) => state.schdule);
  return (
    <Container>
      {schdules.map((schdule: SchduleState) => (
        <PlanSchduleItem schdule={schdule} key={schdule.seq} />
      ))}
    </Container>
  );
}