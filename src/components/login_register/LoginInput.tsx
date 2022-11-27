import styled from "styled-components";

type LoginInputType = {
  placeholder: string;
  text: string;
  setText: ($: string) => void;
  inputType: string;
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

export default function LoginInput({ placeholder, text, setText, inputType }: LoginInputType) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  return (
    <Container placeholder={placeholder} type={inputType} onChange={onChange} value={text} />
  );  
}