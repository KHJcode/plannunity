import { useDispatch } from "react-redux";
import styled from "styled-components";
import EditAndCreateButton from "../../templates/EditAndCreateButton";
import PlanSchduleList from "../PlanSchduleList";
import SecTitle from "../../templates/SecTitle";
import { setActive } from "../../../modules/isActive";

const Container = styled.div`
  width: 100%;
  margin-top: 40px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 10px;
`;

export default function PlanSchduleContainer() {
  const dispatch = useDispatch();
  const onClickEdit = () => {
    dispatch(setActive("schduleEdit"));
  };

  const onClickAdd = () => {
    dispatch(setActive("schduleAdd"));
  };

  return (
    <Container>
      <SecTitle text="플랜 일정" />
      <PlanSchduleList />
      <ButtonWrapper>
        <EditAndCreateButton
          text="일정 수정하기"
          btnColor="white"
          onClick={onClickEdit}
        />
        <EditAndCreateButton
          text="일정 추가하기"
          btnColor="orange"
          onClick={onClickAdd}
        />
      </ButtonWrapper>
    </Container>
  );
}
