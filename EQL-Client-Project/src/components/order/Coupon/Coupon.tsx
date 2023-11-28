import * as S from './Coupon.style';

import OrderHeader from '../OrderHeader/OrderHeader';

const Coupon = () => {
  return (
    <S.CouponWrapper>
      <OrderHeader>쿠폰/마일리지</OrderHeader>
      <S.CouponContainer>
        <S.CouponBox>
          <S.CouponHeadText>쿠폰</S.CouponHeadText>
          <S.CouponSelectWrapper>
            <S.TextInput placeholder="0" readOnly $readonly={true} />
            <S.SelectBtn type="button" $usable={true}>
              쿠폰 선택{' '}
            </S.SelectBtn>
          </S.CouponSelectWrapper>
          <S.CouponDescription>적용 가능 4장</S.CouponDescription>
        </S.CouponBox>
        <S.CouponBox>
          <S.CouponHeadText>H.Point</S.CouponHeadText>
          <S.CouponSelectWrapper>
            <S.TextInput placeholder="0" readOnly $readonly={true} />
            <S.SelectBtn type="button" $usable={false}>
              모두 사용{' '}
            </S.SelectBtn>
          </S.CouponSelectWrapper>
          <S.CouponDescription>보유 : 28P</S.CouponDescription>
        </S.CouponBox>
        <S.CouponBox>
          <S.CouponHeadText>한섬마일리지</S.CouponHeadText>
          <S.CouponSelectWrapper>
            <S.TextInput placeholder="0" $readonly={false} />
            <S.SelectBtn type="button" $usable={true}>
              모두 사용{' '}
            </S.SelectBtn>
          </S.CouponSelectWrapper>
          <S.CouponDescription>보유 : 280M</S.CouponDescription>
        </S.CouponBox>
      </S.CouponContainer>
    </S.CouponWrapper>
  );
};

export default Coupon;
