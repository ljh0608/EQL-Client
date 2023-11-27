import * as S from './TopBtn.style';
import { IcArrowUpLinear } from '../../assets/svgs/0_icons';
import { useEffect, useState } from 'react';

const TopBtn = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  //윈도우의 top에 있을때엔 topBtn이 보이지 않도록 설정
  useEffect(() => {
    const RenderTopBtn = () => {
      if (window.scrollY > 100) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', RenderTopBtn);
  }, []);

  const ScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showTopBtn && (
        <S.TopBtnContainer onClick={ScrollToTop}>
          <IcArrowUpLinear />
        </S.TopBtnContainer>
      )}
    </>
  );
};

export default TopBtn;
