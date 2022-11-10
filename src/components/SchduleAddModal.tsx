import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../modules";
import EditAndCreateButton from "./EditAndCreateButton";
import Select from "react-select";
import { unsetActive } from "../modules/isActive";

const Container = styled.div<{ isActive: boolean }>`
  background: #ffffff;
  bottom: ${(props) => (props.isActive ? 0 : "-100px")};
  transition: 0.5s;
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

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export default function SchduleAddModal() {
  const { schduleAdd } = useSelector((state: RootState) => state.isActive);
  const dispatch = useDispatch();
  const onClickCancelButton = () => {
    dispatch(unsetActive("schduleAdd"));
  };

  const onChangeSelectBox = (value: number) => {};

  const seqList = [
    { value: 1, label: "1번째" },
    { value: 2, label: "2번째" },
  ];
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
        <Input placeholder="일정 제목을 입력해주세요" />
      </InputWrapper>
      <InputWrapper>
        <Label>세부 정보</Label>
        <Input placeholder="세부 정보를 입력해주세요" />
      </InputWrapper>
      <SelectBoxWrapper>
        <Label>일정 순서</Label>
        <Select
          options={seqList}
          styles={{}}
          onChange={(value) => {
            onChangeSelectBox(value!.value);
          }}
        ></Select>
      </SelectBoxWrapper>
      <ButtonWrapper>
        <EditAndCreateButton
          text="해당 일정 순서 추가하기"
          btnColor="orange"
          onClick={() => {}}
        />
      </ButtonWrapper>
    </Container>
  );
}
