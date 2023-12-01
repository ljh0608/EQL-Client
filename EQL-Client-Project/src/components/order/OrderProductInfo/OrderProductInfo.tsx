import * as S from './OrderProductInfo.style';

import LightHr from '../LightHr/LightHr';
import OrderHeader from '../OrderHeader/OrderHeader';
import { PRODUCTIMGS } from '../../../constants/ProductImgs';
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
      getTotalItemPrice: number;
    }[];
  };
};
const OrderProductInfo = ({ itemInfo }: OrderProductInfoTypes) => {
  const { totalItemsAmount, itemSummaries } = itemInfo;
  console.log(itemInfo);
  return (
    <S.OrderWrapper>
      <OrderHeader orderCount={totalItemsAmount}>주문 상품 정보</OrderHeader>

      {itemSummaries.map((item, index) => {
        return (
          <S.OrderInfoWrapper key={index}>
            <S.TempImgDiv src={PRODUCTIMGS[item.itemId]} alt={item.itemName}></S.TempImgDiv>
            <S.OrderInfoContiner>
              <S.BrandText>{item.brandName}</S.BrandText>
              <S.Body7>[11/08(수) 예약배송] {item.itemName} (BLACK)</S.Body7>
              <Spacing $spacing={'1.2'}></Spacing>
              <S.FlexColumnBox>
                <S.Body8>옵션</S.Body8>
                <S.Body9>BLACK / M</S.Body9>
              </S.FlexColumnBox>
              <Spacing $spacing={'0.5'}></Spacing>
              <S.FlexColumnBox>
                <S.Body8>수량 </S.Body8>
                <S.Body9>{item.amount}개</S.Body9>
              </S.FlexColumnBox>
              <Spacing $spacing={'1.4'}></Spacing>
              <S.PriceWrapper>
                <S.Body8>가격</S.Body8>
                <S.Price>{regPrice(item.getTotalItemPrice)}</S.Price>
              </S.PriceWrapper>
              <Spacing $spacing={'2'}></Spacing>
              <LightHr />
            </S.OrderInfoContiner>
          </S.OrderInfoWrapper>
        );
      })}
    </S.OrderWrapper>
  );
};

export default OrderProductInfo;
