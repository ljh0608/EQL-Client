import * as S from './Header.style';

import {
  IcCart,
  IcEqlLogo,
  IcJoin,
  IcLine,
  IcLogin,
  IcMypage,
  IcSearch,
} from '../../assets/svgs/0_icons';

import { IcArrow } from '../../assets/svgs/0_icons';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <S.MainHeaderWrapper>
      <S.MainHeader>
        <S.HeaderContainer>
          <IcEqlLogo onClick={() => navigate('/')} />
          <S.HeaderWrapper>
            <S.HeaderLayout>
              <S.HeaderWomen onClick={() => navigate('/category')}>
                WOMEN
                <S.DropDownContainer>
                  <S.CategoryContainer>
                    <S.CategoryWrapper>
                      우먼
                      <IcArrow />
                    </S.CategoryWrapper>
                    <S.CategoryWrapper>
                      신상품
                      <IcArrow />
                    </S.CategoryWrapper>
                    <S.CategoryWrapper>
                      베스트
                      <IcArrow />
                    </S.CategoryWrapper>
                  </S.CategoryContainer>
                  <S.ClothesContainer>
                    <S.CategoryLayout onClick={() => navigate('/category')}>
                      의류
                      <IcArrow />
                    </S.CategoryLayout>
                    <S.InfoContainer>
                      <S.InfoText>아우터</S.InfoText>
                      <S.InfoText>니트</S.InfoText>
                      <S.InfoText>티셔츠</S.InfoText>
                      <S.InfoText>스웨트 셔츠 / 후디</S.InfoText>
                      <S.InfoText>셔츠</S.InfoText>
                      <S.InfoText>팬츠</S.InfoText>
                      <S.InfoText>원피스</S.InfoText>
                      <S.InfoText>스커트</S.InfoText>
                      <S.InfoText>라운지웨어</S.InfoText>
                      <S.InfoText>언더웨어</S.InfoText>
                      <S.InfoText>애슬레저 / 수영복</S.InfoText>
                    </S.InfoContainer>
                  </S.ClothesContainer>
                  <S.BagContainer>
                    <S.CategoryLayout>
                      가방 & 액세서리
                      <IcArrow />
                    </S.CategoryLayout>
                    <S.InfoContainer>
                      <S.InfoText>가방</S.InfoText>
                      <S.InfoText>모자 / 캡</S.InfoText>
                      <S.InfoText>시계</S.InfoText>
                      <S.InfoText>선글라스 / 안경</S.InfoText>
                      <S.InfoText>주얼리</S.InfoText>
                      <S.InfoText>패션 악세서리</S.InfoText>
                    </S.InfoContainer>
                  </S.BagContainer>
                  <S.ShoesContainer>
                    <S.CategoryLayout>
                      슈즈
                      <IcArrow />
                    </S.CategoryLayout>
                    <S.InfoContainer>
                      <S.InfoText>부츠</S.InfoText>
                      <S.InfoText>스니커즈</S.InfoText>
                      <S.InfoText>로퍼</S.InfoText>
                      <S.InfoText>펌프 / 힐</S.InfoText>
                      <S.InfoText>샌들</S.InfoText>
                      <S.InfoText>슬리퍼</S.InfoText>
                    </S.InfoContainer>
                  </S.ShoesContainer>
                  <S.SeasonContainer>
                    <S.CategoryLayout>
                      시즌 키워드
                      <IcArrow />
                    </S.CategoryLayout>
                    <S.InfoContainer>
                      <S.InfoText>바라클라바</S.InfoText>
                      <S.InfoText>코위찬</S.InfoText>
                      <S.InfoText>플리츠 스커트</S.InfoText>
                      <S.InfoText>레그 & 핸드워머</S.InfoText>
                      <S.InfoText>레더</S.InfoText>
                      <S.InfoText>하프부츠</S.InfoText>
                      <S.InfoText>프린팅 탑</S.InfoText>
                      <S.InfoText>퍼들 팬츠</S.InfoText>
                      <S.InfoText>카고 팬츠</S.InfoText>
                      <S.InfoText>리본 디테일</S.InfoText>
                      <S.InfoText>레이어드 스커트</S.InfoText>
                    </S.InfoContainer>
                  </S.SeasonContainer>
                </S.DropDownContainer>
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
          <IcCart onClick={() => navigate('/order')} />
        </S.HeaderBox>
      </S.MainHeader>
    </S.MainHeaderWrapper>
  );
};

export default Header;
