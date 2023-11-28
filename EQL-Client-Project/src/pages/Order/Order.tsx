import * as S from './Order.style';

import BreadCrumb from '../../components/order/BreadCrumb/BreadCrumb';
import Coupon from '../../components/order/Coupon/Coupon';
import DeliveryInfo from '../../components/order/DeliveryInfo/DeliveryInfo';
import OrderProductInfo from '../../components/order/OrderProductInfo/OrderProductInfo';

const Order = () => {
  return (
    <S.OrderWrapper>
      <BreadCrumb />
      <DeliveryInfo />
      <OrderProductInfo />
      <Coupon />
    </S.OrderWrapper>
  );
};

export default Order;
