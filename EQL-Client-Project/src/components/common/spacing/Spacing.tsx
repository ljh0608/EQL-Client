import * as S from './Spacting.style';
type SpacingProps = {
  $spacing: string;
};
const Spacing = ({ $spacing }: SpacingProps) => {
  return <S.SpacingWrapper $spacing={$spacing}></S.SpacingWrapper>;
};

export default Spacing;
