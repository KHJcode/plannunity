import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addMassTransAcc } from "../../../../modules/currentData";
import { unsetActive } from "../../../../modules/isActive";
import EditAndCreateButton from "../../../templates/EditAndCreateButton";
import IconSVG from "../../../templates/IconSVG";

const Container = styled.div`
  background: #ffffff;
  padding: 25px;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 25px;
`;

const MainText = styled.div`
  font-size: 22px;
  line-height: 35px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const AccessList = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 30px;
`

const AccessItem = styled.div<{ clicked: boolean }>`
  height: 50px;
  padding: 15px 19px;
  background: ${props => props.clicked ? "#FFECE1" : "#F9F9F9"};
  color: ${props => props.clicked ? "#FF833E" : "#000000"};
  border: 1px solid #EDEDED;
  border-radius: 15px;
`

const optionList = ["좋음", "보통", "안좋음"];

export default function MassTransAccModal() {
  const dispatch = useDispatch();
  const [clickedOption, setClickedOption] = useState("");
  const [clickedIdx, setClickedIdx] = useState<boolean[]>([false, false, false]);

  const onClickCancelButton = () => {
    dispatch(unsetActive("massTransAcc"));
    setClickedIdx([false, false, false]);
    setClickedOption("");
  }

  const onClickAccessItem = (idx: number) => {
    setClickedOption(optionList[idx]);
    setClickedIdx(clickedIdx.map(($, i) => i === idx ? true : false));
  }

  const onClickSubmitbutton = () => {
    dispatch(unsetActive("massTransAcc"));
    dispatch(addMassTransAcc(clickedOption));
  }

  return (
    <Container>
      <TopWrapper>
        <MainText>대중교통 접근성</MainText>
        <IconSVG
          imageId="cancel"
          width={24}
          height={24}
          onClick={onClickCancelButton}
        />
      </TopWrapper>
      <AccessList>
        {optionList.map((option, idx) => (
          <AccessItem key={idx} onClick={() => onClickAccessItem(idx)} clicked={clickedIdx[idx]}>{option}</AccessItem>
        ))}
      </AccessList>
      <ButtonWrapper>
        <EditAndCreateButton text="해당 접근성으로 선택" btnColor="orange" onClick={onClickSubmitbutton} />
      </ButtonWrapper>
    </Container>
  );
}