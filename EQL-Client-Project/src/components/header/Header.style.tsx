import styled from 'styled-components';
export const MainHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 10rem;
  padding: 2.7rem 2.3rem 2.6rem 2.3rem;
`;

export const DropDownContainer = styled.section`
  position: absolute;
  z-index: 1000;
  top: 10rem;
  left: 0;

  display: none;
  justify-content: flex-start;

  width: 100%;
  height: 43.9rem;
  padding-top: 2.4rem;
  padding-left: 3.1rem;

  background-color: ${({ theme }) => theme.colors.white};
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

export const HeaderWomen = styled.div`
  ${({ theme }) => theme.fonts.body10};

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 10rem;

  color: ${({ theme }) => theme.colors.grey3};
  &:hover ${DropDownContainer} {
    display: flex;
  }

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

export const MainHeaderWrapper = styled.div`
  position: relative;
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;

  width: 7.1rem;
  height: 10.4rem;
  margin-right: 3rem;
`;

export const CategoryWrapper = styled.span`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  ${({ theme }) => theme.fonts.body8};

  color: ${({ theme }) => theme.colors.black};
`;

export const CategoryLayout = styled.div`
  ${({ theme }) => theme.fonts.body8};

  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 2.1rem;

  color: ${({ theme }) => theme.colors.black};
`;

export const ClothesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 8.8rem;
  text-align: left;
`;

export const BagContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 8.8rem;
  text-align: left;
`;

export const ShoesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 8.8rem;
  text-align: left;
`;

export const SeasonContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  text-align: left;
`;

export const InfoText = styled.div`
  ${({ theme }) => theme.fonts.body8};

  color: ${({ theme }) => theme.colors.grey2};
`;
