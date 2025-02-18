import { useEffect, useState } from "react";
import styled from "styled-components";
import IconSVG from "./IconSVG";

type SearchBarType = {
  text: string;
  setText: ($: string) => void;
  searchType: string;
  onClick: () => void;
};

const Container = styled.div<{ margin: boolean }>`
  height: 50px;
  background: #f9f9f9;
  border: 1px solid #ededed;
  border-radius: 12px;
  display: flex;
  gap: 12px;
  align-items: center;
  position: relative;
  min-height: 50px !important;
  margin: 0 ${(props) => props.margin && "20px"};
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  padding: 5px 10px 5px 55px;
  font-size: 15px;
  background: transparent;
  border-radius: 6px;
  font-weight: 500;

  &::placeholder {
    color: #bfbfbf;
  }
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
  };
  const searchTypeToPlaceholder = {
    "plan": "관심있는 플랜을 검색해보세요",
    "address": "예) 용산구 청파동 선린인터넷고등학교",
  };

  useEffect(() => {
    const placeholder = searchTypeToPlaceholder[searchType as "plan" | "address"];
    setPlaceHolder(placeholder ?? "새로운 친구를 찾아보세요");
  }, []);

  return (
    <Container margin={searchType === "plan"}>
      <IconSVG
        style={{ position: "absolute", left: "17.5px" }}
        imageId="search"
        width={20}
        height={20}
        stroke="#FF833E"
        strokeWidth={2}
        onClick={onClick}
      />
      <Input placeholder={placeholder} onChange={onChange} value={text} />
    </Container>
  );
}
