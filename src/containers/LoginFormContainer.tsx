import styled from "styled-components";
import LoginButton from "../components/LoginButton";
import LoginInput from "../components/LoginInput";
import LoginSubText from "../components/LoginSubText";
import Logo from "../../public/images/logo.svg";
import LoginMainText from "../components/LoginMainText";
import CheckBox from "../../public/images/check-square.svg";
import Link from "next/link";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  height: 100vh;
  width: 100%;
  height: 100vh;
  background: #FFFFFF;
`

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 50px;
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 20px;
`

const PasswordOptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`

const PasswordOptionLeftWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Text = styled.span<{ color: string }>`
  font-size: 15px;
  line-height: 19px;
  color: ${
    props => 
    props.color === "white" ? "#979797" : 
    props.color === "orange" ? "#FF833E" : "#000000"
  };
`

const InputWrapper = styled.div``;

const Box = styled.div`
  height: 20px;
`

const BottomTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
`

export default function LoginFormContainer() {
  const [rememberPassword, setRememberPassword] = useState(false);
  return (
    <Container>
      <TopWrapper>
        <Logo />
        <LoginMainText text1="서비스 사용을 위해" text2="계정에 로그인해주세요" />
      </TopWrapper>
      <FormWrapper>
        <InputWrapper>
          <LoginSubText text="이메일을 입력해주세요" />
          <LoginInput placeholder="이메일 주소 입력" />
        </InputWrapper>
        <InputWrapper>
          <LoginSubText text="비밀번호를 입력해주세요" />
          <LoginInput placeholder="비밀번호를 입력해주세요(8자 이상)" />
        </InputWrapper>
      </FormWrapper>
      <PasswordOptionWrapper>
        <PasswordOptionLeftWrapper onClick={() => setRememberPassword(!rememberPassword)}>
          <CheckBox stroke={rememberPassword ? "#FF833E" : "#979797"} />
          <Text color={rememberPassword ? "orange" : "white"}>비밀번호 기억하기</Text>
        </PasswordOptionLeftWrapper>
        <Text color="orange">비밀번호 찾기</Text>
      </PasswordOptionWrapper>
      <LoginButton text="로그인" onClickNextButton={() => {}} />
      <Box />
      <BottomTextWrapper>
        <Text color="black">계정이 없으신가요?</Text>
        <Text color="black"><Link href="/register" style={{ "textDecoration": "none", "color": "#FF833E" }}>회원가입</Link>하기</Text>
      </BottomTextWrapper>
    </Container>
  );
}