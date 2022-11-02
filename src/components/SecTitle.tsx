import styled from "styled-components";

const Container = styled.div`
  font-size: 20px;
  font-family: SUIT-600;
  margin-bottom: 20px;
  margin-left: 5px;
`

type SecTitleProps = {
  text: string;
}

export default function SecTitle({ text }: SecTitleProps) {
  return (
    <Container>{text}</Container>
  );
}