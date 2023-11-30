type OtherPaymentMethodsType = {
  name: string;
  eventExist: boolean;
};
export const OtherPaymentMethods: OtherPaymentMethodsType[] = [
  {
    name: '신용카드',
    eventExist: false,
  },
  {
    name: '실시간 계좌이체',
    eventExist: false,
  },
  {
    name: '무통장결제',
    eventExist: false,
  },
  {
    name: '카카오페이',
    eventExist: false,
  },
  {
    name: '네이버페이',
    eventExist: false,
  },
  {
    name: '토스페이',
    eventExist: false,
  },
  {
    name: 'PAYCO',
    eventExist: true,
  },
];
