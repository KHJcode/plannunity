import styled from "styled-components";
import SecTitle from "../components/SecTitle";
import Bag from "../../public/images/bag.svg";
import Plane from "../../public/images/plane.svg";
import Car from "../../public/images/car.svg";
import Backpack from "../../public/images/backpack.svg";
import Etc from "../../public/images/etc.svg";

const Conatiner = styled.div`
  padding: 20px;
`

const CategoryItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  flex-shrink: 0;
`

const CategoryItem = styled.div`
  height: 100%;
  background: #F9F9F9;
  border: 1px solid #EDEDED;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CategoryName = styled.div`
  font-size: 12px;
  line-height: 15px;
  text-align: center;
`

const CategoryList = styled.div`
  width: 100%;
  height: 22.5vw;
  display: flex;
  gap: 2.5vw;
`

export default function SearchWithCategoryContainer() {
  return (
    <Conatiner>
      <SecTitle text="카테고리로 찾아보세요" />
      <CategoryList>
        <CategoryItemWrapper>
          <CategoryItem><Bag /></CategoryItem>
          <CategoryName>간단 여행</CategoryName>
        </CategoryItemWrapper>
        <CategoryItemWrapper>
          <CategoryItem><Plane /></CategoryItem>
          <CategoryName>해외 여행</CategoryName>
        </CategoryItemWrapper>
        <CategoryItemWrapper>
          <CategoryItem><Car /></CategoryItem>
          <CategoryName>국내 여행</CategoryName>
        </CategoryItemWrapper>
        <CategoryItemWrapper>
          <CategoryItem><Backpack /></CategoryItem>
          <CategoryName>배낭 여행</CategoryName>
        </CategoryItemWrapper>
        <CategoryItemWrapper>
          <CategoryItem><Etc /></CategoryItem>
          <CategoryName>기타</CategoryName>
        </CategoryItemWrapper>
      </CategoryList>
    </Conatiner>
  );
}