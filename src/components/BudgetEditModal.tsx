import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../modules";
import EditAndCreateButton from "./EditAndCreateButton";
import { unsetActive } from "../modules/isActive";
import { useState } from "react";
import { updateBudget } from "../modules/budget";

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

const SumWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 25px;
`

const SubText = styled.div`
  font-size: 15px;
  line-height: 20px;
  color: #969696;
`

const BudgetInput = styled.input`
  font-size: 24px;
  line-height: 25px;
  font-family: 'SUIT-700';
  margin-bottom: 5px;
  border: none;
  background: #FFFFFF;
  padding: 15px;
  border-bottom: 1.5px solid #E0E0E0;

  &::placeholder {
    color: #BFBFBF;
    font-family: 'SUIT-500';
    font-size: 15px;
  }
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
  margin-bottom: 25px;

  &::placeholder {
    color: #BFBFBF;
    font-family: 'SUIT-500';
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export default function BudgetEditModal() {
  const { budgetAdd } = useSelector((state: RootState) => state.isActive);
  const budgets = useSelector((state: RootState) => state.budget).filter(item => item.isSelected);
  const dispatch = useDispatch();
  const onClickCancelButton = () => {
    dispatch(unsetActive("budgetEditOne"));
  };

  const [title, setTitle] = useState("");
  const [budget, setBudget] = useState(""); 

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.currentTarget.id === "title") setTitle(e.target.value);
    else if(e.currentTarget.id === "amount") setBudget(e.target.value);
  }

  const onClickSubmitButton = () => {
    dispatch(updateBudget(title, Number(budget), budgets[0]?.id));
    dispatch(unsetActive("budgetEditOne"));
    setTitle("");
    setBudget("");
  }

  return (
    <Container isActive={budgetAdd}>
      <TopWrapper>
        <MainText>추가된 예산안 수정</MainText>
        <img src="images/cancel.svg" onClick={onClickCancelButton} />
      </TopWrapper>
      <SumWrapper>
        <SubText>해당 예산안 금액</SubText>
        <BudgetInput placeholder="금액을 입력해주세요" onChange={onChange} id="amount" value={budget} />
      </SumWrapper>
      <Input placeholder="예산안 제목을 입력해주세요" onChange={onChange} id="title" value={title} />
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