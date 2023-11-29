import * as S from './PaymentMethod.style';

import { IcCheckboxPayment } from '../../../assets/svgs/0_icons';
import { IcCheckboxPaymentChecked } from '../../../assets/svgs/0_icons';
import { IcOption } from '../../../assets/svgs/0_icons';
import { IcOrderCheckboxPayment } from '../../../assets/svgs/0_icons';
import { IcOrderCheckboxPaymentChecked } from '../../../assets/svgs/0_icons';
import LightHr from '../LightHr/LightHr';
import OrderHeader from '../OrderHeader/OrderHeader';
import { OtherPaymentMethods } from '../../../constants/OtherPaymentMethods';
import { useState } from 'react';

const PaymentMethod = () => {
  const [selectedPayment, setSelectedPayment] = useState(0);

  return (
    <S.PaymentMethodWrapper>
      <S.HeaderWrapper>
        <OrderHeader>결제 방법</OrderHeader>
        <S.SelectDefalutPaymentWrapper>
          <IcOrderCheckboxPayment></IcOrderCheckboxPayment>
          <S.DefaultPaymentText> 기본 결제수단으로 저장 </S.DefaultPaymentText>
        </S.SelectDefalutPaymentWrapper>
      </S.HeaderWrapper>
      <S.PaymentContainer>
        <S.HpointWrapper>
          <S.PaymentBox>
            <IcCheckboxPayment />
            <S.Body7>H.Point Pay 결제</S.Body7>
            <IcOption />
          </S.PaymentBox>
        </S.HpointWrapper>
        <LightHr />
        <S.OtherPaymentWrapper>
          <S.PaymentBox>
            <IcCheckboxPaymentChecked />
            <S.Body7>다른 결제 수단</S.Body7>
          </S.PaymentBox>
          <S.OtherPaymentContainer>
            {OtherPaymentMethods.map((item, index) => (
              <S.OtherPaymentSection key={index}>
                {item.eventExist && <S.IconOrderEventTag />}
                {selectedPayment === index && <S.IconOrderCheck />}
                <S.OtherPaymentBox
                  selected={selectedPayment === index}
                  onClick={() => setSelectedPayment(index)}
                >
                  {item.name}
                </S.OtherPaymentBox>
              </S.OtherPaymentSection>
            ))}
          </S.OtherPaymentContainer>
        </S.OtherPaymentWrapper>
        <S.CreditCardNoticeWrapper>
          <S.CreditCardNoticeTitle>신용카드 이용안내</S.CreditCardNoticeTitle>
          <S.CreditCardNoticeContainer>
            <S.CreditCardNoticeDot>•</S.CreditCardNoticeDot>
            <S.CreditCardNoticeText> 신용카드 할인 행사 안내</S.CreditCardNoticeText>
          </S.CreditCardNoticeContainer>
        </S.CreditCardNoticeWrapper>
        <LightHr />
      </S.PaymentContainer>
    </S.PaymentMethodWrapper>
  );
};

export default PaymentMethod;
