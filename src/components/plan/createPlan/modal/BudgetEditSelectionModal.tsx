import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../../modules";
import EditAndCreateButton from "../../../templates/EditAndCreateButton";
import { setActive, unsetActive } from "../../../../modules/isActive";
import { useEffect, useState } from "react";
import { BudgetsState, clickBudget, deleteBudget } from "../../../../modules/budget";

const Container = styled.div<{ isActive: boolean }>`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #ffffff;
  padding: 25px;
  transition: .5s;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  transform: ${props => props.isActive ? "translateY(0)" : "translateY(25px)"};
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 28px;
`;

const MainText = styled.div`
  font-size: 22px;
  line-height: 35px;
`;

const SumWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
`

const SubText = styled.div`
  font-size: 15px;
  line-height: 20px;
  color: #969696;
`

const Sum = styled.div`
  font-size: 24px;
  line-height: 25px;
  font-family: 'SUIT-700';
  margin-bottom: 5px;
`

const Hr = styled.hr`
  border: 0.75px solid #E0E0E0;
`

const BudgetList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 25px;
`

const BudgetItem = styled.div`
  padding: 20px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #F9F9F9;
  border: 1px solid #EDEDED;
  border-radius: 15px;
`

const BudgetItemRightWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

const BudgetName = styled.div`
  font-size: 18px;
  line-height: 20px;
`;

const Amount = styled.div`
  font-size: 18px;
  line-height: 20px;
  color: #969696;
`

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export default function BudgetEditSelectionModal() {
  const { budgetEdit } = useSelector((state: RootState) => state.isActive);
  const budgets = useSelector((state: RootState) => state.budget);
  const dispatch = useDispatch();
  const [sum, setSum] = useState(0);

  const onClickDeleteButton = (id: number) => {
    dispatch(deleteBudget(id));
  }

  const onClickCancelButton = () => {
    dispatch(unsetActive("budgetEdit"));
  };

  const onClickSubmitButton = () => {
    dispatch(unsetActive("budgetEdit"));
  }

  const onClickBudget = (id: number) => {
    dispatch(clickBudget(id));
    dispatch(unsetActive("budgetEdit"));
    dispatch(setActive("budgetEditOne"));
  }

  useEffect(() => {
    setSum(0);
    setTimeout(() => budgets.map(budget => {setSum(sum => sum + budget.budget)}), 0);
  }, [budgets.length]);

  return (
    <Container isActive={budgetEdit}>
      <TopWrapper>
        <MainText>플랜 예산안 수정</MainText>
        <img src="images/cancel.svg" onClick={onClickCancelButton} />
      </TopWrapper>
      <SumWrapper>
        <SubText>예산 총 금액</SubText>
        <Sum>{sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</Sum>
        <Hr />
      </SumWrapper>
      <BudgetList>
        {budgets.map(budget => (
          <BudgetItem key={budget.id}>
            <BudgetName onClick={() => onClickBudget(budget.id)}>{budget.title}</BudgetName>
            <BudgetItemRightWrapper>
              <Amount>{budget.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</Amount>
              <img src="images/cancel_gray.svg" onClick={() => onClickDeleteButton(budget.id)} />
            </BudgetItemRightWrapper>
          </BudgetItem>
        ))}
      </BudgetList>
      <ButtonWrapper>
        <EditAndCreateButton
          text="수정 완료"
          btnColor="orange"
          onClick={onClickSubmitButton}
        />
      </ButtonWrapper>
    </Container>
  );
}
