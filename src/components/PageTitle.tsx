import styled from "styled-components";

const Container = styled.span`
  font-size: 22px;
  margin-left: 5px;
  line-height: 24px;
  font-family: 'SUIT-700';
`

type PageTitleProps = {
  text: string;
}

export default function PageTitle({ text }: PageTitleProps) {
  return (
    <Container>{text}</Container>
  );
}