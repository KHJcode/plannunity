import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Dot from "../../../../public/images/dot.svg"
import PageTitle from "../../templates/PageTitle";
import { RootState } from "../../../modules";
import { setActive, unsetActive } from "../../../modules/isActive";
import SmallSecTitle from "../SmallSecTitle";
import { useEffect, useState } from "react";
import { addData, getAllData, getData, getPlansByVisibility, setSharedPlan, updateData } from "../../../firebase/database";
import PlanThumbnail from "../../templates/PlanThumbnail";
import { SharedPlan } from "../../../firebase/schema";
import { clearSharePlanData } from "../../../modules/currentData";
import IconSVG from "../../templates/IconSVG";

const Container = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 100%;
  padding: 40px 20px 20px 20px;
  position: fixed;
  top: 0;
  left: ${props => props.isActive ? 0 : "100vw"};
  opacity: ${props => props.isActive ? 1 : 0};
  background: #FFFFFF;
  z-index: 1000;
  transition: .5s;
  overflow-y: scroll;
`

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
  margin-bottom: 30px;
`

const TitleWrapper = styled.div`
  display: flex;
  gap: 3px;
`

const DotWrapper = styled.span`
  display: flex;
  align-items: flex-end;
  padding-bottom: 3px;
`;

const RegisterButton = styled.button`
  color: #FF833E;
  font-size: 22px;
  line-height: 24px;
  border: none;
  background: #FFFFFF;
`

const SelectBox1 = styled.div`
  padding: 15px 16px;
  background: #F9F9F9;
  border: 1px solid #EDEDED;
  border-radius: 12px;
  display: flex;
  align-items: center;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
  margin-left: 15px;
  justify-content: center;
`

const TitleText = styled.div`
  font-size: 18px;
  line-height: 20px;
  color: #454545;
`

const DescText = styled.div`
  font-size: 12px;
  line-height: 20px;
  color: #A4A4A4;
`

const SelectBox2 = styled.div`
  background: #F9F9F9;
  border: 1px solid #EDEDED;
  border-radius: 12px;
  padding: 15px 22px;
`

const SecTitle = styled.div`
  font-size: 18px;
  line-height: 20px;
`

const PlanDesc = styled.textarea`
  width: 100%;
  height: 218px;
  padding: 15px;
  background: #F9F9F9;
  border: 1px solid #EDEDED;
  border-radius: 15px;
  font-size: 15px;
  line-height: 25px;
  resize: none;

  &::placeholder {
    color: #9A9A9A;
    font-family: 'SUIT-500';
  }
`

const PlanIntro = styled.input`
  width: 100%;
  height: 50px;
  padding: 15px;
  background: #F9F9F9;
  border: 1px solid #EDEDED;
  border-radius: 12px;
  font-size: 15px;
  line-height: 25px;

  &::placeholder {
    color: #9A9A9A;
    font-family: 'SUIT-500';
`

// 플랜 선택 

const MainText = styled.div`
  font-size: 20px;
  line-height: 35px;
  font-family: 'SUIT-700';
  margin-bottom: 20px;
`

const PlanList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`

const PlanItem = styled.div`
  width: 100%;
  background: #F9F9F9;
  border: 1px solid #EDEDED;
  border-radius: 12px;
  padding: 20px;
  height: 70px;
  display: flex;
  align-items: center;
  gap: 12px;
`

const PlanTitle = styled.div`
  font-size: 20px;
  line-height: 25px;
`

export default function SharePlanContainer() {
  const { planShare } = useSelector((state: RootState) => state.isActive);
  const { difficulty, massTransAcc, shareTarget } = useSelector((state: RootState) => state.currentData);
  const [isSelectedPlan, setIsSelectedPlan] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>();
  const [plans, setPlans] = useState<any>();
  const [intro, setIntro] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    (async () => {
      await getPlansByVisibility("private").then((data: any) => setPlans(data));
    })();
  }, [])

  const onClickShareTarget = () => {
    dispatch(setActive("shareTarget"));
  }

  const onClickMassTransAcc = () => {
    dispatch(setActive("massTransAcc"));
  }

  const onClickDifficulty = () => {
    dispatch(setActive("difficulty"));
  }

  const onClickShareButton = () => {
    const data: SharedPlan = {
      title: selectedPlan.title,
      author: selectedPlan.author,
      schdules: selectedPlan.schdules,
      budgets: selectedPlan.budgets,
      links: selectedPlan.links,
      category: selectedPlan.category,
      visibility: shareTarget,
      intro,
      content,
      thumbs: 0,
      hearts: 0,
      difficulty,
      transportAccess: massTransAcc,
      view: 0,
    }
    console.log(selectedPlan);
    setSharedPlan(selectedId, data);
    
    setIsSelectedPlan(false);
    setIntro("");
    setContent("");
    dispatch(unsetActive("planShare"));
    dispatch(clearSharePlanData());
  }

  // 플랜 선택

  const onClickPlanItem = (id: string) => {
    setSelectedId(id);
    (async () => {
      await getData("plans", id).then((data: any) => setSelectedPlan(data));
    })();
    setIsSelectedPlan(true);
  }

  return (
    <Container isActive={planShare}>
      <TopWrapper>
        <TitleWrapper>
        <IconSVG
            imageId="arrow-left"
            width={24}
            height={24}
            stroke="currentColor"
            strokeWidth={2}
            onClick={() => { 
              dispatch(unsetActive("planShare")); 
              setIsSelectedPlan(false); 
            }}
          />
          <PageTitle text="플랜 공유하기" />
          <DotWrapper>
            <Dot />
          </DotWrapper>
        </TitleWrapper>
        {isSelectedPlan && <RegisterButton onClick={onClickShareButton}>공유</RegisterButton>}
      </TopWrapper>
      {isSelectedPlan
      ?
        <>
          <div style={{ "marginBottom": "20px" }}> 
            <SmallSecTitle text="공유 대상" />
            <SelectBox1>
              <img src="/images/earth.svg" />
              <TextWrapper>
                <TitleText>{ shareTarget === "public" ? "전체 공유" : "친구에게만 공유" }</TitleText>
                <DescText>{ shareTarget === "public" ? "해당 플랜을 모두에게 공유해요" : "해당 플랜을 친구에게만 보이게 공유해요" }</DescText>
              </TextWrapper>
              <img src="/images/arrow-down.svg" width={23} height={23} onClick={onClickShareTarget} />
            </SelectBox1>
          </div>
          <div style={{ "marginBottom": "20px", "display": "flex", "justifyContent": "space-between", "alignItems": "center" }}>
            <SecTitle>난이도</SecTitle>
            <SelectBox2 onClick={onClickDifficulty}>{difficulty}</SelectBox2>
          </div>
          <div style={{ "marginBottom": "40px", "display": "flex", "justifyContent": "space-between", "alignItems": "center" }}>
            <SecTitle>교통 접근성 (선택)</SecTitle>
            <SelectBox2 onClick={onClickMassTransAcc}>{massTransAcc}</SelectBox2>
          </div>
          <div style={{ "display": "flex", "marginBottom": "40px", "gap": "5px", "flexDirection": "column" }}>
            <SmallSecTitle text="한줄 소개" />
            <PlanIntro placeholder="플랜을 한 줄로 소개해보세요" value={intro} onChange={(e) => setIntro(e.target.value)} />
          </div>
          <div style={{ "display": "flex", "marginBottom": "40px", "gap": "5px", "flexDirection": "column" }}>
            <SmallSecTitle text="후기 (선택)" />
            <PlanDesc placeholder="여행 후기를 적어보세요" value={content} onChange={(e) => setContent(e.target.value)} />
          </div>
        </>
      :
        <>
          <MainText>공유할 플랜을 선택해주세요</MainText>
          {plans && 
            <PlanList>
              {plans.map((plan: any) => (
                <PlanItem key={plan.id} onClick={() => onClickPlanItem(plan.id)}>
                  <PlanTitle>{plan.title}</PlanTitle>
                </PlanItem>
              ))}
            </PlanList>
          }
          
        </>
      }
    </Container>
  );
}
