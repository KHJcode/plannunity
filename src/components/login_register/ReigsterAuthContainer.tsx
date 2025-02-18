import styled from "styled-components";
import LoginMainText from "./LoginMainText";
import LoginSubText from "./LoginSubText";
import Logo from "../../../public/images/logo.svg";
import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";
import { useState } from "react";

type RegisterAuthContainerType = {
  visible: boolean[];
  setVisible: ($: boolean[]) => void;
}

const Container = styled.div<{ visible: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  background: #FFFFFF;
  z-index: ${props => props.visible ? 999 : 997};
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity .75s, ${props => props.visible ? "transform .75s" : ""};
  transform: ${props => props.visible ? "translateY(0)" : "translateY(50px)"};
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

export default function RegisterAuthContainer({ visible, setVisible }: RegisterAuthContainerType) {
  const [authCode, setAuthCode] = useState("");
  const onClick = () => {
    setVisible([false, false, true]);
  }

  return (
    <Container visible={visible[1]}>
      <TopWrapper>
        <Logo />
        <LoginMainText text1="입력하신 이메일로" text2="인증 코드를 발송했어요" />
      </TopWrapper>
      <LoginSubText text="받으신 인증 코드를 입력해주세요" />
      <LoginInput placeholder="인증 코드 입력" text={authCode} setText={setAuthCode} inputType="text" />
      <Box />
      <LoginButton text="다음" onClick={onClick} />
    </Container>
  );
}