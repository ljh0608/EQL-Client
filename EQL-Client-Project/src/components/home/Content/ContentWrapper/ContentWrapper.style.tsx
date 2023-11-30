import styled from 'styled-components';

export const ContentWrapper = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  gap: 1.1rem;
  justify-content: space-between;

  width: 100%;
  padding: 0 0 18.6rem 3rem;
`;

export const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.7rem;

  width: 31.2rem;
  height: 52.6rem;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;

  width: auto;
  height: 9.3rem;
`;
export const ContentLayoutText = styled.div`
  width: auto;
  height: 5.4rem;
`;
export const ContentLayoutTitle = styled.h1`
  width: auto;
  height: 3.2rem;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body2};

  white-space: nowrap;
`;

export const ContentLayoutSubtitle = styled.h2`
  width: auto;
  height: 1.9rem;
  color: ${({ theme }) => theme.colors.grey2};
  ${({ theme }) => theme.fonts.body10};

  white-space: nowrap;
`;
export const ContentLayoutKeyword = styled.div`
  display: flex;
  gap: 0.1rem;
  align-items: flex-start;

  width: auto;
  height: 2.9rem;
`;
export const KeywordElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem 1rem;

  color: ${({ theme }) => theme.colors.grey2};
  white-space: nowrap;

  border: 1px solid ${({ theme }) => theme.colors.grey4};
  border-radius: 10rem;
`;

export const ContentImg = styled.img`
  width: 31.2rem;
  height: 41.6rem;
`;
