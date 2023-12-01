import styled from 'styled-components';

export const SectionContainer = styled.section`
  overflow: hidden;
  width: 100%;
  padding: 5.2rem 0 15.5rem 10rem;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const SectionText = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2.7rem;
  justify-content: flex-start;

  padding-right: 10rem;
`;

export const SectionKeywordLine = styled.div`
  color: ${({ theme }) => theme.colors.white};
  border-bottom: 0.2rem solid ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.title1};
`;

export const SectionKeyword = styled.div`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title1};
`;

export const SectionTitle = styled.div`
  width: 26.2rem;
  height: 3.6rem;
  margin-top: 19.6rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.subtitle1};

  white-space: nowrap;
`;

export const ProductList = styled.div`
  overflow: hidden;
  display: inline-flex;
  flex-direction: row;
  gap: 1.1rem;

  width: 100%;
  margin-top: 3rem;
`;
export const SectionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.9rem;
  align-items: flex-start;

  width: 100%;
`;
export const SectionBox = styled.div`
  position: relative;
  width: 100%;
`;
export const SectionIc = styled.div`
  position: absolute;
  top: 0.9rem;
  right: 1.2rem;
`;

export const SectionImg = styled.img`
  width: 100%;
`;
export const SectionInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: flex-start;
`;

export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  align-items: flex-start;
`;

export const InfoTitle = styled.div`
  ${({ theme }) => theme.fonts.body9};

  color: ${({ theme }) => theme.colors.white};
`;

export const InfoSubtitle = styled.div`
  display: flex;
  justify-content: flex-start;

  width: 17.8rem;
  height: auto;

  color: ${({ theme }) => theme.colors.grey3};
  ${({ theme }) => theme.fonts.body9};
`;

export const InfoPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: -0.6rem;
  align-items: flex-start;
  ${({ theme }) => theme.fonts.body6};

  color: ${({ theme }) => theme.colors.white};
`;

export const InfoPriceLine = styled.div`
  display: flex;
  flex-direction: column;
  gap: -0.6rem;
  align-items: flex-start;

  color: ${({ theme }) => theme.colors.white};
  text-decoration: line-through;

  ${({ theme }) => theme.fonts.number_strikethrough1};
`;

export const InfoDiscount = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.6rem;
`;

export const DiscountRate = styled.div`
  color: ${({ theme }) => theme.colors.red};
`;

export const DiscountPrice = styled.div`
  color: ${({ theme }) => theme.colors.white};
`;
