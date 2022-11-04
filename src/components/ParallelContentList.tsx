import styled from "styled-components";
import ParallelContentItem from "./ParallelContentItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  height: 165px;
  width: 100%;
`

const ItemWrapper = styled.div`
  width: 200px !important;
  height: 165px !important;
  position: relative;
  margin-left: 20px;

  & + & {
    margin-left: 10px;
  }
`

export default function ParallelContentList() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 1,
    swipeToSlide: true,
    variableWidth: true,
  };
  return (
    <Container>
      <Slider {...settings}>
        <ItemWrapper>
          <ParallelContentItem />
        </ItemWrapper>
        <ItemWrapper>
          <ParallelContentItem />
        </ItemWrapper>
        <ItemWrapper>
          <ParallelContentItem />
        </ItemWrapper>
         <ItemWrapper>
          <ParallelContentItem />
        </ItemWrapper>
        {/* <div style={{ width: 100 }}>1</div>
        <div style={{ width: 100 }}>2</div>
        <div style={{ width: 100 }}>3</div> */}
      </Slider>
    </Container>
  );
}