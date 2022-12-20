import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Dot from "../../../../public/images/dot.svg"
import PageTitle from "../../templates/PageTitle";
import { RootState } from "../../../modules";
import { unsetActive } from "../../../modules/isActive";
import SmallSecTitle from "../SmallSecTitle";

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
  height: 71px;
  display: flex;
  align-items: center;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
  margin-left: 15px;
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

export default function SharePlanContainer() {
  const { planShare } = useSelector((state: RootState) => state.isActive);
  const dispatch = useDispatch();

  return (
    <Container isActive={planShare}>
      <TopWrapper>
        <TitleWrapper>
          <img src="images/arrow-left.svg" onClick={() => dispatch(unsetActive("planShare"))} />
          <PageTitle text="플랜 공유하기" />
          <DotWrapper>
            <Dot />
          </DotWrapper>
        </TitleWrapper>
        <RegisterButton>공유</RegisterButton>
      </TopWrapper>
      <div style={{ "marginBottom": "20px" }}> 
        <SmallSecTitle text="공유 대상" />
        <SelectBox1>
          <img src="/images/earth.svg" />
          <TextWrapper>
            <TitleText>전체 공유</TitleText>
            <DescText>해당 플랜을 모두에게 공유해요</DescText>
          </TextWrapper>
          <img src="/images/arrow-down.svg" width={23} height={23} />
        </SelectBox1>
      </div>
      <div style={{ "marginBottom": "40px", "display": "flex", "justifyContent": "space-between", "alignItems": "center" }}>
        <SecTitle>교통 접근성 (선택)</SecTitle>
        <SelectBox2>좋음</SelectBox2>
      </div>
      <div style={{ "display": "flex", "marginBottom": "40px", "gap": "5px", "flexDirection": "column" }}>
        <SmallSecTitle text="기타 정보 (선택)" />
        <PlanDesc placeholder="플랜의 기타 정보를 적어보세요" />
      </div>
      <div style={{ "display": "flex", "marginBottom": "40px", "gap": "5px", "flexDirection": "column" }}>
        <SmallSecTitle text="후기 (선택)" />
        <PlanDesc placeholder="후기를 적어보세요" />
      </div>
    </Container>
  );
}