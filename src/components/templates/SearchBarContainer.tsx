import { useState } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";

type SearchBarContainerType = {
  searchType: string;
};

const Container = styled.div`
  width: 100%;
  padding: 0 20px 10px 20px;
`;

export default function SearchBarContainer({
  searchType,
}: SearchBarContainerType) {
  const [searchText, setSearchText] = useState("");
  return (
    <Container>
      <SearchBar
        text={searchText}
        setText={setSearchText}
        searchType={searchType}
      />
    </Container>
  );
}
