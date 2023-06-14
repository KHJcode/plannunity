import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addCategory, CategoriesState } from "../../../../modules/category";
import { unsetActive } from "../../../../modules/isActive";
import EditAndCreateButton from "../../../templates/EditAndCreateButton";
import IconSVG from "../../../templates/IconSVG";

const Container = styled.div`
  background: #ffffff;
  padding: 25px;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 25px;
`;

const MainText = styled.div`
  font-size: 22px;
  line-height: 35px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const CategoryList = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 30px;
`

const CategoryItem = styled.div<{ clicked: boolean }>`
  height: 50px;
  padding: 15px 19px;
  background: ${props => props.clicked ? "#FFECE1" : "#F9F9F9"};
  color: ${props => props.clicked ? "#FF833E" : "#000000"};
  border: 1px solid #EDEDED;
  border-radius: 15px;
`

const categoryList = ["맛집", "카페", "관광", "힐링", "쇼핑", "도시", "자연", "자전거", "도보", "대중교통"];

export default function CategorySelectModal() {
  const dispatch = useDispatch();
  const [clickedIdx, setClickedIdx] = useState<boolean[]>([false, false, false, false, false, false, false, false, false, false]);

  const onClickCancelButton = () => {
    dispatch(unsetActive("categorySelect"));
  }

  const onClickCategoryItem = (idx: number) => {
    setClickedIdx(clickedIdx.map(($, i) => i === idx ? !clickedIdx[i] : clickedIdx[i]));
  }

  const onClickSubmitButton = () => {
    const selectedCategory: CategoriesState = [];
    clickedIdx.map((item: boolean, idx: number) => {
      item && selectedCategory.push(categoryList[idx]);
    });
    dispatch(unsetActive("categorySelect"));
    dispatch(addCategory(selectedCategory));
  }

  return (
    <Container>
      <TopWrapper>
        <MainText>추가하실 카테고리들을<br/>선택해주세요.(총 10개)</MainText>
        <IconSVG
          imageId="cancel"
          width={24}
          height={24}
          onClick={onClickCancelButton}
        />
      </TopWrapper>
      <CategoryList>
        {categoryList.map((category: string, idx: number) => (
          <CategoryItem key={idx} onClick={() => onClickCategoryItem(idx)} clicked={clickedIdx[idx]}>{category}</CategoryItem>
        ))}
      </CategoryList>
      <ButtonWrapper>
        <EditAndCreateButton text="해당 카테고리들 추가하기" btnColor="orange" onClick={onClickSubmitButton} />
      </ButtonWrapper>
    </Container>
  );
}