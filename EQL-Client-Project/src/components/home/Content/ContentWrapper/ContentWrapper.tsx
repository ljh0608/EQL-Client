import * as S from './ContentWrapper.style';
import { client } from '../../../../utils/api/axios';
import { useState, useEffect } from 'react';

type ContentDataType = {
  contentId: number;
  title: string;
  description: string;
  tags: string[];
};

const ContentWrapper = () => {
  const [contentData, setContentData] = useState<ContentDataType[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await client.get(`/contents`);
        setContentData(data.data.contents);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  console.log(contentData);
  return (
    <>
      <S.ContentWrapper>
        {contentData.map((eachContent) => (
          <S.ContentLayout key={eachContent.contentId}>
            <S.ContentImg src={`src/assets/Images/ImgPost${eachContent.contentId}.png`} />
            <S.ContentBox>
              <S.ContentLayoutText>
                <S.ContentLayoutTitle>{eachContent.title}</S.ContentLayoutTitle>
                <S.ContentLayoutSubtitle>{eachContent.description}</S.ContentLayoutSubtitle>
              </S.ContentLayoutText>
              <S.ContentLayoutKeyword>
                {eachContent.tags.map((eachTag) => (
                  <S.KeywordElement key={eachTag}>{eachTag}</S.KeywordElement>
                ))}
              </S.ContentLayoutKeyword>
            </S.ContentBox>
          </S.ContentLayout>
        ))}
      </S.ContentWrapper>
    </>
  );
};

export default ContentWrapper;
