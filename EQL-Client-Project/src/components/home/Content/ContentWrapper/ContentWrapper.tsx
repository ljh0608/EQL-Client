import * as S from './ContentWrapper.style';

import { useEffect, useState } from 'react';

import { PRODUCTPOSTIMG } from '../../../../constants/HomeContent';
import { client } from '../../../../utils/api/axios';

//build test
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
  if (!contentData) {
    return <div>loading...</div>;
  } else {
    return (
      <>
        {contentData && (
          <S.ContentWrapper>
            {contentData.map((eachContent) => (
              <S.ContentLayout key={eachContent.contentId}>
                <S.ContentImg src={PRODUCTPOSTIMG[eachContent?.contentId]} />
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
        )}
      </>
    );
  }
};

export default ContentWrapper;
