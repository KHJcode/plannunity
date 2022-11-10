import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../modules";
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
`

export default function PlanSchduleList() {
  return (
    <Container>
      <PlanSchduleItem />
      <PlanSchduleItem />
      <PlanSchduleItem />
    </Container>
  );
}