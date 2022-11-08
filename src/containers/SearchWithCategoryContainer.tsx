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
  height: 62px;
  width: 62px;
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
  gap: 10px;
  overflow: scroll;
`

export default function SearchWithCategoryContainer() {
  return (
    <Conatiner>
      <SecTitle text="카테고리로 찾아보세요" />
      <CategoryList>
        <CategoryItemWrapper>
          <CategoryItem><Etc /></CategoryItem>
          <CategoryName>내 주변</CategoryName>
        </CategoryItemWrapper>
        <CategoryItemWrapper>
          <CategoryItem><Etc /></CategoryItem>
          <CategoryName>당일치기</CategoryName>
        </CategoryItemWrapper>
        <CategoryItemWrapper>
          <CategoryItem><Etc /></CategoryItem>
          <CategoryName>맛집</CategoryName>
        </CategoryItemWrapper>
        <CategoryItemWrapper>
          <CategoryItem><Etc /></CategoryItem>
          <CategoryName>대중교통만</CategoryName>
        </CategoryItemWrapper>
        <CategoryItemWrapper>
          <CategoryItem><Etc /></CategoryItem>
          <CategoryName>핫플레이스</CategoryName>
        </CategoryItemWrapper>
        <CategoryItemWrapper>
          <CategoryItem><Etc /></CategoryItem>
          <CategoryName>알찬</CategoryName>
        </CategoryItemWrapper>
        <CategoryItemWrapper>
          <CategoryItem><Etc /></CategoryItem>
          <CategoryName>힐링</CategoryName>
        </CategoryItemWrapper>
        <CategoryItemWrapper>
          <CategoryItem><Etc /></CategoryItem>
          <CategoryName>자연</CategoryName>
        </CategoryItemWrapper>
        <CategoryItemWrapper>
          <CategoryItem><Etc /></CategoryItem>
          <CategoryName>축제</CategoryName>
        </CategoryItemWrapper>
        <CategoryItemWrapper>
          <CategoryItem><Etc /></CategoryItem>
          <CategoryName>가성비</CategoryName>
        </CategoryItemWrapper>
        <CategoryItemWrapper>
          <CategoryItem><Etc /></CategoryItem>
          <CategoryName>럭셔리</CategoryName>
        </CategoryItemWrapper>
        <CategoryItemWrapper>
          <CategoryItem><Etc /></CategoryItem>
          <CategoryName>이색적인</CategoryName>
        </CategoryItemWrapper>
        <CategoryItemWrapper>
          <CategoryItem><Etc /></CategoryItem>
          <CategoryName>익스트림</CategoryName>
        </CategoryItemWrapper>
      </CategoryList>
    </Conatiner>
  );
}