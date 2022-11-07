import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Container = styled.div`

`

const CarouselItem = styled.div`
  width: 100%;
  height: 320px;
  background: linear-gradient(180deg, rgba(180, 180, 180, 0.26) 73.28%, rgba(0, 0, 0, 0.58) 100%), url(https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_1280.png);
  background-size: 100% 320px;
`

export default function ImageCarouselView() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    initialSlide: 0,
    appendDots: (dots: any) => {
      return (
        <ul>
          {dots}
        </ul>
      )
    },
    dotsClass: 'dots-custom-1',
  };
  return (
    <Container>
      {/* <Slider {...settings}>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Slider> */}
      <CarouselItem />
    </Container>
  );
}