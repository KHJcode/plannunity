import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTravelTerm } from "../../../../modules/currentData";
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

const TermList = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 30px;
`

const TermItem = styled.div<{ clicked: boolean }>`
  height: 50px;
  padding: 15px 19px;
  background: ${props => props.clicked ? "#FFECE1" : "#F9F9F9"};
  color: ${props => props.clicked ? "#FF833E" : "#000000"};
  border: 1px solid #EDEDED;
  border-radius: 15px;
`

const optionList = ["반나절", "당일치기", "1박 2일(2일)", "2박 3일(3일)", "3박 4일(4일) 이상"];

export default function TravelTermModal() {
  const dispatch = useDispatch();
  const [clickedOption, setClickedOption] = useState("");
  const [clickedIdx, setClickedIdx] = useState<boolean[]>([false, false, false, false, false])

  const onClickTermItem = (idx: number) => {
    setClickedOption(optionList[idx]);
    setClickedIdx(clickedIdx.map(($, i) => i === idx ? true : false));
  }

  const onClickCancelButton = () => {
    dispatch(unsetActive("travelTerm"));
    setClickedOption("");
  }

  const onClickSubmitbutton = () => {
    dispatch(unsetActive("travelTerm"));
    dispatch(addTravelTerm(clickedOption));
  }

  return (
    <Container>
      <TopWrapper>
        <MainText>여행 기간</MainText>
        <IconSVG
          imageId="cancel"
          width={24}
          height={24}
          onClick={onClickCancelButton}
        />
      </TopWrapper>
      <TermList>
        {optionList.map((option, idx) => (
          <TermItem key={idx} onClick={() => onClickTermItem(idx)} clicked={clickedIdx[idx]}>{option}</TermItem>
        ))}
      </TermList>
      <ButtonWrapper>
        <EditAndCreateButton text="해당 기간으로 선택" btnColor="orange" onClick={onClickSubmitbutton} />
      </ButtonWrapper>
    </Container>
  );
}