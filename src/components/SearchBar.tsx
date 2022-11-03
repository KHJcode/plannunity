import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  width: 100%;
  background: #F9F9F9;
  border: 1px solid #EDEDED;
  border-radius: 12px;
  padding: 0px 0px 0px 15px;
  display: flex;
  gap: 12px;
  align-items: center;
`

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  padding: 5px 10px;
  font-size: 15px;
  background: transparent;
  border-radius: 0 6px 6px 0;
  font-family: 'SUIT-500';

  &::placeholder {
    color: #BFBFBF;
  }
`

export default function SearchBar() {
  return (
    <Container>
      <img src="images/search.svg" />
      <Input placeholder="관심있는 플랜을 검색해보세요" />
    </Container>
  );
}