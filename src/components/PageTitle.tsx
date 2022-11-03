import styled from "styled-components";

const Container = styled.span`
  font-size: 22px;
  margin-left: 5px;
  line-height: 24px;
`

type PageTitleProps = {
  text: string;
}

export default function PageTitle({ text }: PageTitleProps) {
  return (
    <Container>{text}</Container>
  );
}