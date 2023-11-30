import * as S from './Right.style';
import {
  IcSmallStarRed,
  IcSmallstarGray,
  IcBookmarkDefault,
  IcMinus,
  IcArrowDropdown,
} from '../../assets/svgs/0_icons';
import { client } from '../../utils/api/axios';
import { useNavigate } from 'react-router-dom';

interface RightProps {
  brandName: string;
  itemName: string;
  price: number;
  itemId: number;
}

const Right = (props: RightProps) => {
  const { brandName, itemName, price, itemId } = props;

  const navigate = useNavigate();

  const handleAddCartButtonClick = async () => {
    try {
      const { data } = await client.put(`/cart/add`, {
        memberId: 1,
        itemId: itemId,
      });
      data && alert('카트에 상품이 추가되었습니다!');
    } catch (err) {
      console.log(err);
    }
  };

  const handlePurchaseButtonClick = () => {
    handleAddCartButtonClick();
    navigate(`/order/${itemId}`);
  };

  return (
    <S.RightContainer>
      <S.RightHeader>
        <S.BrandName>{brandName}</S.BrandName>
        <S.BookmarkWrapper>
          <IcBookmarkDefault />
          <S.BookmarkCount>813</S.BookmarkCount>
        </S.BookmarkWrapper>
      </S.RightHeader>

      <S.ItemTitle>{itemName}</S.ItemTitle>

      <S.PriceWrapper>
        <S.Price>{price}</S.Price>
        <S.CouponBtn type="button">쿠폰 받기</S.CouponBtn>
      </S.PriceWrapper>

      <S.RatingWrapper>
        <S.StarsWrapper>
          <IcSmallStarRed />
          <IcSmallStarRed />
          <IcSmallStarRed />
          <IcSmallStarRed />
          <IcSmallstarGray />
        </S.StarsWrapper>
        <S.RatingScoreWrapper>
          <S.RatingScore>4.9</S.RatingScore>
          <S.RatingScore>(87)</S.RatingScore>
        </S.RatingScoreWrapper>
      </S.RatingWrapper>

      <S.Option>
        <S.OptionHeader>
          <S.OptionTitle>추가 혜택</S.OptionTitle>
          <IcMinus />
        </S.OptionHeader>
        <S.OptionDetailWrapper className="benefit">
          <S.OptionDetail>한섬마일리지 1,160M 적립</S.OptionDetail>
          <S.OptionDetail>H.Point 58P 적립</S.OptionDetail>
        </S.OptionDetailWrapper>
      </S.Option>

      <S.Line />

      <S.Option className="delivery">
        <S.OptionHeader>
          <S.OptionTitle>배송 정보</S.OptionTitle>
          <IcMinus />
        </S.OptionHeader>
        <S.DeliveryText>배송비</S.DeliveryText>
        <S.OptionDetailWrapper className="delivery">
          <S.OptionDetail>30,000원 미만 결제 시 배송비 2,500원</S.OptionDetail>
          <S.OptionDetail>제주도를 포함한 도서/산간지역은 추가배송비 3,000원</S.OptionDetail>
        </S.OptionDetailWrapper>
      </S.Option>

      <S.DropBoxWrapper>
        <S.DropBox type="button">
          <S.DropBoxText>BLACK</S.DropBoxText>
          <IcArrowDropdown />
        </S.DropBox>
        <S.DropBox type="button">
          <S.DropBoxText>사이즈</S.DropBoxText>
          <IcArrowDropdown />
        </S.DropBox>
      </S.DropBoxWrapper>

      <S.Line />

      <S.TotalPriceWrapper>
        <S.TotalPriceText>총 상품 금액</S.TotalPriceText>
        <S.TotalPrice>{price}</S.TotalPrice>
      </S.TotalPriceWrapper>

      <S.ButtonWrapper>
        <S.Button type="button" className="cart" onClick={handleAddCartButtonClick}>
          장바구니에 담기
        </S.Button>
        <S.Button type="button" className="order" onClick={handlePurchaseButtonClick}>
          바로 구매하기
        </S.Button>
      </S.ButtonWrapper>
    </S.RightContainer>
  );
};

export default Right;
