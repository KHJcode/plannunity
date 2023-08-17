import styled from "styled-components";
import LoginButton from "./LoginButton";
import LoginInput from "./LoginInput";
import LoginSubText from "./LoginSubText"
import Logo from "../../../public/images/logo.svg";
import LoginMainText from "./LoginMainText";
import CheckBox from "../../../public/images/check-square.svg";
import Link from "next/link";
import {useEffect, useState} from "react";
import {sign} from "../../firebase/auth";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
// import { setLogin } from "../../modules/userInfo";

const Container = styled.div<{ visible: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  height: 100vh;
  width: 100%;
  background: #ffffff;
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity .75s, ${props => props.visible ? "transform .75s" : ""};
  transform: ${props => props.visible ? "translateY(0)" : "translateY(50px)"};
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 50px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 20px;
`;

const ErrorMessage = styled.div<{ isActive: string }>`
  font-size: 15px;
  line-height: 20px;
  color: #ff2525;
  margin-bottom: 20px;
  display: ${props => props.isActive === "" ? "none" : "auto"};
`;

const PasswordOptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

const PasswordOptionLeftWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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

const Box = styled.div`
  height: 20px;
`;

const BottomTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
`;

export default function LoginFormContainer() {
    const [rememberPassword, setRememberPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [visible, setVisible] = useState(false);
    const router = useRouter();
    // const dispatch = useDispatch();

    useEffect(() => {
        const timeout = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timeout);
    }, []);

    const onClickSubmitButton = async () => {
        const data = await sign("email", email, password);
        if (data.code) {
            switch (data.code) {
                case "auth/user-not-found":
                    setErrMsg("계정을 찾을 수 없습니다");
                    break;
                case "auth/wrong-password":
                    setErrMsg("비밀번호를 다시 확인해주세요");
                    break;
                default:
                    setErrMsg("잘못된 요청입니다");
            }
        } else {
            localStorage.setItem("name", data.displayName!);
            localStorage.setItem("email", data.email!);
            localStorage.setItem("imgURL", data.imgURL || "illustration-4377408_1280.png");
            // dispatch(setLogin(data.displayName!, data.email!, data.photoURL!));
            router.push("/");
        }
    };

    return (
        <Container visible={visible}>
            <TopWrapper>
                <Logo/>
                <LoginMainText
                    text1="서비스 사용을 위해"
                    text2="계정에 로그인해주세요"
                />
            </TopWrapper>
            <FormWrapper>
                <InputWrapper>
                    <LoginSubText text="이메일을 입력해주세요"/>
                    <LoginInput
                        placeholder="이메일 주소 입력"
                        text={email}
                        setText={setEmail}
                        inputType="text"
                    />
                </InputWrapper>
                <InputWrapper>
                    <LoginSubText text="비밀번호를 입력해주세요"/>
                    <LoginInput
                        placeholder="비밀번호를 입력해주세요(8자 이상)"
                        text={password}
                        setText={setPassword}
                        inputType="password"
                    />
                </InputWrapper>
            </FormWrapper>
            <ErrorMessage isActive={errMsg}>{errMsg}</ErrorMessage>
            <PasswordOptionWrapper>
                <PasswordOptionLeftWrapper
                    onClick={() => setRememberPassword(!rememberPassword)}
                >
                    <CheckBox stroke={rememberPassword ? "#FF833E" : "#979797"}/>
                    <Text color={rememberPassword ? "orange" : "white"}>
                        비밀번호 기억하기
                    </Text>
                </PasswordOptionLeftWrapper>
                <Text color="orange">비밀번호 찾기</Text>
            </PasswordOptionWrapper>
            <LoginButton text="로그인" onClick={onClickSubmitButton}/>
            <Box/>
            <BottomTextWrapper>
                <Text color="black">계정이 없으신가요?</Text>
                <Text color="black">
                    <Link
                        href="/register"
                        style={{textDecoration: "none", color: "#FF833E"}}
                    >
                        회원가입
                    </Link>
                    하기
                </Text>
            </BottomTextWrapper>
        </Container>
    );
}
