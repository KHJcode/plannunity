import styled from "styled-components";
import SecTitle from "../templates/SecTitle";
import Etc from "../../../public/images/etc.svg";

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

const categoryList = ["맛집", "카페", "관광", "힐링", "쇼핑", "도시", "자연", "도보", "자전거", "대중교통"];

export default function SearchWithCategoryContainer() {
  const onClick = () => {

  }
  return (
    <Conatiner>
      <SecTitle text="카테고리로 찾아보세요" />
      <CategoryList>
        {categoryList.map(data => (
          <CategoryItemWrapper onClick={onClick} key={data}>
           <CategoryItem><Etc /></CategoryItem>
           <CategoryName>{data}</CategoryName>
          </CategoryItemWrapper>
        ))}
      </CategoryList>
    </Conatiner>
  );
}