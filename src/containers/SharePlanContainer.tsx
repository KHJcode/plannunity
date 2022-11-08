import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Dot from "../../public/images/dot.svg";
import PageTitle from "../components/PageTitle";
import { RootState } from "../modules";
import { unsetActive } from "../modules/isActive";

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
    </Container>
  );
}