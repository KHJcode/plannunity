import {ChangeEvent, useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Dot from "../../../../public/images/dot.svg"
import PageTitle from "../../templates/PageTitle";
import { RootState } from "../../../modules";
import { clearBudget } from "../../../modules/budget";
import { setActive, unsetActive } from "../../../modules/isActive";
import { clearLink } from "../../../modules/linkInfo";
import { clearSchdule } from "../../../modules/schdule";
import PlanBudgetContainer from "./PlanBudgetContainer";
import PlanSchduleContainer from "./PlanSchduleContainer";
import PlanSearchInfoContainer from "./PlanSearchInfoContainer";
import { addData } from "../../../firebase/database";
import MapIcon from "../MapIcon";
import { Plan } from "../../../firebase/schema";
import SmallSecTitle from "../SmallSecTitle";
import { clearCategory } from "../../../modules/category";
import IconSVG from "../../templates/IconSVG";

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

const Input = styled.input<{ type: string }>`
  width: 100%;
  height: 50px;
  background: #f9f9f9;
  border: 1px solid #ededed;
  border-radius: 12px;
  padding: 15px;
  font-size: 15px;
  line-height: 20px;
  margin-top: ${props => props.type === "title" ? "15px" : "5px"};

  &::placeholder {
    color: #bfbfbf;
    font-family: "SUIT-500";
  }
`;

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`

const OptionBottomWrapper = styled.div`
  display: flex;
  gap: 7px;
  margin-top: 5px;
`

const OptionBoxList = styled.div`
  display: flex;
  gap: 7px;
  flex-wrap: wrap;
`

const OptionBox = styled.div`
  height: 50px;
  padding: 16px 15px;
  background: #F9F9F9;
  border: 1px solid #EDEDED;
  border-radius: 12px;
`

const PlusButton = styled.div`
  padding: 13px;
  background: #F9F9F9;
  border: 1px solid #EDEDED;
  border-radius: 12px;
  width: 50px;
  height: 50px;
`

export default function CreatePlanContainer() {
  const { planEdit } = useSelector((state: RootState) => state.isActive);
  const categories = useSelector((state: RootState) => state.category);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [username, setUsername] = useState("");
  const schdules = useSelector((state: RootState) => state.schdule);
  const budgets = useSelector((state: RootState) => state.budget);
  const links = useSelector((state: RootState) => state.linkInfo);
  const { travelTerm } = useSelector((state: RootState) => state.currentData);
  
  useEffect(() => {
    setUsername(localStorage.getItem("name")!);
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const onClick = () => {
    const plan: Plan = {
      title,
      visibility: "private",
      schdules,
      budgets,
      links,
      category: categories,
    }
    console.log(plan);
    addData("plans", plan);

    setTitle("");
    dispatch(clearBudget());
    dispatch(clearLink());
    dispatch(clearSchdule());
    dispatch(clearCategory());
    dispatch(unsetActive("planEdit"));
  }

  const onClickCategoryAddButton = () => {
    dispatch(setActive("categorySelect"));
  }

  const onClickTravelTermInput = () => {
    dispatch(setActive("travelTerm"));
  }

  return (
    <Container isActive={planEdit}>
      <TopWrapper>
        <TitleWrapper>
          <IconSVG
            imageId="arrow-left"
            width={24}
            height={24}
            stroke="currentColor"
            strokeWidth={2}
            onClick={() => dispatch(unsetActive("planEdit"))}
          />
          <PageTitle text="플랜 만들기" />
          <DotWrapper>
            <Dot />
          </DotWrapper>
        </TitleWrapper>
        <RegisterButton onClick={onClick}>등록</RegisterButton>
      </TopWrapper>
      <Input placeholder="플랜 제목을 입력해주세요" value={title} onChange={onChange} type="title" />
      <OptionWrapper>
        <SmallSecTitle text="카테고리" />
        <OptionBottomWrapper>
          <OptionBoxList>
            {categories.map((category: string, idx: number) => (
              <OptionBox key={idx}>{category}</OptionBox>
            ))}
            <PlusButton onClick={onClickCategoryAddButton}>
              <IconSVG
                imageId="plus"
                width={24}
                height={24}
              />
            </PlusButton>
          </OptionBoxList>
        </OptionBottomWrapper>
      </OptionWrapper>
      <OptionWrapper>
        <SmallSecTitle text="여행 기간" />
        <Input placeholder="여행 기간을 선택해주세요" type="term" value={travelTerm} onFocus={onClickTravelTermInput} readOnly />
      </OptionWrapper>
      <PlanSchduleContainer />
      <PlanBudgetContainer />
      <PlanSearchInfoContainer />
      <MapIcon />
    </Container>
  );
}
