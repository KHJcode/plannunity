import styled from "styled-components";
import SecTitle from "../components/SecTitle";

const Conatiner = styled.div`
  padding: 20px;
`

const CategoryItem = styled.div`
  width: 20vw;
  height: 100%;
  background: #F9F9F9;
  border: 1px solid #EDEDED;
  border-radius: 15px;
`

const CategoryList = styled.div`
  width: 100%;
  height: 16vw;
  display: flex;
  gap: 2.5vw;
`

export default function SearchWithCategoryContainer() {
  return (
    <Conatiner>
      <SecTitle text="카테고리로 찾아보세요" />
      <CategoryList>
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </CategoryList>
    </Conatiner>
  );
}