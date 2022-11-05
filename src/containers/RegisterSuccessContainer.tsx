import styled from "styled-components";
import LoginMainText from "../components/LoginMainText";
import Logo from "../../public/images/logo.svg";
import LoginButton from "../components/LoginButton";
import { useRouter } from "next/router";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  height: 100vh;
  width: 100%;
`

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 40px;
`

export default function RegisterSuccessContainer() {
  const router = useRouter();
  const onClick = () => {
    router.push("/");
  }

  return (
    <Container>
      <TopWrapper>
        <Logo />
        <LoginMainText text1="가입 완료! 이제" text2="플랜 생활을 시작해보세요!" />
      </TopWrapper>
      <LoginButton text="시작하기" onClickNextButton={onClick} />
    </Container>
  );
}