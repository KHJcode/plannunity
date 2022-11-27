import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div``;

const ItemWrapper = styled.div``;

const CarouselItem = styled.div`
  width: 100vw;
  height: 320px;
  background: linear-gradient(
      180deg,
      rgba(180, 180, 180, 0.26) 73.28%,
      rgba(0, 0, 0, 0.58) 100%
    ),
    url(https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_1280.png);
  background-size: 100vw 320px !important;
  margin: 0px;
`;

export default function ImageCarouselView() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    appendDots: (dots: any) => {
      return <ul>{dots}</ul>;
    },
    dotsClass: "dots-custom-2",
  };
  return (
    <Container>
      <Slider {...settings}>
        <ItemWrapper>
          <CarouselItem />
        </ItemWrapper>
        <ItemWrapper>
          <CarouselItem />
        </ItemWrapper>
        <ItemWrapper>
          <CarouselItem />
        </ItemWrapper>
      </Slider>
    </Container>
  );
}
