import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Dot from "../../public/images/dot.svg";
import PageTitle from "../components/PageTitle";
import { addPlan } from "../firebase/database";
import { RootState } from "../modules";
import { clearBudget } from "../modules/budget";
import { unsetActive } from "../modules/isActive";
import { clearLink } from "../modules/linkInfo";
import { clearSchdule } from "../modules/schdule";
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
  const [title, setTitle] = useState("");
  const [username, setUsername] = useState("");
  const schdules = useSelector((state: RootState) => state.schdule);
  const budgets = useSelector((state: RootState) => state.budget);
  const links = useSelector((state: RootState) => state.linkInfo);
  
  useEffect(() => {
    setUsername(localStorage.getItem("name")!);
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const onClick = () => {
    addPlan(title, username, schdules, budgets, links);
    dispatch(clearBudget());
    dispatch(clearLink());
    dispatch(clearSchdule());
    dispatch(unsetActive("planEdit"));
  }

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
        <RegisterButton onClick={onClick}>등록</RegisterButton>
      </TopWrapper>
      <TitleInput placeholder="플랜 제목을 입력해주세요" value={title} onChange={onChange} />
      {/* <PhotoButton>
        <img src="images/camera.svg" style={{ "padding": "20px" }} />
      </PhotoButton> */}
      <PlanSchduleContainer />
      <PlanBudgetContainer />
      <PlanSearchInfoContainer />
    </Container>
  );
}
