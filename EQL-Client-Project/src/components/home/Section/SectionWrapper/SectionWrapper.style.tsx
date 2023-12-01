import styled from 'styled-components';
export const SectionWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

export const ExampleImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const NextImgBox = styled.div`
  position: absolute;
  top: 45%;
  right: 2.4rem;
  color: ${({ theme }) => theme.colors.white_transparent};
`;
export const PrevImgBox = styled.div`
  position: absolute;
  top: 45%;
  left: 1.5%;
  color: ${({ theme }) => theme.colors.white_transparent};
`;

export const ImgLayout = styled.div`
  position: absolute;
  top: 45%;
  left: 40%;

  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  align-items: center;

  height: 3.4rem;
`;
export const LayoutBox = styled.div`
  height: 2.3rem;
`;

export const LayoutText = styled.div`
  ${({ theme }) => theme.fonts.body1};

  color: ${({ theme }) => theme.colors.white};
`;
