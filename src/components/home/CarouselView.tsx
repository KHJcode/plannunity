import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setActive } from "../../modules/isActive";

const Container = styled.div`
  height: 167px;
  width: 100%;
`

const ItemWrapper = styled.div`
  width: 100vw;
  padding: 0 5px;
`

const CarouselItem = styled.div`
  height: 167px;
  width: 100%;
  border-radius: 15px;
  border: 1px solid #EDEDED;
  background: #F9F9F9;
  padding: 20px;
  margin-right: 10px;
`

const SubText = styled.div`
  color: #818181;
  font-size: 10px;
  line-height: 15px;
  font-family: 'SUIT-500';
  margin-bottom: 5px;
`

const MainText = styled.div`
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 15px;
`

const Strong = styled.div`
  color: #FF833E;
`

const Button = styled.button`
  padding: 4px 9px;
  background: #FF833E;
  color: #FFFFFF;
  font-size: 10px;
  line-height: 16px;
  border-radius: 5px;
  border: none;
`

export default function CarouselView() {
  const router = useRouter();
  const dispatch = useDispatch();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20px',
    initialSlide: 1,
    appendDots: (dots: any) => {
      return (
        <ul>
          {dots}
        </ul>
      )
    },
    dotsClass: 'dots-custom-1',
  };

  const onClick = () => {
    dispatch(setActive("planEdit"));
    router.replace('/plan');
  }

  return (
    <Container> 
      <Slider {...settings}>
        <ItemWrapper>
          <CarouselItem />
        </ItemWrapper>
        <ItemWrapper>
          <CarouselItem>
            <SubText>플래뮤니티 이벤트</SubText>
            <MainText><Strong>플랜 만드시고,</Strong>포인트 받으세요!</MainText>
            <Button onClick={onClick}>지금 시작하기</Button>
          </CarouselItem>
        </ItemWrapper>
        <ItemWrapper>
          <CarouselItem />
        </ItemWrapper>
      </Slider>
    </Container>
  );
}