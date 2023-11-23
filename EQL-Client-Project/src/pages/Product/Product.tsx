import * as S from './Product.style';
import { IcBookmarkDefault } from '../../assets/svgs/0_icons';
import { IcArrowBreadCrumb } from '../../assets/svgs/0_icons';
const Product = () => {
  return (
    <S.ProductContainer>
      <S.CategoryBar>
        <S.Category>우먼</S.Category>
        <IcArrowBreadCrumb />
        <S.Category>의류</S.Category>
        <IcArrowBreadCrumb />
        <S.Category className="selected">스웨트 셔츠 / 후디</S.Category>
      </S.CategoryBar>
      <S.MainContainer>
        <S.LeftContainer>dfdsdf</S.LeftContainer>
        <S.RightContainer>
          <S.SideHeader>
            <S.BrandName>MSCHF</S.BrandName>
            <S.BookmarkWrapper>
              <IcBookmarkDefault />
              <S.BookmarkCount>813</S.BookmarkCount>
            </S.BookmarkWrapper>
          </S.SideHeader>
          <S.ItemTitle>[11/08(수) 예약배송] RHOMBUS LONG SLEEVE (BLACK)</S.ItemTitle>
          <S.PriceWrapper>
            <S.Price>58,000</S.Price>
            <S.CouponBtn></S.CouponBtn>
          </S.PriceWrapper>
        </S.RightContainer>
      </S.MainContainer>
    </S.ProductContainer>
  );
};

export default Product;
