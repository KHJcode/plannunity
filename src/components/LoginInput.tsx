import styled from "styled-components";

type LoginInputType = {
  placeholder: string;
}

const Container = styled.input`
  width: 100%;
  height: 50px;
  padding: 15px;
  font-size: 15px;
  font-family: 'SUIT-500';
  background: #F6F6F6;
  border: none;
  border-radius: 15px;

  &::placeholder {
    color: #979797;
  }
`

export default function LoginInput({ placeholder }: LoginInputType) {
  return (
    <Container placeholder={placeholder} />
  );  
}