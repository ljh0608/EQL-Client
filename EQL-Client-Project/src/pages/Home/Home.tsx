import React from 'react';
import styled from 'styled-components';
import {
  IcEqlLogo,
  IcSearch,
  IcJoin,
  IcLogin,
  IcMypage,
  IcCart,
  IcLine,
} from '../../assets/svgs/0_icons';
const Home = () => {
  return (
    <>
      <Header>
        <HeaderContainer>
          <IcEqlLogo />
          <HeaderWrapper>
            <HeaderLayout>
              <HeaderWomen>WOMEN</HeaderWomen>
              <HeaderMen>MEN</HeaderMen>
              <HeaderLife>LIFE</HeaderLife>
            </HeaderLayout>
            <IcLine />
            <HeaderLayout>
              <HeaderBrand>BRAND</HeaderBrand>
              <HeaderEqlExclusive>EQL EXCLUSIVE</HeaderEqlExclusive>
              <HeaderEvent>EVENT</HeaderEvent>
              <HeaderDiscover>DISCOVER</HeaderDiscover>
              <IcLine />
              <HeaderNotice>CURATION</HeaderNotice>
            </HeaderLayout>
          </HeaderWrapper>
        </HeaderContainer>
        <HeaderBox>
          <IcSearch />
          <IcJoin />
          <IcLogin />
          <IcMypage />
          <IcCart />
        </HeaderBox>
      </Header>
    </>
  );
};

export default Home;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 10rem;
  padding-top: 2.7rem;
  padding-right: 2.3rem;
  padding-bottom: 2.6rem;
  padding-left: 2.3rem;
`;

const HeaderContainer = styled.section`
  display: flex;
  gap: 2.7rem;
  align-items: center;
  justify-content: space-between;

  height: 4.7rem;
`;

const HeaderWrapper = styled.header`
  display: flex;
  flex-wrap: nowrap;
  gap: 3.1rem;
  align-items: center;
  justify-content: space-around;
`;

const HeaderLayout = styled.header`
  display: flex;
  flex-wrap: nowrap;
  gap: 3rem;
  align-items: center;
  justify-content: space-around;
`;

const HeaderBox = styled.div`
  display: flex;
  gap: 3.4rem;
  justify-content: space-between;
`;

const HeaderWomen = styled.h3`
  font-size: ${({ theme }) => theme.fonts.body10};
`;

const HeaderMen = styled.h3`
  font-size: ${({ theme }) => theme.fonts.body10};
`;

const HeaderLife = styled.h3`
  font-size: ${({ theme }) => theme.fonts.body10};
`;

const HeaderBrand = styled.h3`
  font-size: ${({ theme }) => theme.fonts.body10};
`;

const HeaderEqlExclusive = styled.h3`
  font-size: ${({ theme }) => theme.fonts.body10};
`;

const HeaderEvent = styled.h3`
  font-size: ${({ theme }) => theme.fonts.body10};
`;

const HeaderDiscover = styled.h3`
  font-size: ${({ theme }) => theme.fonts.body10};
`;

const HeaderNotice = styled.h3`
  font-size: ${({ theme }) => theme.fonts.body10};
  color: ${({ theme }) => theme.colors.red};
`;
