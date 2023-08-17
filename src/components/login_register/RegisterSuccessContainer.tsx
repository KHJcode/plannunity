import styled from "styled-components";
import LoginMainText from "./LoginMainText";
import Logo from "../../../public/images/logo.svg";
import LoginButton from "./LoginButton";
import { useRouter } from "next/router";

type RegisterSuccessContainerType = {
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
  z-index: 998;
  background: #FFFFFF;
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity .75s, ${props => props.visible ? "transform .75s" : ""};
  transform: ${props => props.visible ? "translateY(0)" : "translateY(50px)"};
`

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 40px;
`

export default function RegisterSuccessContainer({ visible, setVisible }: RegisterSuccessContainerType) {
  const router = useRouter();
  const onClick = () => {
    setVisible([false, false, false]);
    router.push("/");
  }

  return (
    <Container visible={visible[2]}>
      <TopWrapper>
        <Logo />
        <LoginMainText text1="가입 완료! 이제" text2="플랜 생활을 시작해보세요!" />
      </TopWrapper>
      <LoginButton text="시작하기" onClick={onClick} />
    </Container>
  );
}
