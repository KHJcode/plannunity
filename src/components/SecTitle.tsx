import styled from "styled-components";

const Container = styled.span`
  font-size: 20px;
  margin-bottom: 20px;
  margin-left: 5px;
  padding-left: 20px;
`

type SecTitleType = {
  text: string;
}

export default function SecTitle({ text }: SecTitleType) {
  return (
    <Container>{text}</Container>
  );
}