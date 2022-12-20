import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setActive } from "../../modules/isActive";
import { SchduleState } from "../../modules/schdule";
import { selectSchdule } from "../../modules/selectedSchdule";

type SchduleItemProps = {
  schdule: SchduleState;
}

const Container = styled.div`
  display: flex;
  gap: 18px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

const Title = styled.div`
  font-size: 18px;
  line-height: 20px;
`;

const Desc1 = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #9a9a9a;
`;

const Number = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #ffffff;
  border: 5px solid #ff833e;
  font-size: 20px;
  line-height: 20px;
  color: #ff833e;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function PlanSchduleItem({ schdule }: SchduleItemProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const onClick = () => {
    if(router.pathname !== "plan") {
      dispatch(selectSchdule(schdule.title, schdule.desc, schdule.img!.thumbnail, schdule.place.address_name, schdule.seq));
      dispatch(setActive("schduleDetail"));
    }
  }
  return (
    <Container onClick={onClick}>
      <Number>{schdule.seq}</Number>
      <TextWrapper>
        <Title>{schdule.title}</Title>
        <Desc1>{schdule.desc}</Desc1>
      </TextWrapper>
    </Container>
  );
}
