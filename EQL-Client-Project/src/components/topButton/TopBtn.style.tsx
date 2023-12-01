import styled from 'styled-components';

export const TopBtnContainer = styled.button`
  position: sticky;
  right: 1.77rem;
  bottom: 3.67rem;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 5.25rem;
  height: 5.25rem;
  margin-bottom: 3.67rem;
  margin-left: auto;

  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 50%;
`;
