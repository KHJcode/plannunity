import styled from "styled-components";
import LoginMainText from "../components/LoginMainText";
import Logo from "../../public/images/logo.svg";
import LoginButton from "../components/LoginButton";
import { useRouter } from "next/router";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  height: 100vh;
  width: 100%;
  height: 100vh;
  background: #FFFFFF;
  gap: 35px;
`

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const Text = styled.div`
  font-size: 15px;
  color: #AEAEAE;
  margin-top: -9px;
`

export default function WelcomeContainer() {
  const router = useRouter();
  const onClick = () => {
    router.push("/login");
  }
  return (
    <Container>
      <TopWrapper>
        <Logo />
        <LoginMainText text1="당신의 여행을" text2="플래뮤니티로 채우세요" />
        <Text>지금 시작해보세요!</Text>
      </TopWrapper>
      <LoginButton text="지금 시작하기" onClickNextButton={onClick} />
    </Container>
  );
}