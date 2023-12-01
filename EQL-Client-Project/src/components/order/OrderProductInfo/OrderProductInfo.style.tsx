import styled from 'styled-components';

export const OrderWrapper = styled.div`
  width: 76.2rem;
  margin-bottom: 5.6rem;
`;
export const OrderInfoWrapper = styled.div`
  display: flex;
  gap: 2rem;

  width: 76.2rem;
  height: 18rem;
  margin: 2rem 0;
`;

export const TempImgDiv = styled.img`
  width: 12rem;
  height: 16rem;
`;

export const OrderInfoContiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 64.2rem;
`;
export const BrandText = styled.p`
  ${({ theme }) => theme.fonts.body6};

  color: ${({ theme }) => theme.colors.black};
`;
export const Price = styled.p`
  ${({ theme }) => theme.fonts.body2};

  color: black;
`;
export const Body7 = styled.p`
  ${({ theme }) => theme.fonts.body7};

  color: ${({ theme }) => theme.colors.grey1};
`;

export const FlexColumnBox = styled.div`
  display: flex;
  align-items: center;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;

  width: 100%;
  padding-right: 1.4rem;
`;
export const Body8 = styled.p`
  ${({ theme }) => theme.fonts.body8};

  margin-right: 1rem;
  color: ${({ theme }) => theme.colors.grey2};
`;
export const Body9 = styled.p`
  ${({ theme }) => theme.fonts.body9};

  color: ${({ theme }) => theme.colors.grey2};
`;
