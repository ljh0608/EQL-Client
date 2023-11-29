import * as S from './Order.style';

import BreadCrumb from '../../components/order/BreadCrumb/BreadCrumb';
import Coupon from '../../components/order/Coupon/Coupon';
import DeliveryInfo from '../../components/order/DeliveryInfo/DeliveryInfo';
import Notice from '../../components/order/Notice/Notice';
import OrderProductInfo from '../../components/order/OrderProductInfo/OrderProductInfo';
import PaymentMethod from '../../components/order/PaymentMethod/PaymentMethod';

const Order = () => {
  return (
    <S.OrderWrapper>
      <BreadCrumb />
      <DeliveryInfo />
      <OrderProductInfo />
      <Coupon />
      <Notice />
      <PaymentMethod />
    </S.OrderWrapper>
  );
};

export default Order;
 