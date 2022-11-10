import styled from "styled-components";
import LoginButton from "../components/LoginButton";
import LoginInput from "../components/LoginInput";
import LoginSubText from "../components/LoginSubText";
import Logo from "../../public/images/logo.svg";
import LoginMainText from "../components/LoginMainText";
import { useEffect, useState } from "react";
import { createUser } from "../firebase/auth";
import { useDispatch } from "react-redux";
import { setLogin } from "../modules/userInfo";
import Link from "next/link";

type RegisterFormContainerType = {
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
  height: 100vh;
  z-index: ${props => props.visible ? 1000 : 997};
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity .75s, ${props => props.visible ? "transform .75s" : ""};
  background: #FFFFFF;
  transform: ${props => props.visible ? "translateY(0)" : "translateY(50px)"};

  &:first-child {
    transition-delay: 1s;
  }
}
`

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 20px;
`

const ErrorMessage = styled.div<{ isActive: string }>`
  font-size: 15px;
  line-height: 20px;
  color: #ff2525;
  margin-bottom: 20px;
  display: ${props => props.isActive === "" ? "none" : "auto"};
`;

const Box = styled.div`
  height: 10px;
`

const BottomTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-top: 20px;
`;

const Text = styled.span<{ color: string }>`
  font-size: 15px;
  line-height: 19px;
  color: ${(props) =>
    props.color === "white"
      ? "#979797"
      : props.color === "orange"
      ? "#FF833E"
      : "#000000"};
`;

const InputWrapper = styled.div``;

export default function RegisterFormContainer({ visible, setVisible }: RegisterFormContainerType) {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => setVisible([true, false, false]), 100);
  }, []);

  const onClick = async () => {
    if(password !== confirmPassword) {
      setErrMsg("비밀번호가 일치하지 않습니다");
    } else {
        const data = await createUser(email, password, nickName);
        if(data.code) {
          console.log(data.code);
          switch (data.code) {
            case "auth/weak-password":
              setErrMsg("비밀번호가 너무 짧습니다");
              break;
            case "auth/invalid-email":
              setErrMsg("유효하지 않은 이메일입니다");
              break;
            case "auth/email-already-in-use":
              setErrMsg("이미 사용된 이메일입니다");
              break;
            default:
              setErrMsg("잘못된 요청입니다");
          };
        } else {
          // dispatch(setLogin(data.displayName!, data.email!, data.photoURL!))
          localStorage.setItem("name", data.displayName!);
          localStorage.setItem("email", data.email!);
          localStorage.setItem("imgURL", (data.imgURL ? data.imgURL! : "https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_1280.png"));
          setTimeout(() => setVisible([false, false, true]), 100);
        }
    }
  }

  const [email, setEmail] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  return (
    <Container visible={visible[0]}>
      <TopWrapper>
        <Logo />
        <LoginMainText text1="회원가입을 위한" text2="정보를 입력해주세요" />
      </TopWrapper>
      <FormWrapper>
        <InputWrapper>
          <LoginSubText text="이메일을 입력해주세요" />
          <LoginInput placeholder="이메일 주소 입력" text={email} setText={setEmail} inputType="text" />
        </InputWrapper>
        <InputWrapper>
          <LoginSubText text="닉네임을 입력해주세요" />
          <LoginInput placeholder="닉네임을 입력해주세요(10자 이내)" text={nickName} setText={setNickName} inputType="text" />
        </InputWrapper>
        <InputWrapper>
          <LoginSubText text="비밀번호를 입력해주세요" />
          <LoginInput placeholder="비밀번호를 입력해주세요(8자 이상)" text={password} setText={setPassword} inputType="password" />
          <Box />
          <LoginInput placeholder="비밀번호 확인" text={confirmPassword} setText={setConfirmPassword} inputType="password" />
        </InputWrapper>
      </FormWrapper>
      <ErrorMessage isActive={errMsg}>{errMsg}</ErrorMessage>
      <LoginButton text="회원가입" onClick={onClick} />
      <BottomTextWrapper>
        <Text color="black">계정이 이미 있으신가요?</Text>
        <Text color="black">
          <Link
            href="/login"
            style={{ textDecoration: "none", color: "#FF833E" }}
          >
            로그인
          </Link>
          하기
        </Text>
      </BottomTextWrapper>
    </Container>
  );
}