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
  align-items: flex-start;
  justify-content: center;

  width: 43rem;
  margin-top: 4.3rem;

  /* background-color: green; */
`;

export const SideHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding-right: 1.2rem;
  padding-left: 0.3rem;
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
  padding-right: 1.2rem;
  padding-left: 0.3rem;

  color: ${({ theme }) => theme.colors.black};
  text-overflow: ellipsis;
  word-break: keep-all;
  white-space: wrap;

  ${({ theme }) => theme.fonts.body1};
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-top: 1.3rem;
  padding-right: 1.1rem;
  padding-left: 0.1rem;
`;

export const Price = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.fonts.title4};
`;

export const CouponBtn = styled.div`
  padding: 0.2rem 1rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.red_transparent};
  ${({ theme }) => theme.fonts.body10};
`;

export const RatingWrapper = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  justify-content: center;

  margin: 2.8rem 0 5.4rem;
`;

export const StarsWrapper = styled.div`
  display: flex;
  gap: 0.1rem;
  align-items: center;
  justify-content: center;
`;

export const RatingScoreWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

export const RatingScore = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.grey3};
  ${({ theme }) => theme.fonts.body10};
`;

export const Option = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  &.delivery {
    margin-top: 2.4rem;
  }
`;

export const OptionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-bottom: 3.5rem;
  padding-left: 0.3rem;
`;

export const OptionTitle = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body4};
`;

export const OptionDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  &.benefit {
    gap: 0.3rem;
    margin-bottom: 7.1rem;
  }
  &.delivery {
    gap: 0.8rem;
    margin-bottom: 3.9rem;
  }
`;
export const OptionDetail = styled.p`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body9};
`;

export const DeliveryText = styled.p`
  margin-bottom: 1.6rem;
  padding-left: 0.3rem;
  color: ${({ theme }) => theme.colors.grey2};
  ${({ theme }) => theme.fonts.body9};
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  /* margin-bottom: 2.65rem; */
  background-color: ${({ theme }) => theme.colors.grey6};
`;

export const DropBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 1.2rem 0.8rem 1.2rem 1.6rem;

  border: 0.7px solid ${({ theme }) => theme.colors.grey4};
  border-radius: 0.2rem;
`;

//여기에 텍스트 정보 입력하기-!!!
export const DropBoxText = styled.p`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body9};
`;

export const DropBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin-bottom: 5rem;
`;

export const TotalPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-top: 1.5rem;
  margin-bottom: 2.6rem;
`;

export const TotalPriceText = styled.p`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body9};
`;

export const TotalPrice = styled.p`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body1};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.3rem 5.6rem;

  border-radius: 0.4rem;

  ${({ theme }) => theme.fonts.body7};

  &.cart {
    background-color: ${({ theme }) => theme.colors.white};
    border: 0.7px solid ${({ theme }) => theme.colors.black};
  }
  &.order {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
  }
`;

// line
//  padding-left: 0.3rem;
//  padding-right: 1rem;
