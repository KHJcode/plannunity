import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setActive } from "../modules/isActive";
import { planSchduleState } from "../modules/planSchdule";

type PlanSchduleProps = {
  schdule: planSchduleState
}

const Container = styled.div`
  display: flex;
  gap: 18px;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Title = styled.div`
  font-size: 18px;
  line-height: 20px;
`

const Desc1 = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #9A9A9A;
`

const Desc2 = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #9A9A9A;
`

export default function PlanSchduleItem({ schdule }: PlanSchduleProps) {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(setActive("planDetail"));
  }

  return (
    <Container onClick={onClick}>
      <img src="/images/circle.svg" style={{ "minWidth": "50px" }} />
      <TextWrapper>
          <Title>{schdule.title}</Title>
          <Desc1>{schdule.date}</Desc1>
          <Desc2>{schdule.loc}</Desc2>
      </TextWrapper>
    </Container>
  );
}