import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Dot from "../../public/images/dot.svg";
import PageTitle from "../components/PageTitle";
import { RootState } from "../modules";
import { unsetActive } from "../modules/isActive";
import PlanSchduleContainer from "./PlanSchduleContainer";

const Container = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: fit-content;
  padding: 40px 20px 20px 20px;
  position: absolute;
  top: 0;
  left: ${props => props.isActive ? 0 : "100vw"};
  opacity: ${props => props.isActive ? 1 : 0};
  background: #FFFFFF;
  z-index: 1000;
  transition: .5s;
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

const PhotoButton = styled.button`
  width: 65px;
  height: 65px;
  border-radius: 12px;
  background: #F9F9F9;
  border: 1px solid #EDEDED;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TitleInput = styled.input`
  width: 100%;
  height: 50px;
  background: #F9F9F9;
  border: 1px solid #EDEDED;
  border-radius: 12px;
  padding: 15px;
  font-size: 15px;
  line-height: 20px;
  margin: 15px 0;
  
  &::placeholder {
    color: #BFBFBF;
    font-family: 'SUIT-500';
  }
`

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 25px;
`

const OptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`

const OptionName = styled.div`
  font-size: 18px;
  line-height: 20px;
`

const OptionSelectBox = styled.div`
  background: #F9F9F9;
  border: 1px solid #EDEDED;
  border-radius: 12px;
  padding: 15px;
  color: #454545;
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
  margin-bottom: 40px;

  &::placeholder {
    color: #9A9A9A;
    font-family: 'SUIT-500';
  }
`

export default function CreatePlanContainer() {
  const { planEdit } = useSelector((state: RootState) => state.isActive);
  const dispatch = useDispatch();

  return (
    <Container isActive={planEdit}>
      <TopWrapper>
        <TitleWrapper>
          <img src="images/arrow-left.svg" onClick={() => dispatch(unsetActive("planEdit"))} />
          <PageTitle text="플랜 만들기" />
          <DotWrapper>
            <Dot />
          </DotWrapper>
        </TitleWrapper>
        <RegisterButton>등록</RegisterButton>
      </TopWrapper>
      <PhotoButton>
        <img src="images/camera.svg" style={{ "padding": "20px" }} />
      </PhotoButton>
      <TitleInput placeholder="플랜 제목을 입력해주세요" />
      <OptionsWrapper>
        <OptionWrapper>
          <OptionName>카테고리</OptionName>
          <OptionSelectBox>지역 핫플레이스</OptionSelectBox>
        </OptionWrapper>
        <OptionWrapper>
          <OptionName>소요 시간</OptionName>
          <OptionSelectBox>6시간</OptionSelectBox>
        </OptionWrapper>
        <OptionWrapper>
          <OptionName>지역</OptionName>
          <OptionSelectBox>서울특별시 강남구, 역삼동</OptionSelectBox>
        </OptionWrapper>
      </OptionsWrapper>
      <PlanDesc placeholder="플랜을 소개할 내용을&#13;&#10;간단히 적어주세요 (1000자 이내)" />
      <PlanSchduleContainer />
    </Container>
  );
}