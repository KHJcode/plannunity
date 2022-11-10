import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Dot from "../../public/images/dot.svg";
import PageTitle from "../components/PageTitle";
import { RootState } from "../modules";
import { unsetActive } from "../modules/isActive";
import PlanBudgetContainer from "./PlanBudgetContainer";
import PlanSchduleContainer from "./PlanSchduleContainer";
import PlanSearchInfoContainer from "./PlanSearchInfoContainer";

const Container = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 100%;
  padding: 40px 20px 20px 20px;
  position: fixed;
  top: 0;
  left: ${(props) => (props.isActive ? 0 : "100vw")};
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  background: #ffffff;
  z-index: 1000;
  transition: 0.5s;
  overflow-y: scroll;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
  margin-bottom: 30px;
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 3px;
`;

const DotWrapper = styled.span`
  display: flex;
  align-items: flex-end;
  padding-bottom: 3px;
`;

const RegisterButton = styled.button`
  color: #ff833e;
  font-size: 22px;
  line-height: 24px;
  border: none;
  background: #ffffff;
`;

const TitleInput = styled.input`
  width: 100%;
  height: 50px;
  background: #f9f9f9;
  border: 1px solid #ededed;
  border-radius: 12px;
  padding: 15px;
  font-size: 15px;
  line-height: 20px;
  margin: 15px 0;

  &::placeholder {
    color: #bfbfbf;
    font-family: "SUIT-500";
  }
`;

const PhotoButton = styled.button`
  width: 65px;
  height: 65px;
  border-radius: 12px;
  background: #f9f9f9;
  border: 1px solid #ededed;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export default function CreatePlanContainer() {
  const { planEdit } = useSelector((state: RootState) => state.isActive);
  const dispatch = useDispatch();

  return (
    <Container isActive={planEdit}>
      <TopWrapper>
        <TitleWrapper>
          <img
            src="images/arrow-left.svg"
            onClick={() => dispatch(unsetActive("planEdit"))}
          />
          <PageTitle text="플랜 만들기" />
          <DotWrapper>
            <Dot />
          </DotWrapper>
        </TitleWrapper>
        <RegisterButton>등록</RegisterButton>
      </TopWrapper>
      <TitleInput placeholder="플랜 제목을 입력해주세요" />
      {/* <PhotoButton>
        <img src="images/camera.svg" style={{ "padding": "20px" }} />
      </PhotoButton> */}
      <PlanSchduleContainer />
      <PlanBudgetContainer />
      <PlanSearchInfoContainer />
    </Container>
  );
}
