import * as S from './Home.style';

import { CarouselFirstImg, CarouselSecondImg, CarouselThirdImg } from '../../assets/Images';
import { IcNext, IcPrevious } from '../../assets/svgs/0_icons';

import BannerContainer from '../../components/home/Banner/Banner';
import Content from '../../components/home/Content/ContentContainer/Content';
import ContentWrapper from '../../components/home/Content/ContentWrapper/ContentWrapper';
import SectionContainer from '../../components/home/Section/SectionContainer/SectionContainer';
import SectionLayout from '../../components/home/Section/SectionLayout/SectionLayout';
import SectionWrapper from '../../components/home/Section/SectionWrapper/SectionWrapper';

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    nextArrow: <IcNext />,
    prevArrow: <IcPrevious />,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '25%',
  };

  return (
    <S.HomeView>
      <S.CarouselContainer>
        <S.SliderBox {...settings}>
          <div>
            <S.CarouselImgWrapper src={CarouselFirstImg} alt="LeftImg" />
          </div>
          <div>
            <S.CarouselImgWrapper src={CarouselSecondImg} alt="MainImg" />
          </div>
          <div>
            <S.CarouselImgWrapper src={CarouselThirdImg} alt="RightImg" />
          </div>
        </S.SliderBox>

        <BannerContainer />
      </S.CarouselContainer>

      <Content />
      <ContentWrapper />
      <SectionContainer />
      <SectionWrapper />
      <SectionLayout />
    </S.HomeView>
  );
}
