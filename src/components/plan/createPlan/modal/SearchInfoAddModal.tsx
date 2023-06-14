import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../../modules";
import EditAndCreateButton from "../../../templates/EditAndCreateButton";
import { unsetActive } from "../../../../modules/isActive";
import { useState } from "react";
import { addLink } from "../../../../modules/linkInfo";
import { Client } from 'peekalink';
import IconSVG from "../../../templates/IconSVG";

const Container = styled.div<{ isActive: boolean }>`
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

const ErrorMessage = styled.div`
  font-size: 15px;
  color: #ff2525;
  margin-bottom: 20px;
`;

const client = new Client({ "apiKey": "1af5912c-2b02-4280-b320-ce870e4b92dd" });

export default function SearchInfoAddModal() {
  const { searchInfoAdd } = useSelector((state: RootState) => state.isActive);
  const dispatch = useDispatch();
  const [link, setLink] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const onClickCancelButton = () => {
    dispatch(unsetActive("searchInfoAdd"));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  }

  const onClickSubmitButton = async () => {
    // const { isAvailable } = await client.isAvailable(link);
    // if(!isAvailable) {
      dispatch(addLink(link));
      dispatch(unsetActive("searchInfoAdd"));
    // } else {
    //   setErrMsg("링크가 유효하지 않습니다.");
    // }
    setLink("");
  }

  return (
    <Container isActive={searchInfoAdd}>
      <TopWrapper>
        <MainText>탐색 링크 추가</MainText>
        <IconSVG
          imageId="cancel"
          width={24}
          height={24}
          onClick={onClickCancelButton}
        />
      </TopWrapper>
      <InputWrapper>
        <Label>정보에 사용할 링크</Label>
        <Input placeholder="링크를 입력해주세요(예: https://naver.com)" onChange={onChange} value={link} />
      </InputWrapper>
      <ErrorMessage>{errMsg}</ErrorMessage>
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
