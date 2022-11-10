import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../modules";
import { unsetActive } from "../modules/isActive";
import { setUpdatePlanSchdule } from "../modules/planSchdule";

const Container = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: ${props => props.isActive ? 0 : "100vw"};
  opacity: ${props => props.isActive ? 1 : 0};
  background: #FFFFFF;
  z-index: 1000;
  transition: .5s;
  overflow-y: scroll;
`

const BackButton = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
  background: #FFFFFF;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`

const Map = styled.div`
  width: 100%;
  height: 350px;
  background: #979797;
`

const Wrapper = styled.div`
  padding: 0 20px;
`

const ButtonWrapper = styled.div`
  padding: 0 20px;
  width: 100%;
  display: flex;
  margin-bottom: 35px;
`

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 0;
  gap: 15px;
`

const OptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`

const OptionName = styled.div`
  font-size: 18px;
  line-height: 20px;
`

const MemoWrapper = styled.div`
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const PlanDesc = styled.textarea`
  width: 100%;
  height: 218px;
  padding: 15px;
  background: #F9F9F9;
  border: 1px solid #EDEDED;
  border-radius: 15px;
  font-size: 15px;
  line-height: 25px;
  margin-bottom: 40px;

  &::placeholder {
    color: #9A9A9A;
    font-family: 'SUIT-500';
  }
`

const OptionSelectBox = styled.input`
  background: #F9F9F9;
  border: 1px solid #EDEDED;
  border-radius: 12px;
  padding: 15px;
  color: #454545;

  &::placeholder {
    color: #9A9A9A;
    font-family: 'SUIT-500';
  }
`

const Button = styled.button<{ isActive: boolean }>`
  background: #FF833E;
  border-radius: 10px;
  height: 43px;
  padding: 14px;
  font-size: 15px;
  line-height: 15px;
  color: #FFFFFF;
  border: none;
  flex: 1;
`

export default function PlanSchduleDeatilContainer() {
  const { planDetail } = useSelector((state: RootState) => state.isActive);
  const schdules = useSelector((state: RootState) => state.planSchdule);
  const { id } = useSelector((state: RootState) => state.currentId);
  const schdule = schdules.filter(item => item.id === id);
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({ title: "", date: "", loc: "", memo: "" });
  const onClickBackButton = () => {
    dispatch(unsetActive("planDetail"));
  }

  useEffect(() => {
    setInputs({
      title: schdule[0] ? schdule[0]?.title : "",
      date: schdule[0] ? schdule[0]?.date : "",
      loc: schdule[0] ? schdule[0]?.loc : "",
      memo : schdule[0] ? schdule[0]?.loc : ""
    });
  }, [])

  const onChangeInputs = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputs({
      ...inputs,
      [e.currentTarget.id]: e.target.value,
    });
  }

  const onClickStoreButton = () => {
    console.log(inputs);
    dispatch(setUpdatePlanSchdule(id, inputs.title, inputs.date, inputs.loc, inputs.memo));
    dispatch(unsetActive("planDetail"));
    setInputs({ title: "", date: "", loc: "", memo: "" });
  }

  return (
    <Container isActive={planDetail}>
      <BackButton>
        <img src="/images/arrow-left.svg" onClick={onClickBackButton} />
      </BackButton>
      <Map>
        
      </Map>
      <Wrapper>
        <OptionsWrapper>
        <OptionWrapper>
            <OptionName>스케줄 제목</OptionName>
            <OptionSelectBox id="title" placeholder="스케줄 제목을 입력해보세요" onChange={onChangeInputs} />
          </OptionWrapper>
          <OptionWrapper>
            <OptionName>날짜</OptionName>
            <OptionSelectBox id="date" placeholder="날짜를 입력해보세요" onChange={onChangeInputs} />
          </OptionWrapper>
          <OptionWrapper>
            <OptionName>장소</OptionName>
            <OptionSelectBox id="loc" placeholder="장소를 입력해보세요" onChange={onChangeInputs} />
          </OptionWrapper>
          <MemoWrapper>
            <OptionName>메모</OptionName>
            <PlanDesc id="memo" placeholder="간단한 메모를 입력해보세요" onChange={onChangeInputs} />
          </MemoWrapper>
        </OptionsWrapper>
      </Wrapper>
      <ButtonWrapper>
        <Button onClick={onClickStoreButton} isActive={planDetail}>일정 저장하기</Button>
      </ButtonWrapper>
    </Container>
  );
}