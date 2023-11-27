import * as S from './OrderHeader.style';

type OrderHeaderType = {
  children: string;
};
const OrderHeader = ({ children }: OrderHeaderType) => {
  return (
    <S.OrderHeaderContainer>
      <S.HeaderTitle>{children}</S.HeaderTitle>
      <S.HeaderUnderline />
    </S.OrderHeaderContainer>
  );
};

export default OrderHeader;
