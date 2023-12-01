import { IcOrderCheck } from '../../../assets/svgs/0_icons';
import { IcOrderEventTag } from '../../../assets/svgs/0_icons';
import styled from 'styled-components';

export const IconOrderCheck = styled(IcOrderCheck)`
  position: absolute;
  top: 1.3rem;
  right: 1.5rem;
`;

export const PaymentMethodWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 76.2rem;
`;

export const HeaderWrapper = styled.div`
  position: relative;
`;

export const SelectDefalutPaymentWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 0;

  display: flex;
  gap: 0.9rem;
  align-items: center;
  justify-content: center;

  width: 17.7rem;
`;

export const DefaultPaymentText = styled.p`
  ${({ theme }) => theme.fonts.body9};

  color: ${({ theme }) => theme.colors.black};
`;
export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HpointWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 6.5rem;
`;

export const Body7 = styled.p`
  ${({ theme }) => theme.fonts.body7};
`;

export const PaymentBox = styled.div`
  display: flex;
  gap: 0.9rem;
  align-items: center;
`;
export const OtherPaymentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 19.4rem;
  padding-top: 1.9rem;
  padding-bottom: 2.6rem;
`;

export const CreditCardNoticeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  height: 8.7rem;
  padding-bottom: 2.4rem;
`;
export const CreditCardNoticeTitle = styled.p`
  ${({ theme }) => theme.fonts.body5};

  color: ${({ theme }) => theme.colors.black};
`;

export const CreditCardNoticeContainer = styled.div`
  display: flex;
`;
export const CreditCardNoticeDot = styled.p`
  ${({ theme }) => theme.fonts.body_underlined8};

  color: ${({ theme }) => theme.colors.black};
`;
export const CreditCardNoticeText = styled.p`
  ${({ theme }) => theme.fonts.body_underlined8};

  color: ${({ theme }) => theme.colors.black};
`;

export const OtherPaymentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  width: 76.2rem;
  margin-top: 2rem;
`;

export const OtherPaymentSection = styled.div`
  /* position: absolute; */

  position: relative;
  display: flex;
  justify-content: end;
`;
export const OtherPaymentBox = styled.div<{ selected: boolean }>`
  ${({ theme }) => theme.fonts.body8};

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 18rem;
  height: 4.8rem;
  ${({ theme, selected }) =>
    selected
      ? `border: 1px solid ${theme.colors.black};`
      : `  border: 1px solid ${theme.colors.grey4};`}

  color: ${({ theme }) => theme.colors.black};

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 3px;
`;

export const IconOrderEventTag = styled(IcOrderEventTag)`
  position: absolute;
  top: -0.3rem;
  left: -0.2rem;
`;
