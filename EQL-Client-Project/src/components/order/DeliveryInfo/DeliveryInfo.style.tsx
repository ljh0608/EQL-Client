import styled from 'styled-components';

export const DeliveryInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 76.2rem;
  margin-bottom: 5.5rem;
`;

export const DeliveryInfoContainer = styled.div`
  display: flex;
  gap: 18.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const DeliveryInfoTitle = styled.span`
  ${({ theme }) => theme.fonts.body9};
`;

export const DeliveryInfoSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DeliveryInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DefaultAddressInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 6.7rem;
  height: 2rem;

  color: ${({ theme }) => theme.colors.grey4};

  border: 1px solid ${({ theme }) => theme.colors.grey4};
`;

export const ChangeAddress = styled.button`
  ${({ theme }) => theme.fonts.body_underlined8};

  color: black;
  border: none;
`;

export const DescriptionText = styled.p`
  ${({ theme }) => theme.fonts.body9};

  color: ${({ theme }) => theme.colors.black};
`;

export const ZipCode = styled.p`
  ${({ theme }) => theme.fonts.body10};

  color: ${({ theme }) => theme.colors.grey2};
`;

export const SelectBox = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 54rem;
  height: 5.4rem;
  padding: 1.5rem;

  border: 1px solid ${({ theme }) => theme.colors.grey4};
  border-radius: 3px;
`;

export const SelectBoxText = styled.span`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body8};
`;
