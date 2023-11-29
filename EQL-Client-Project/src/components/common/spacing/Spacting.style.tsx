import styled from 'styled-components';

export const SpacingWrapper = styled.div<{ $spacing: string }>`
  overflow: auto;
  margin-top: ${(props) => props.$spacing}rem;
`;
