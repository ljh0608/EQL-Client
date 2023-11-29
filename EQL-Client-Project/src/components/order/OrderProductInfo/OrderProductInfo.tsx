import * as S from './OrderProductInfo.style';

import LightHr from '../LightHr/LightHr';
import OrderHeader from '../OrderHeader/OrderHeader';
import Spacing from '../../common/spacing/Spacing';
import { regPrice } from '../../../utils/regPrice';

type OrderProductInfoTypes = {
  itemInfo: {
    totalItemsAmount: number;
    totalItemsPrice: number;
    itemSummaries: {
      itemId: number;
      amount: number;
      itemName: string;
      brandName: string;
      totalItemPrice: number;
    }[];
  };
};
const OrderProductInfo = ({ itemInfo }: OrderProductInfoTypes) => {
  const { totalItemsAmount, totalItemsPrice, itemSummaries } = itemInfo;

  return (
    <S.OrderWrapper>
      <OrderHeader orderCount={totalItemsAmount}>주문 상품 정보</OrderHeader>
      <S.OrderInfoWrapper>
        <S.TempImgDiv></S.TempImgDiv>
        <S.OrderInfoContiner>
          <S.BrandText>{itemSummaries[0].brandName}</S.BrandText>
          <S.Body7>[11/08(수) 예약배송] {itemSummaries[0].itemName} (BLACK)</S.Body7>
          <Spacing $spacing={'1.2'}></Spacing>
          <S.FlexColumnBox>
            <S.Body8>옵션</S.Body8>
            <S.Body9>BLACK / M</S.Body9>
          </S.FlexColumnBox>
          <Spacing $spacing={'0.5'}></Spacing>
          <S.FlexColumnBox>
            <S.Body8>수량 </S.Body8>
            <S.Body9>{totalItemsAmount}개</S.Body9>
          </S.FlexColumnBox>
          <Spacing $spacing={'1.4'}></Spacing>
          <S.PriceWrapper>
            <S.Body8>가격</S.Body8>
            <S.Price>{regPrice(totalItemsPrice)}</S.Price>
          </S.PriceWrapper>
        </S.OrderInfoContiner>
      </S.OrderInfoWrapper>
      <LightHr />
    </S.OrderWrapper>
  );
};

export default OrderProductInfo;
