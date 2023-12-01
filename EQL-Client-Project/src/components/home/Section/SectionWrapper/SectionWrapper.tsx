import * as S from './SectionWrapper.style';

import { IcBar, IcNext, IcPrevious } from '../../../../assets/svgs/0_icons';

import { ImgPost7 } from '../../../../assets/Images';

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
