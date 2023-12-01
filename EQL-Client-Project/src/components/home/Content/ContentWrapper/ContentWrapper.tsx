import * as S from './ContentWrapper.style';

import {
  ImgPost1,
  ImgPost11,
  ImgPost2,
  ImgPost3,
  ImgPost4,
  ImgPost5,
} from '../../../../assets/Images';

const ContentWrapper = () => {
  return (
    <>
      <S.ContentWrapper>
        <S.ContentLayout>
          <S.ContentImg src={ImgPost1} />
          <S.ContentBox>
            <S.ContentLayoutText>
              <S.ContentLayoutTitle>오래도록 함께 할</S.ContentLayoutTitle>
              <S.ContentLayoutSubtitle>파라점퍼스의 23F/W 컬렉션</S.ContentLayoutSubtitle>
            </S.ContentLayoutText>
            <S.ContentLayoutKeyword>
              <S.KeywordElement>파라점퍼스</S.KeywordElement>
              <S.KeywordElement>푸퍼</S.KeywordElement>
              <S.KeywordElement>패딩</S.KeywordElement>
            </S.ContentLayoutKeyword>
          </S.ContentBox>
        </S.ContentLayout>

        <S.ContentLayout>
          <S.ContentImg src={ImgPost2} />
          <S.ContentBox>
            <S.ContentLayoutText>
              <S.ContentLayoutTitle>50주년을 맞이한 팀버랜드</S.ContentLayoutTitle>
              <S.ContentLayoutSubtitle>개성만점 셀럽들</S.ContentLayoutSubtitle>
            </S.ContentLayoutText>
            <S.ContentLayoutKeyword>
              <S.KeywordElement>팀버랜드</S.KeywordElement>
              <S.KeywordElement>워크 부츠</S.KeywordElement>
              <S.KeywordElement>클래식</S.KeywordElement>
            </S.ContentLayoutKeyword>
          </S.ContentBox>
        </S.ContentLayout>

        <S.ContentLayout>
          <S.ContentImg src={ImgPost3} />
          <S.ContentBox>
            <S.ContentLayoutText>
              <S.ContentLayoutTitle>장바구니는 타이밍! #블프</S.ContentLayoutTitle>
              <S.ContentLayoutSubtitle>
                단 한 번 뿐인 세일 시즌! 블랙프라이데이 장바구니 아이템
              </S.ContentLayoutSubtitle>
            </S.ContentLayoutText>
            <S.ContentLayoutKeyword>
              <S.KeywordElement>블랙프라이데이</S.KeywordElement>
              <S.KeywordElement>장바구니</S.KeywordElement>
              <S.KeywordElement>세일</S.KeywordElement>
            </S.ContentLayoutKeyword>
          </S.ContentBox>
        </S.ContentLayout>

        <S.ContentLayout>
          <S.ContentImg src={ImgPost4} />
          <S.ContentBox>
            <S.ContentLayoutText>
              <S.ContentLayoutTitle>빈티지 콜렉터의 취향</S.ContentLayoutTitle>
              <S.ContentLayoutSubtitle>남성 패션 가이드 vol.1 포르텔라</S.ContentLayoutSubtitle>
            </S.ContentLayoutText>
            <S.ContentLayoutKeyword>
              <S.KeywordElement>파라점퍼스</S.KeywordElement>
              <S.KeywordElement>푸퍼</S.KeywordElement>
              <S.KeywordElement>패딩</S.KeywordElement>
            </S.ContentLayoutKeyword>
          </S.ContentBox>
        </S.ContentLayout>

        <S.ContentLayout>
          <S.ContentImg src={ImgPost5} />
          <S.ContentBox>
            <S.ContentLayoutText>
              <S.ContentLayoutTitle>변치 않을 클래식</S.ContentLayoutTitle>
              <S.ContentLayoutSubtitle>필수적인 클래식 코트 세 가지</S.ContentLayoutSubtitle>
            </S.ContentLayoutText>
            <S.ContentLayoutKeyword>
              <S.KeywordElement>클래식</S.KeywordElement>
              <S.KeywordElement>코트</S.KeywordElement>
              <S.KeywordElement>퍼코트</S.KeywordElement>
            </S.ContentLayoutKeyword>
          </S.ContentBox>
        </S.ContentLayout>

        <S.ContentLayout>
          <S.ContentImg src={ImgPost11} />
          <S.ContentBox>
            <S.ContentLayoutText>
              <S.ContentLayoutTitle>골라 신는 양말</S.ContentLayoutTitle>
              <S.ContentLayoutSubtitle>스타일링의 완성도를 높이는 양말</S.ContentLayoutSubtitle>
            </S.ContentLayoutText>
            <S.ContentLayoutKeyword>
              <S.KeywordElement>양말</S.KeywordElement>
              <S.KeywordElement>니삭스</S.KeywordElement>
              <S.KeywordElement>보온</S.KeywordElement>
            </S.ContentLayoutKeyword>
          </S.ContentBox>
        </S.ContentLayout>
      </S.ContentWrapper>
    </>
  );
};

export default ContentWrapper;
