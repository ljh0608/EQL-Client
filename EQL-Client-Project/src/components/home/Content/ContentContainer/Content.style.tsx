import styled from 'styled-components';

export const ContentContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0 0 2.6rem 3rem;
`;
export const ContentText = styled.div`
  width: 13.3rem;
  height: 3.6rem;
  ${({ theme }) => theme.fonts.subtitle1};

  color: ${({ theme }) => theme.colors.black};
`;

export const ContentIcLeft = styled.div`
  position: absolute;
  top: -0.2rem;
  right: 5.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 3.2rem;
  height: 3.2rem;
  padding: 0.4rem;

  border: 1px solid ${({ theme }) => theme.colors.grey6};
  border-radius: 0rem 0.2rem 0.2rem 0rem;
`;
export const ContentIcRight = styled.div`
  position: absolute;
  top: -0.2rem;
  right: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 3.2rem;
  height: 3.2rem;
  padding: 0.4rem;

  border: 1px solid ${({ theme }) => theme.colors.grey4};
  border-radius: 0rem 0.2rem 0.2rem 0rem;
`;
