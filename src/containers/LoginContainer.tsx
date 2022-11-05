import InputBarContainer from "./InputBarContainer";
import styles from "../../styles/Page.module.css";
import styled from "styled-components";
import Logo from "../../public/images/logo.svg";
import ButtonTemplate from "../components/ButtonTemplate";

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LoginTitle = styled.div`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 40px;
  margin-bottom: 25px;
`;

const Container = styled.div`
  width: 100%;
  padding: 0 20px 30px 20px;
`;

export default function LoginContainer() {
  return (
    <PageContainer>
      <Container>
        <Logo />
      </Container>
      <Container>
        <LoginTitle>
          서비스 사용을 위해
          <br /> 계정에 로그인해주세요
        </LoginTitle>
      </Container>
      <InputBarContainer
        innerText="이메일 주소 입력"
        labelText="이메일을 입력해주세요"
      />

      <InputBarContainer
        innerText="비밀번호를 입력해주세요(8자리 이상)"
        labelText="비밀번호를 입력해주세요"
      />
      <Container></Container>

      <Container>
        <ButtonTemplate btnText="로그인" />
      </Container>
    </PageContainer>
  );
}
