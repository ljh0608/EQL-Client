import styled from 'styled-components';

export const BannerContainer = styled.div`
  position: absolute;
  bottom: 10%;
  left: 0;

  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const BannerWrapper = styled.div`
  z-index: 999;

  display: flex;
  flex-wrap: nowrap;

  width: 100%;
  height: 8.7rem;
  padding: 2.3rem 28.5rem 2.2rem 6rem;
  ${({ theme }) => theme.fonts.title3};

  color: ${({ theme }) => theme.colors.white};
  white-space: nowrap;

  background-color: ${({ theme }) => theme.colors.black};
`;

export const BannerLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0;
`;

export const BrandNameBox = styled.div`
  ${({ theme }) => theme.fonts.body3};
`;

export const BannerBox = styled.div`
  width: 100%;
  height: 6.8rem;
  padding: 1.8rem 24.3rem 1.8rem 6rem;
  ${({ theme }) => theme.fonts.body3};

  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme }) => theme.colors.black};
`;
