import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CategoryBar = styled.div`
  display: flex;
  gap: 2.2rem;

  height: 2.9rem;
  margin: 2.4rem 0 2.2rem;

  background-color: beige;
`;

export const Category = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.fonts.body5};

  color: ${({ theme }) => theme.colors.grey1};

  &.selected {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const MainContainer = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  justify-content: center;

  margin-top: 2.2rem;
`;
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 67.9rem;

  background-color: black;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 42.8rem;
  margin-top: 4.3rem;

  background-color: green;
`;

export const SideHeader = styled.div`
  display: flex;
  gap: 34.8rem;
  align-items: center;
  justify-content: center;
`;

export const BrandName = styled.p`
  ${({ theme }) => theme.fonts.body6};
`;

export const BookmarkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BookmarkCount = styled.p`
  ${({ theme }) => theme.fonts.body10};

  color: ${({ theme }) => theme.colors.black};
`;

export const ItemTitle = styled.p`
  width: 100%;
  margin-top: 0.6rem;

  color: ${({ theme }) => theme.colors.black};
  text-overflow: ellipsis;
  word-break: keep-all;
  white-space: wrap;

  ${({ theme }) => theme.fonts.body1};
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Price = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.fonts.title4};
`;

export const CouponBtn = styled.div`
  width: 30rem;
  height: 10rem;
  padding: 0.2rem 1rem;
  /* background-color: ${({ theme }) => theme.colors.red_transparent}; */
  /* background-color: rgba(234, 50, 35, 0.8); */
  /* ${({ theme }) => theme.fonts.body10}; */
`;
