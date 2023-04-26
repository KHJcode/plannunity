import { useDispatch } from "react-redux";
import styled from "styled-components";
import BudgetList from "../BudgetList";
import EditAndCreateButton from "../../templates/EditAndCreateButton";
import SecTitle from "../../templates/SecTitle";
import { setActive } from "../../../modules/isActive";

const Container = styled.div`
  margin-top: 40px;
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
      <BudgetList />
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
