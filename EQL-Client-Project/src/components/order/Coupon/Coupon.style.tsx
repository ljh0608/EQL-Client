import styled from 'styled-components';

export const CouponWrapper = styled.div`
  width: 76.2rem;
`;

export const CouponContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CouponBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 8.9rem;
`;
export const CouponHeadText = styled.div`
  ${({ theme }) => theme.fonts.body8};

  display: flex;
  align-items: center;
  justify-content: start;

  width: 22.2rem;
  height: 100%;
`;
export const TextInput = styled.input<{ $readonly: boolean }>`
  width: 24rem;
  height: 4.8rem;
  padding: 1.4rem 0 1.4rem 1.68rem;

  ${({ theme, $readonly }) =>
    $readonly
      ? `
      background-color: ${theme.colors.grey6};
  border: 1px solid ${theme.colors.grey4};
  color: ${theme.colors.grey3};`
      : `
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.grey4};
  color: ${theme.colors.black};
  `};

  border-radius: 3px;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey3};
  }
`;

export const SelectBtn = styled.button<{ $usable: boolean }>`
  ${({ theme }) => theme.fonts.body8};

  display: flex;
  align-items: center;
  justify-content: center;

  width: 12rem;
  height: 4.8rem;

  ${({ theme, $usable }) =>
    $usable
      ? `
    background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.black};
  `
      : `  background-color: ${theme.colors.grey6};
   border: 1px solid ${theme.colors.grey4};
   color:${theme.colors.grey3};
   cursor:default;
   `};

  border-radius: 3px;
`;
export const CouponSelectWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  width: 37rem;
  height: 100%;
`;
export const CouponDescription = styled.div`
  ${({ theme }) => theme.fonts.body9};

  display: flex;
  justify-content: end;
  width: 15rem;
  color: black;
`;
