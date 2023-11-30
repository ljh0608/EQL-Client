import * as S from './Notice.style';

import { NoticeContents } from '../../../constants/Notice';

const Notice = () => {
  return (
    <S.NoticeWrapper>
      <S.HeadingText>유의사항</S.HeadingText>
      <S.NoticeContentsWrapper>
        {NoticeContents.map((content, index) => (
          <S.ContentWrapper key={index}>
            <S.Temp>•</S.Temp>
            <S.Content>{content}</S.Content>
          </S.ContentWrapper>
        ))}
      </S.NoticeContentsWrapper>
    </S.NoticeWrapper>
  );
};

export default Notice;
