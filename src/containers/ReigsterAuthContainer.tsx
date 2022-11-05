import styled from "styled-components";
import LoginMainText from "../components/LoginMainText";
import LoginSubText from "../components/LoginSubText";
import Logo from "../../public/images/logo.svg";
import LoginInput from "../components/LoginInput";
import LoginButton from "../components/LoginButton";
import { useState } from "react";

const Container = styled.div<{ visible: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  height: 100vh;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  background: #FFFFFF;
  opacity: ${props => props.visible ? 1 : 0};
  transition: ${props => props.visible ? 0 : ".5s"};
  z-index: ${props => props.visible ? 999 : 997};
`

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 50px;
`

const Box = styled.div`
  height: 20px;
`

export default function RegisterAuthContainer() {
  const [visible, setVisible] = useState(true);
  const onClick = () => {
    setVisible(false);
  }
  return (
    <Container visible={visible}>
      <TopWrapper>
        <Logo />
        <LoginMainText text1="입력하신 이메일로" text2="인증 코드를 발송했어요" />
      </TopWrapper>
      <LoginSubText text="받으신 인증 코드를 입력해주세요" />
      <LoginInput placeholder="인증 코드 입력" />
      <Box />
      <LoginButton text="다음" onClickNextButton={onClick} />
    </Container>
  );
}