import * as S from './Banner.style';

const Banner = () => {
  return (
    <>
      <S.BannerContainer>
        <S.BannerWrapper>
          블랙위크 <S.BrandNameBox>1/30</S.BrandNameBox>
        </S.BannerWrapper>
        <S.BannerLayout>
          <S.BannerBox> 매일 11시 선착순 70% 쿠폰</S.BannerBox>
        </S.BannerLayout>
      </S.BannerContainer>
    </>
  );
};

export default Banner;
