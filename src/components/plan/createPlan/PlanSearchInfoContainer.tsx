import { useDispatch } from "react-redux";
import styled from "styled-components";
import EditAndCreateButton from "../../templates/EditAndCreateButton";
import InfoLinkList from "../InfoLinkList";
import SecTitle from "../../templates/SecTitle";
import { setActive } from "../../../modules/isActive";

const Container = styled.div`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 60px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 10px;
`;

export default function PlanSearchInfoContainer() {
  const dispatch = useDispatch();
  const onClickEdit = () => {
    dispatch(setActive("searchInfoEdit"));
  };

  const onClickAdd = () => {
    dispatch(setActive("searchInfoAdd"));
  };
  return (
    <Container>
      <SecTitle text="플랜 탐색 정보" />
      <InfoLinkList />
      <ButtonWrapper>
        <EditAndCreateButton
          text="정보 수정하기"
          btnColor="white"
          onClick={onClickEdit}
        />
        <EditAndCreateButton
          text="정보 추가하기"
          btnColor="orange"
          onClick={onClickAdd}
        />
      </ButtonWrapper>
    </Container>
  );
}
