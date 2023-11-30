import * as S from './PaymentInfo.style';

import { IcArrowDown } from '../../../assets/svgs/0_icons';
import { IcOrderCheckboxPayment } from '../../../assets/svgs/0_icons';
import Spacing from '../../common/spacing/Spacing';

const PaymentInfo = () => {
  return (
    <S.PaymentInfoWrapper>
      <S.PaymentInfoContainer>
        <S.PayMentInfoTitle>결제정보</S.PayMentInfoTitle>
        <Spacing $spacing="1.8" />
        <S.PayMentUnderLine />
        <Spacing $spacing="3.7" />
        <S.PaymentTopWrapper>
          <S.PaymentTextWrapper>
            <S.PaymentTextKey>총 상품금액</S.PaymentTextKey>
            <S.PaymentTextValue>58,000원</S.PaymentTextValue>
          </S.PaymentTextWrapper>
          <S.PaymentTextWrapper>
            <S.PaymentTextKey>총 배송비</S.PaymentTextKey>
            <S.PaymentTextValue>+ 3,000원</S.PaymentTextValue>
          </S.PaymentTextWrapper>
        </S.PaymentTopWrapper>
        <Spacing $spacing="1.9" />

        <S.LightHrCompCustom />
        <S.PaymentMiddleWrapper>
          <S.PaymentTextWrapper>
            <S.PaymentTextKey>총 즉시할인금액</S.PaymentTextKey>
            <S.PaymentTextValue>- 0원</S.PaymentTextValue>
          </S.PaymentTextWrapper>
          <S.PaymentTextWrapper>
            <S.PaymentTextKey>총 쿠폰할인금액</S.PaymentTextKey>
            <S.PaymentTextValue>- 0원</S.PaymentTextValue>
          </S.PaymentTextWrapper>
          <S.PaymentTextWrapper>
            <S.PaymentTextKey>H.Point 사용</S.PaymentTextKey>
            <S.PaymentTextValue>- 0p</S.PaymentTextValue>
          </S.PaymentTextWrapper>
          <S.PaymentTextWrapper>
            <S.PaymentTextKey>한섬마일리지 사용</S.PaymentTextKey>
            <S.PaymentTextValue>- 0M</S.PaymentTextValue>
          </S.PaymentTextWrapper>
        </S.PaymentMiddleWrapper>

        <S.LightHrCompCustom />
        <Spacing $spacing="2.2" />
        <S.PaymentTextWrapper>
          <S.FinalFeeText>총 결제 금액</S.FinalFeeText>
          <S.FinalFeeText>61,000원</S.FinalFeeText>
        </S.PaymentTextWrapper>
        <Spacing $spacing="3.4" />
        <S.AgreeTermContainer>
          <S.AgreeTermWrapper>
            <IcOrderCheckboxPayment />
            주문 약관 동의
          </S.AgreeTermWrapper>
          <IcArrowDown />
        </S.AgreeTermContainer>
        <Spacing $spacing="5.2" />
      </S.PaymentInfoContainer>
      <S.PaymentBtn>61,000원 결제하기</S.PaymentBtn>
    </S.PaymentInfoWrapper>
  );
};

export default PaymentInfo;
