import { IcOrderEventTag } from '../../../assets/svgs/0_icons';
import styled from 'styled-components';
export const NoticeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  width: 76.2rem;
  height: 35.1rem;
  margin-top: 2.6rem;
  margin-bottom: 5.1rem;
`;

export const HeadingText = styled.p`
  ${({ theme }) => theme.fonts.body5};

  color: ${({ theme }) => theme.colors.black};
`;

export const NoticeContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 77.3rem;
  height: 27rem;
`;

export const Content = styled.p`
  ${({ theme }) => theme.fonts.body9};

  color: ${({ theme }) => theme.colors.grey2};
`;

export const Temp = styled.span`
  ${({ theme }) => theme.fonts.body9};

  color: ${({ theme }) => theme.colors.grey2};
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const IconOrderEventTag = styled(IcOrderEventTag)`
  position: relative;
`;
