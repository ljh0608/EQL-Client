import * as S from './Order.style';

import BreadCrumb from '../../components/order/BreadCrumb/BreadCrumb';
import Coupon from '../../components/order/Coupon/Coupon';
import DeliveryInfo from '../../components/order/DeliveryInfo/DeliveryInfo';
import Notice from '../../components/order/Notice/Notice';
import OrderProductInfo from '../../components/order/OrderProductInfo/OrderProductInfo';
import PaymentInfo from '../../components/order/PaymentInfo/PaymentInfo';
import PaymentMethod from '../../components/order/PaymentMethod/PaymentMethod';

const Order = () => {
  return (
    <S.OrderWrapper>
      <BreadCrumb />
      <S.OrderContainer>
        <S.OrderLayout>
          <DeliveryInfo />
          <OrderProductInfo />
          <Coupon />
          <Notice />
          <PaymentMethod />
        </S.OrderLayout>
        <PaymentInfo />
      </S.OrderContainer>
    </S.OrderWrapper>
  );
};

export default Order;
