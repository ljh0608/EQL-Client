import * as S from './Footer.style';

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterContainer>
        <S.InfoContainer> </S.InfoContainer>
        <S.FooterHr />
        <S.MenuContainer $sequence={'middle'}></S.MenuContainer>
        <S.FooterHr />
        <S.MenuContainer $sequence={'last'}></S.MenuContainer>
      </S.FooterContainer>
    </S.FooterContainer>
  );
};

export default Footer;
