import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type ImageCarouselViewProps = {
  schdules: any[];
};

const Container = styled.div``;

const ItemWrapper = styled.div``;

const CarouselItem = styled.div<{ url: string }>`
  width: 100vw;
  height: 320px;
  background: linear-gradient(
      180deg,
      rgba(180, 180, 180, 0.26) 73.28%,
      rgba(0, 0, 0, 0.58) 100%
    ),
    url(${(props) =>
      props.url
        ? props.url
        : "https://cdn.pixabay.com/photo/2017/10/26/19/45/red-2892235_1280.png"});
  background-size: cover !important;
  margin: 0px;
`;

export default function ImageCarouselView({
  schdules,
}: ImageCarouselViewProps) {
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
        {schdules.map(
          (schdule: any) =>
            schdule.img && (
              <ItemWrapper key={schdule.seq}>
                <CarouselItem url={schdule.img.thumbnail} />
              </ItemWrapper>
            )
        )}
      </Slider>
    </Container>
  );
}
