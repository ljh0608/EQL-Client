import styled from 'styled-components';
export const MainHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 10rem;
  padding: 2.7rem 2.3rem 2.6rem 2.3rem;
`;

export const HeaderContainer = styled.header`
  display: flex;
  gap: 2.7rem;
  align-items: center;
  justify-content: space-between;

  height: 4.7rem;
`;

export const HeaderWrapper = styled.section`
  display: flex;
  flex-wrap: nowrap;
  gap: 3.1rem;
  align-items: center;
  justify-content: space-around;
`;

export const HeaderLayout = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 3rem;
  align-items: center;
  justify-content: space-around;
`;

export const HeaderBox = styled.section`
  display: flex;
  gap: 3.4rem;
  justify-content: space-between;
`;

export const HeaderWomen = styled.h3`
  ${({ theme }) => theme.fonts.body10};

  color: ${({ theme }) => theme.colors.grey3};

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const HeaderText = styled.h3`
  ${({ theme }) => theme.fonts.body10};

  color: ${({ theme }) => theme.colors.grey3};
`;

export const HeaderNotice = styled.h3`
  ${({ theme }) => theme.fonts.body10};

  color: ${({ theme }) => theme.colors.red};
`;
