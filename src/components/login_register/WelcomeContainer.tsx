import styled from "styled-components";
import LoginMainText from "./LoginMainText";
import Logo from "../../../public/images/logo.svg";
import LoginButton from "./LoginButton";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

const Container = styled.div<{ visible: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px 20px 50px 20px;
  height: 100vh;
  width: 100%;
  background: #FFFFFF;
  gap: 35px;
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity .75s, ${props => props.visible ? "transform .75s" : ""};
  transform: ${props => props.visible ? "translateY(0)" : "translateY(50px)"};
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
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timeout);
    }, []);

    const onClick = () => {
        router.push("/login");
    };

    return (
        <Container visible={visible}>
            <TopWrapper>
                <Logo/>
                <LoginMainText text1="당신의 여행을" text2="플래뮤니티로 채우세요"/>
                <Text>지금 시작해보세요!</Text>
            </TopWrapper>
            <LoginButton text="지금 시작하기" onClick={onClick}/>
        </Container>
    );
}
