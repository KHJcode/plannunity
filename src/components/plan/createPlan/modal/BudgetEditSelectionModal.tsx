import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../../modules";
import EditAndCreateButton from "../../../templates/EditAndCreateButton";
import { setActive, unsetActive } from "../../../../modules/isActive";
import { useEffect, useState } from "react";
import { clickBudget } from "../../../../modules/budget";

const Container = styled.div<{ isActive: boolean }>`
  background: #ffffff;
  padding: 25px;
  bottom: ${(props) => (props.isActive ? 0 : "-100px")};
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
  padding: 20px;
  display: flex;
  justify-content: space-between;
  background: #F9F9F9;
  border: 1px solid #EDEDED;
  border-radius: 15px;
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

  const onClickCancelButton = () => {
    dispatch(unsetActive("budgetEdit"));
  };

  const onClickBudget = (id: number) => {
    dispatch(clickBudget(id));
    dispatch(unsetActive("budgetEdit"));
    dispatch(setActive("budgetEditOne"));
  }

  useEffect(() => {
    budgets.map(budget => {
      setSum(sum + budget.budget);
    });
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
          <BudgetItem key={budget.id} onClick={() => onClickBudget(budget.id)}>
            <BudgetName>{budget.title}</BudgetName>
            <Amount>{budget.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</Amount>
          </BudgetItem>
        ))}
      </BudgetList>
      <ButtonWrapper>
        <EditAndCreateButton
          text="해당 수정 적용하기"
          btnColor="orange"
          onClick={() => {}}
        />
      </ButtonWrapper>
    </Container>
  );
}
