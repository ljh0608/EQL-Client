import * as S from './Order.style';

import BreadCrumb from '../../components/order/BreadCrumb/BreadCrumb';
import DeliveryInfo from '../../components/order/DeliveryInfo/DeliveryInfo';
const Order = () => {
  return (
    <S.OrderWrapper>
      <BreadCrumb />
      <DeliveryInfo />
    </S.OrderWrapper>
  );
};

export default Order;
