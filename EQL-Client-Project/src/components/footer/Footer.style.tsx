import styled from 'styled-components';
export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40rem;
  /* background-color: #a6c960; */
  border-top: 1px solid ${({ theme }) => theme.colors.grey4};
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 45%;
  padding-top: 4.4rem;
  padding-bottom: 3.9rem;
  padding-left: 3.6rem;
`;

export const InfoMainText = styled.h2`
  ${({ theme }) => theme.fonts.body9};
`;

export const MenuContainer = styled.div<{ $sequence: string }>`
  display: flex;
  flex-direction: column;
  width: ${({ $sequence }) => ($sequence === 'middle' ? '32%' : '23%')};
  padding: 4.2rem 3.1rem 3.1rem 3.1rem;
`;

export const FooterHr = styled.hr`
  color: ${({ theme }) => theme.colors.grey4};
`;
