import * as S from './SectionWrapper.style';
import { ImgPost7 } from '../../../../assets/images';
import { IcBar, IcNext, IcPrevious } from '../../../../assets/svgs/0_icons';

const SectionWrapper = () => {
  return (
    <>
      <S.SectionWrapper>
        <S.NextImgBox>
          <IcNext />
        </S.NextImgBox>
        <S.ExampleImg src={ImgPost7} />
        <S.ImgLayout>
          <S.LayoutText>DIAGONAL</S.LayoutText>
          <S.LayoutBox>
            <IcBar />
          </S.LayoutBox>
          <S.LayoutText>23FW 단독 할인</S.LayoutText>
        </S.ImgLayout>
        <S.PrevImgBox>
          <IcPrevious />
        </S.PrevImgBox>
      </S.SectionWrapper>
    </>
  );
};

export default SectionWrapper;
