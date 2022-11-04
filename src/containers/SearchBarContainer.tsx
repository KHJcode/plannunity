import styled from "styled-components";
import SearchBar from "../components/SearchBar";

const Container = styled.div`
  width: 100%;
  padding: 0 20px 30px 20px;
`

export default function SearchBarContainer() {
  return (
    <Container>
      <SearchBar />
    </Container>
  );
}