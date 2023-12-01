import styled from 'styled-components';

export const BottomContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 1rem;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
  justify-content: space-between;

  width: 100%;
`;

export const BottomLayout = styled.div`
  position: relative;
  width: 33%;
`;
export const BottomImg = styled.img`
  width: 100%;
`;

export const BottomText = styled.div`
  position: absolute;
  top: 40%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;

  width: 100%;
  padding: 0 8%;
`;
export const BottomLeftHigh = styled.div`
  text-align: center;

  width: 100%;
  padding: 2rem 0rem;
  ${({ theme }) => theme.fonts.body3};

  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme }) => theme.colors.black};
`;
export const BottomLeftLow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  white-space: nowrap;

  padding: 2rem 6.8rem 2rem 7rem;
  ${({ theme }) => theme.fonts.body3};

  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme }) => theme.colors.black};
`;
export const BottomCenterHigh = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 2rem 0rem;
  ${({ theme }) => theme.fonts.body3};

  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme }) => theme.colors.black};
`;
export const BottomCenterLow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  white-space: nowrap;

  padding: 2rem 10.3rem 2rem 10.5rem;
  ${({ theme }) => theme.fonts.body3};

  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme }) => theme.colors.black};
`;
export const BottomRightHigh = styled.div`
  white-space: nowrap;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 2rem 11rem 2rem 11.2rem;
  ${({ theme }) => theme.fonts.body3};

  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme }) => theme.colors.black};
`;
export const BottomRightLow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  white-space: nowrap;

  padding: 2rem 7.9rem 2rem 8rem;
  ${({ theme }) => theme.fonts.body3};

  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme }) => theme.colors.black};
`;
