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
  justify-content: space-between;

  width: 45%;
  padding-top: 4.4rem;
  padding-bottom: 3.9rem;
  padding-left: 3.6rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const InfoMainText = styled.h2`
  ${({ theme }) => theme.fonts.body9};

  color: ${({ theme }) => theme.colors.black};
`;

export const InfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  justify-content: center;

  margin-top: 2.4rem;
`;

export const InfoText = styled.p`
  ${({ theme }) => theme.fonts.body9};

  color: ${({ theme }) => theme.colors.grey3};
`;

export const InfoLinkText = styled.span`
  ${({ theme }) => theme.fonts.body_underlined8};

  cursor: pointer;
  color: ${({ theme }) => theme.colors.grey3};
`;

export const InfoCopyText = styled.p`
  ${({ theme }) => theme.fonts.body10};

  color: ${({ theme }) => theme.colors.grey3};
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
