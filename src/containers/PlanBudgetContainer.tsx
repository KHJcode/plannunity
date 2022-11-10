import { useDispatch } from "react-redux";
import styled from "styled-components";
import EditAndCreateButton from "../components/EditAndCreateButton";
import SecTitle from "../components/SecTitle";
import { setActive } from "../modules/isActive";

const Container = styled.div`
  margin-top: 40px;
`;

const SumBox = styled.div`
  background: #f9f9f9;
  border: 1px solid #ededed;
  border-radius: 15px;
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: space-between;
`;

const BoxLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const GrayText = styled.div`
  font-size: 15px;
  line-height: 20px;
  color: #969696;
`;

const Sum = styled.div`
  font-size: 24px;
  line-height: 25px;
  font-family: "SUIT-700";
`;

const BudgetBox = styled.div`
  background: #f9f9f9;
  border: 1px solid #ededed;
  border-radius: 15px;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MainText = styled.div`
  font-size: 18px;
  line-height: 20px;
`;

const SubText = styled.div`
  font-size: 18px;
  line-height: 20px;
  text-align: right;
  color: #969696;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 10px;
`;

export default function PlanBudgetContainer() {
  const dispatch = useDispatch();
  const onClickAdd = () => {
    dispatch(setActive("budgetAdd"));
  };

  const onClickEdit = () => {
    dispatch(setActive("budgetEdit"));
  };

  return (
    <Container>
      <SecTitle text="플랜 예산 목록" />
      <SumBox>
        <BoxLeftWrapper>
          <GrayText>총 예산 금액</GrayText>
          <Sum>15000원</Sum>
        </BoxLeftWrapper>
        <img src="images/edit-3.svg" />
      </SumBox>
      <BudgetBox>
        <TextWrapper>
          <MainText>교통비</MainText>
          <SubText>2400원</SubText>
        </TextWrapper>
        <TextWrapper>
          <MainText>생수 2L</MainText>
          <SubText>1600원</SubText>
        </TextWrapper>
        <TextWrapper>
          <MainText>라면</MainText>
          <SubText>1500원</SubText>
        </TextWrapper>
      </BudgetBox>
      <ButtonWrapper>
        <EditAndCreateButton
          text="예산 수정하기"
          btnColor="white"
          onClick={onClickEdit}
        />
        <EditAndCreateButton
          text="예산 추가하기"
          btnColor="orange"
          onClick={onClickAdd}
        />
      </ButtonWrapper>
    </Container>
  );
}
