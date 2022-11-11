import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../modules";
import EditAndCreateButton from "./EditAndCreateButton";
import { unsetActive } from "../modules/isActive";
import { useState } from "react";
import { addLink } from "../modules/linkInfo";

const Container = styled.div<{ isActive: boolean }>`
  background: #ffffff;
  padding: 25px;
  bottom: ${(props) => (props.isActive ? 0 : "-100px")};
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
`

const Label = styled.div`
  font-size: 18px;
  line-height: 20px;
`

const Input = styled.input`
  background: #F9F9F9;
  border: 1px solid #EDEDED;
  border-radius: 12px;
  width: 100%;
  height: 50px;
  padding: 15px;
  font-size: 15px;
  line-height: 20px;

  &::placeholder {
    color: #BFBFBF;
    font-family: 'SUIT-500';
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export default function SearchInfoAddModal() {
  const { searchInfoAdd } = useSelector((state: RootState) => state.isActive);
  const dispatch = useDispatch();
  const [link, setLink] = useState("");

  const onClickCancelButton = () => {
    dispatch(unsetActive("searchInfoAdd"));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  }

  const onClickSubmitButton = () => {
    dispatch(addLink(link));
    dispatch(unsetActive("searchInfoAdd"));
    setLink("");
  }

  return (
    <Container isActive={searchInfoAdd}>
      <TopWrapper>
        <MainText>탐색 링크 추가</MainText>
        <img src="images/cancel.svg" onClick={onClickCancelButton} />
      </TopWrapper>
      <InputWrapper>
        <Label>정보에 사용할 링크</Label>
        <Input placeholder="링크를 입력해주세요(예: https://naver.com)" onChange={onChange} value={link} />
      </InputWrapper>
      <ButtonWrapper>
        <EditAndCreateButton
          text="해당 추가 적용하기"
          btnColor="orange"
          onClick={onClickSubmitButton}
        />
      </ButtonWrapper>
    </Container>
  );
}
