import { useEffect, useState } from "react";
import styled from "styled-components";

type SearchBarType = {
  text: string;
  setText: ($: string) => void;
  searchType: string;
  onClick: () => void;
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
  min-height: 50px !important;
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
  onClick,
}: SearchBarType) {
  const [placeholder, setPlaceHolder] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    console.log(text);
  };

  useEffect(() => {
    if(searchType === "plan") {
      setPlaceHolder("관심있는 플랜을 검색해보세요");
    } else if(searchType === "address") {
      setPlaceHolder("예)용산구 청파동 선린인터넷고등학교");
    } else {
      setPlaceHolder("새로운 친구를 찾아보세요");
    }
  }, [])

  return (
    <Container>
      <Image src="images/search.svg" onClick={onClick} />
      <Input
        placeholder={placeholder}
        onChange={onChange}
        value={text}
      />
    </Container>
  );
}
