import DropDown from './dropdown/DropDown';
import * as S from './Header.style';
import { useState } from 'react';
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
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <>
      <S.MainHeader>
        <S.HeaderContainer>
          <IcEqlLogo />
          <S.HeaderWrapper>
            <S.HeaderLayout>
              <S.HeaderWomen onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                WOMEN
              </S.HeaderWomen>

              <S.HeaderText>MEN</S.HeaderText>
              <S.HeaderText>LIFE</S.HeaderText>
            </S.HeaderLayout>
            <IcLine />
            <S.HeaderLayout>
              <S.HeaderText>BRAND</S.HeaderText>
              <S.HeaderText>EQL EXCLUSIVE</S.HeaderText>
              <S.HeaderText>EVENT</S.HeaderText>
              <S.HeaderText>DISCOVER</S.HeaderText>
              <IcLine />
              <S.HeaderNotice>CURATION</S.HeaderNotice>
            </S.HeaderLayout>
          </S.HeaderWrapper>
        </S.HeaderContainer>
        <S.HeaderBox>
          <IcSearch />
          <IcJoin />
          <IcLogin />
          <IcMypage />
          <IcCart />
        </S.HeaderBox>
      </S.MainHeader>
      {/* {isHovering ? <DropDown /> : <></>} */}
      <DropDown />
    </>
  );
};

export default Header;
