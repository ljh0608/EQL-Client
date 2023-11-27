import styled from 'styled-components';

export const OrderHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const HeaderTitle = styled.p`
  ${({ theme }) => theme.fonts.body2};

  color: ${({ theme }) => theme.colors.black};
`;

export const HeaderUnderline = styled.hr`
  width: 76.2rem;
  height: 0.1rem;
  margin-left: 0;
  color: ${({ theme }) => theme.colors.black};
  /* border: 1px solid ${({ theme }) => theme.colors.black}; */
`;
