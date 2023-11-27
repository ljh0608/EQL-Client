import styled from 'styled-components';

export const SpacingWrapper = styled.div<{ $spacing: string }>`
  overflow: auto;
  margin: ${(props) => props.$spacing}rem;
`;
