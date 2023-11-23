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

///test
const Header = () => {
  return (
    <>
      <MainHeader>
        <HeaderContainer>
          <IcEqlLogo />
          <HeaderWrapper>
            <HeaderLayout>
              <HeaderWomen>WOMEN</HeaderWomen>
              <HeaderText>MEN</HeaderText>
              <HeaderText>LIFE</HeaderText>
            </HeaderLayout>
            <IcLine />
            <HeaderLayout>
              <HeaderText>BRAND</HeaderText>
              <HeaderText>EQL EXCLUSIVE</HeaderText>
              <HeaderText>EVENT</HeaderText>
              <HeaderText>DISCOVER</HeaderText>
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
      </MainHeader>
    </>
  );
};

export default Header;

const MainHeader = styled.header`
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

const HeaderText = styled.h3`
  font-size: ${({ theme }) => theme.fonts.body10};
`;

const HeaderNotice = styled.h3`
  font-size: ${({ theme }) => theme.fonts.body10};
  color: ${({ theme }) => theme.colors.red};
`;
