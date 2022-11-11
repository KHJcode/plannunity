import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../modules";
import EditAndCreateButton from "./EditAndCreateButton";
import { unsetActive } from "../modules/isActive";
import React, { useState } from "react";
import { addSchdule } from "../modules/schdule";

const Container = styled.div<{ isActive: boolean }>`
  background: #ffffff;
  bottom: ${(props) => (props.isActive ? 0 : "-100px")};
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

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 25px;
`;

const Label = styled.div`
  font-size: 18px;
  line-height: 20px;
`;

const Input = styled.input`
  width: 100%;
  background: #f9f9f9;
  border: 1px solid #ededed;
  font-size: 15px;
  line-height: 20px;
  border: none;
  padding: 15px;
  border-radius: 12px;

  &::placeholder {
    color: #bfbfbf;
    font-family: "SUIT-500";
  }
`;

const SelectBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;
  align-items: center;
`;

const SeqBox = styled.div`
  background: #F9F9F9;
  border: 1px solid #EDEDED;
  border-radius: 12px;
  height: 50px;
  padding: 15px 26px;
  text-align: center;
`

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export default function SchduleAddModal() {
  const { schduleAdd } = useSelector((state: RootState) => state.isActive);
  const schdules = useSelector((state: RootState) => state.schdule);
  const dispatch = useDispatch();
  const onClickCancelButton = () => {
    dispatch(unsetActive("schduleAdd"));
  };

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState(""); 

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.currentTarget.id === "title") setTitle(e.target.value);
    else if(e.currentTarget.id === "desc") setDesc(e.target.value);
  }

  const onClickSubmitButton = () => {
    dispatch(addSchdule(title, desc, schdules.length + 1));
    dispatch(unsetActive("schduleAdd"));
    setTitle("");
    setDesc("");
  }

  return (
    <Container isActive={schduleAdd}>
      <TopWrapper>
        <MainText>
          일정에 추가하실
          <br />
          정보를 입력하세요
        </MainText>
        <img src="images/cancel.svg" onClick={onClickCancelButton} />
      </TopWrapper>
      <InputWrapper>
        <Label>일정 제목</Label>
        <Input placeholder="일정 제목을 입력해주세요" value={title} onChange={onChange} id="title" />
      </InputWrapper>
      <InputWrapper>
        <Label>세부 정보</Label>
        <Input placeholder="세부 정보를 입력해주세요" value={desc} onChange={onChange} id="desc" />
      </InputWrapper>
      <SelectBoxWrapper>
        <Label>일정 순서</Label>
        <SeqBox>{schdules.length + 1}번째</SeqBox>
      </SelectBoxWrapper>
      <ButtonWrapper>
        <EditAndCreateButton
          text="해당 일정 순서 추가하기"
          btnColor="orange"
          onClick={onClickSubmitButton}
        />
      </ButtonWrapper>
    </Container>
  );
}
