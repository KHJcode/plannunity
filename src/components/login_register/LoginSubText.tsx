import styled from "styled-components";

type LoginSubTextType = {
  text: string;
}

const Container = styled.div`
  font-size: 18px;
  line-height: 20px;
  margin-bottom: 20px;
`

export default function LoginSubText({ text }: LoginSubTextType) {
  return (
    <Container>{text}</Container>
  );
}