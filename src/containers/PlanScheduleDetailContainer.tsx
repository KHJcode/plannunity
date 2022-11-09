import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../modules";
import { unsetActive } from "../modules/isActive";

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

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`

const Title = styled.input<{ isActive: boolean }>`
  font-size: 20px;
  line-height: 24px;
  background: ${props => props.isActive ? "#F9F9F9": "#FFFFFF"};
  border: ${props => props.isActive ? "1px solid #EDEDED" : "none"};
  border-radius: 12px;
  height: 50px;
  padding: 10px;
  touch-action: none;
  width: 100%;
`

const ButtonWrapper = styled.div`
  padding: 0 20px;
  width: 100%;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  margin-bottom: 35px;
`

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 25px;
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

const OptionSelectBox = styled.div`
  background: #F9F9F9;
  border: 1px solid #EDEDED;
  border-radius: 12px;
  padding: 15px;
  color: #454545;
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
  display: ${props => props.isActive ? "unset" : "none"};;
`

export default function PlanSchduleDeatilContainer() {
  const { planDetail } = useSelector((state: RootState) => state.isActive);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState({ title: false, time: false });
  const [inputs, setInputs] = useState({ title: "관악산역 하차" });
  const onClickBackButton = () => {
    dispatch(unsetActive("planDetail"));
  }

  const onClickInput = (e: React.MouseEvent<HTMLInputElement>) => {
    setEdit({
      ...edit,
      [e.currentTarget.id]: true
    });
  }

  const onBlurInput = (e: React.FocusEvent<HTMLInputElement>) => {
    setEdit({
      ...edit,
      [e.currentTarget.id]: false
    })
  }

  const onChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.currentTarget.id]: e.target.value,
    });
  }

  const onClickStoreButton = () => {
    dispatch(unsetActive("planDetail"));
  }

  return (
    <Container isActive={planDetail}>
      <BackButton>
        <img src="/images/arrow-left.svg" onClick={onClickBackButton} />
      </BackButton>
      <Map />
      <Wrapper>
        <TitleWrapper>
          <Title value={inputs.title} onChange={onChangeInputs} id="title" onClick={onClickInput} isActive={edit.title} onBlur={onBlurInput} />
        </TitleWrapper>
        <OptionsWrapper>
          <OptionWrapper>
            <OptionName>날짜</OptionName>
            <OptionSelectBox>11/22 (수) 9:00</OptionSelectBox>
          </OptionWrapper>
          <OptionWrapper>
            <OptionName>장소</OptionName>
            <OptionSelectBox>서울 관악구 신림동 211</OptionSelectBox>
          </OptionWrapper>
        </OptionsWrapper>
      </Wrapper>
      <ButtonWrapper>
        <Button onClick={onClickStoreButton} isActive={planDetail}>일정 저장하기</Button>
      </ButtonWrapper>
    </Container>
  );
}