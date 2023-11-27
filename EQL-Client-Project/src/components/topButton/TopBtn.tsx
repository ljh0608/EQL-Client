import * as S from './TopBtn.style';
import { IcArrowUpLinear } from '../../assets/svgs/0_icons';

const ScrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

// window.addEventListener("scroll", function () {
//     S.TopBtnContainer.style.opacity = window.scrollY / 2000;
//   });

const TopBtn = () => {
  return (
    <S.TopBtnContainer onClick={ScrollToTop}>
      <IcArrowUpLinear />
    </S.TopBtnContainer>
  );
};

export default TopBtn;
