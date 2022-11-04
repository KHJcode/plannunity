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
  height: 165px;
  position: relative;
`

export default function ParallelContentList() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '-30px',
    initialSlide: 1,
    swipeToSlide: true,
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
      </Slider>
    </Container>
  );
}