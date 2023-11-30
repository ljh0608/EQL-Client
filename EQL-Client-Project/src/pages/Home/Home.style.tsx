import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const HomeView = styled.div`
  overflow-x: hidden;
  padding-bottom: 25.8rem;
`;
export const CarouselContainer = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  padding-bottom: 17.2rem;
`;
export const SliderBox = styled(Slider)`
  .slick-prev {
    position: absolute;
    z-index: 999;
    left: 6px;
    left: 2.4rem;

    width: 4.8rem;
    height: 4.8rem;
  }
  .slick-next {
    position: absolute;
    z-index: 999;
    right: 6px;
    right: 2.4rem;

    width: 4.8rem;
    height: 4.8rem;
  }
`;

export const CarouselImgWrapper = styled.img`
  width: 100%;
`;
export const CarouselLeftBox = styled.div`
  position: absolute;
  z-index: 998;
  top: 0;
  left: 0;

  width: 25%;
  height: 72.5%;

  background-color: rgba(0, 0, 0, 0.4);
`;
export const CarouselRightBox = styled.div`
  position: absolute;
  z-index: 998;
  top: 0;
  right: 0;

  width: 25%;
  height: 72.5%;

  background-color: rgba(0, 0, 0, 0.4);
`;
