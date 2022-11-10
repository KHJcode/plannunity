import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../modules";
import EditAndCreateButton from "./EditAndCreateButton";
import { unsetActive } from "../modules/isActive";

const Container = styled.div<{ isActive: boolean }>`
  background: #ffffff;
  transition: 0.5s;
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

export default function BudgetEditModal() {
  const { budgetEdit } = useSelector((state: RootState) => state.isActive);
  const dispatch = useDispatch();
  const onClickCancelButton = () => {
    dispatch(unsetActive("budgetEdit"));
  };

  return (
    <Container isActive={budgetEdit}>
      <TopWrapper>
        <MainText>플랜 예산안 수정</MainText>
        <img src="images/cancel.svg" onClick={onClickCancelButton} />
      </TopWrapper>
      <SumWrapper>
        <SubText>예산 총 금액</SubText>
        <Sum>15,000원</Sum>
        <Hr />
      </SumWrapper>
      <BudgetList>
        <BudgetItem>
          <BudgetName>교통비</BudgetName>
          <Amount>2400원</Amount>
        </BudgetItem>
        <BudgetItem>
          <BudgetName>교통비</BudgetName>
          <Amount>2400원</Amount>
        </BudgetItem>
        <BudgetItem>
          <BudgetName>교통비</BudgetName>
          <Amount>2400원</Amount>
        </BudgetItem>
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
