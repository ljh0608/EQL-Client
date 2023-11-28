import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { IcPrevious, IcNext } from '../../assets/svgs/0_icons';

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <St.CarouselBox {...settings}>
      <div>
        <St.CarouselImg src="../../src/assets/images/CarouselFirstImg.png"></St.CarouselImg>
      </div>
      <div>
        <St.CarouselImg src="../../src/assets/images/CarouselSecondImg.png"></St.CarouselImg>
      </div>
      <div>
        <St.CarouselImg src="../../src/assets/images/CarouselThirdImg.png"></St.CarouselImg>
      </div>
    </St.CarouselBox>
  );
};

const St = {
  CarouselBox: styled(Slider)`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 44.8rem;
  `,
  CarouselImg: styled.img`
    display: flex;
    justify-content: center;
    width: 65.9rem;
    height: 44.8rem;
  `,
};

export default Home;
