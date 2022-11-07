import styled from "styled-components";

type SearchBarType = {
  text: string;
  setText: ($: string) => void;
  searchType: string;
};

const Container = styled.div`
  height: 50px;
  width: 100%;
  background: #f9f9f9;
  border: 1px solid #ededed;
  border-radius: 12px;
  display: flex;
  gap: 12px;
  align-items: center;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  padding: 5px 10px 5px 55px;
  font-size: 15px;
  background: transparent;
  border-radius: 6px;
  font-family: "SUIT-500";

  &::placeholder {
    color: #bfbfbf;
  }
`;

const Image = styled.img`
  position: absolute;
  left: 17.5px;
`;

export default function SearchBar({
  text,
  setText,
  searchType,
}: SearchBarType) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    console.log(text);
  };

  const onClickSearchButton = () => {};

  return (
    <Container>
      <Image src="images/search.svg" onClick={onClickSearchButton} />
      <Input
        placeholder="관심있는 플랜을 검색해보세요"
        onChange={onChange}
        value={text}
      />
    </Container>
  );
}
