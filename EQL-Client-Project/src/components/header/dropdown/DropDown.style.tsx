import styled from 'styled-components';
export const DropDownContainer = styled.section`
  position: absolute;

  display: flex;
  justify-content: flex-start;

  width: 100%;
  height: 43.9rem;
  padding-top: 2.4rem;
  padding-left: 3.1rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;

  width: 5.1rem;
  height: 10.4rem;
  margin-right: 3rem;
`;

export const CategoryWrapper = styled.span`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  ${({ theme }) => theme.fonts.body8};

  color: ${({ theme }) => theme.colors.black};
`;

export const CategoryLayout = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2.1rem;

  ${({ theme }) => theme.fonts.body8};

  color: ${({ theme }) => theme.colors.black};
`;

export const ClothesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 8.8rem;
  text-align: left;
`;

export const BagContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 8.8rem;
  text-align: left;
`;

export const ShoesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 8.8rem;
  text-align: left;
`;

export const SeasonContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  text-align: left;
`;

export const InfoText = styled.div`
  ${({ theme }) => theme.fonts.body8};

  color: ${({ theme }) => theme.colors.grey2};
`;
