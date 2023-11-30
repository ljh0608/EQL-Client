import * as S from './Content.style';
import { IcArrowGrayLeft, IcArrowBlackRight } from '../../../../assets/svgs/0_icons';
const Content = () => {
  return (
    <>
      <S.ContentContainer>
        <S.ContentText>CONTENT</S.ContentText>
        <S.ContentIcLeft>
          <IcArrowGrayLeft />
        </S.ContentIcLeft>
        <S.ContentIcRight>
          <IcArrowBlackRight />
        </S.ContentIcRight>
      </S.ContentContainer>
    </>
  );
};

export default Content;
