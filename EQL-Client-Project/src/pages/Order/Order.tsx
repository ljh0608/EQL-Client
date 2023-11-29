import * as S from './Order.style';

import { useEffect, useState } from 'react';

import BreadCrumb from '../../components/order/BreadCrumb/BreadCrumb';
import { ConsumerInfo } from '../../constants/ConsumerInfo';
import Coupon from '../../components/order/Coupon/Coupon';
import DeliveryInfo from '../../components/order/DeliveryInfo/DeliveryInfo';
import Notice from '../../components/order/Notice/Notice';
import OrderProductInfo from '../../components/order/OrderProductInfo/OrderProductInfo';
import PaymentInfo from '../../components/order/PaymentInfo/PaymentInfo';
import PaymentMethod from '../../components/order/PaymentMethod/PaymentMethod';
import { client } from '../../utils/api/axios';

type OrderFetch = {
  data: {
    consumerInfo: {
      memberName: string;
      phoneNumber: string;
      address: string;
      postalCode: number;
    };
    orderItemInfo: {
      totalItemsAmount: number;
      totalItemsPrice: number;
      itemSummaries: [
        {
          itemId: number;
          amount: number;
          itemName: string;
          brandName: string;
          totalItemPrice: number;
        },
      ][];
    };
  };
};
const Order = () => {
  const [res, setRes] = useState<OrderFetch>();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await client.get<OrderFetch>(`/order/1`);
        console.log(data);
        setRes(data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  // console.log(res.data.customInfo.memberName);
  return (
    <S.OrderWrapper>
      <BreadCrumb />
      <S.OrderContainer>
        <S.OrderLayout>
          {res && (
            <>
              {' '}
              <DeliveryInfo
                memberName={res.data.consumerInfo.memberName}
                phoneNumber={res.data.consumerInfo.phoneNumber}
                address={res.data.consumerInfo.address}
                postalCode={res.data.consumerInfo.postalCode}
              />
              <OrderProductInfo />
              <Coupon />
              <Notice />
              <PaymentMethod />
            </>
          )}
        </S.OrderLayout>
        <PaymentInfo />
      </S.OrderContainer>
    </S.OrderWrapper>
  );
};

export default Order;
