import * as S from './DeliveryInfo.style';

import { IcArrowDown } from '../../../assets/svgs/0_icons';
import LightHr from '../LightHr/LightHr';
import OrderHeader from '../OrderHeader/OrderHeader';
import Spacing from '../../common/spacing/Spacing';

const DeliveryInfo = () => {
  return (
    <S.DeliveryInfoWrapper>
      <OrderHeader>배송 정보</OrderHeader>
      <S.DeliveryInfoContainer>
        <S.DeliveryInfoTitle>배송지</S.DeliveryInfoTitle>
        <S.DeliveryInfoSection>
          <S.DeliveryInfoBox>
            <S.DefaultAddressInfo>기본 배송지</S.DefaultAddressInfo>
            <S.ChangeAddress>배송지 변경</S.ChangeAddress>
          </S.DeliveryInfoBox>
          <Spacing $spacing={'0.9'}></Spacing>
          <S.DescriptionText>유효진/010-1234-5678</S.DescriptionText>
          <Spacing $spacing={'0.7'}></Spacing>
          <S.DescriptionText>서울 서대문구 창천동 쓰리알 유시티 611호</S.DescriptionText>
          <Spacing $spacing={'0.4'}></Spacing>
          <S.ZipCode>(우편번호 : 03785)</S.ZipCode>
          <Spacing $spacing={'1.8'}></Spacing>
          <S.SelectBox>
            <S.SelectBoxText>배송 요청사항 선택</S.SelectBoxText>
            <IcArrowDown />
          </S.SelectBox>
        </S.DeliveryInfoSection>
      </S.DeliveryInfoContainer>
      <LightHr></LightHr>
    </S.DeliveryInfoWrapper>
  );
};

export default DeliveryInfo;
