import { ImgPost10, ImgPost8, ImgPost9 } from '../../../../assets/images';
import * as S from './SectionLayout.style';

const SectionLayout = () => {
  return (
    <>
      <S.BottomContainer>
        <S.BottomWrapper>
          <S.BottomLayout>
            <S.BottomImg src={ImgPost8} />
            <S.BottomText>
              <S.BottomLeftHigh>WOMEN</S.BottomLeftHigh>
              <S.BottomLeftLow>디테일 포인트가 있는 후드 & 스웻</S.BottomLeftLow>
            </S.BottomText>
          </S.BottomLayout>

          <S.BottomLayout>
            <S.BottomImg src={ImgPost9} />
            <S.BottomText>
              <S.BottomCenterHigh>MEN</S.BottomCenterHigh>
              <S.BottomCenterLow>가볍고 보온성 좋은 점퍼</S.BottomCenterLow>
            </S.BottomText>
          </S.BottomLayout>

          <S.BottomLayout>
            <S.BottomImg src={ImgPost10} />
            <S.BottomText>
              <S.BottomRightHigh>ESSENTIAL BY EQL</S.BottomRightHigh>
              <S.BottomRightLow>에센셜한 캐시미어 블렌드 코트</S.BottomRightLow>
            </S.BottomText>
          </S.BottomLayout>
        </S.BottomWrapper>
      </S.BottomContainer>
    </>
  );
};

export default SectionLayout;
