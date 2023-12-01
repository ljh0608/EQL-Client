import { LightHrComp } from '../LightHr/LightHr.style';
import styled from 'styled-components';
export const PaymentInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 39.9rem;
  height: 53.6rem;
  padding-top: 2.8rem;
  padding-right: 3rem;
  padding-left: 3.3rem;

  border: 1px solid ${({ theme }) => theme.colors.grey4};
`;

export const PayMentInfoTitle = styled.p`
  ${({ theme }) => theme.fonts.body2};

  color: ${({ theme }) => theme.colors.black};
`;

export const PayMentUnderLine = styled.hr`
  width: 33.8rem;
  height: 0.1rem;
  margin-left: 0;
  color: ${({ theme }) => theme.colors.black};
`;

export const PaymentTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  width: 100%;
  height: 5.2rem;
`;

export const LightHrCompCustom = styled(LightHrComp)`
  width: 33.6rem;
`;

export const PaymentMiddleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  height: 15.4rem;
  padding-top: 1.8rem;
  padding-bottom: 2rem;
`;

export const PaymentTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const PaymentTextKey = styled.p`
  ${({ theme }) => theme.fonts.body9};

  color: ${({ theme }) => theme.colors.grey2};
`;

export const PaymentTextValue = styled.p`
  ${({ theme }) => theme.fonts.body9};

  color: ${({ theme }) => theme.colors.black};
`;

export const FinalFeeText = styled.p`
  ${({ theme }) => theme.fonts.body6};

  color: ${({ theme }) => theme.colors.black};
`;

export const AgreeTermContainer = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 6.3rem;
  padding: 0 2rem;

  border: 1px solid ${({ theme }) => theme.colors.grey6};
`;
export const AgreeTermWrapper = styled.div`
  ${({ theme }) => theme.fonts.body8};

  display: flex;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.black};
`;

export const PaymentBtn = styled.button`
  ${({ theme }) => theme.fonts.body4};

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 6.9rem;

  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme }) => theme.colors.black};
`;

export const PaymentInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
