import * as S from './OrderHeader.style';

type OrderHeaderType = {
  children: string;
  orderCount?: number;
};
const OrderHeader = ({ children, orderCount = 0 }: OrderHeaderType) => {
  return (
    <S.OrderHeaderContainer>
      <S.HeaderTitle>
        {children}
        {orderCount > 0 && ` (${orderCount}건)`}
      </S.HeaderTitle>
      <S.HeaderUnderline />
    </S.OrderHeaderContainer>
  );
};

export default OrderHeader;
