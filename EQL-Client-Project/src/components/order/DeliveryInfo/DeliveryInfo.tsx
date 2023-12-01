import * as S from './DeliveryInfo.style';

import { IcArrowDown } from '../../../assets/svgs/0_icons';
import LightHr from '../LightHr/LightHr';
import OrderHeader from '../OrderHeader/OrderHeader';
import Spacing from '../../common/spacing/Spacing';

type DeliveryInfo = {
  memberName: string;
  phoneNumber: string;
  address: string;
  postalCode: number;
};
const DeliveryInfo = ({ memberName, phoneNumber, address, postalCode }: DeliveryInfo) => {
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
          <S.DescriptionText>
            {memberName} / {phoneNumber}
          </S.DescriptionText>
          <Spacing $spacing={'0.7'}></Spacing>
          <S.DescriptionText>{address}</S.DescriptionText>
          <Spacing $spacing={'0.4'}></Spacing>
          <S.ZipCode>(우편번호 : {postalCode})</S.ZipCode>
          <Spacing $spacing={'1.8'}></Spacing>
          <S.SelectBox>
            <S.SelectBoxText>배송 요청사항 선택</S.SelectBoxText>
            <IcArrowDown />
          </S.SelectBox>
        </S.DeliveryInfoSection>
      </S.DeliveryInfoContainer>
      <LightHr />
    </S.DeliveryInfoWrapper>
  );
};

export default DeliveryInfo;
