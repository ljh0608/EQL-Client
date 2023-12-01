import * as S from './CategoryItemDatail.style.tsx';

import { CATEGORYDETAILS } from '../../../constants/categoryDetails.ts';
import { IcCheck } from '../../../assets/svgs/0_icons.ts';
import { useState } from 'react';

type CategoryItemDetailProps = {
  isOpen: boolean;
};

/** 카테고리를 눌렀을 때 아래로 내려오는 카테고리 내부 목록 컴포넌트입니다 */
const CategoryItemDetail = ({ isOpen }: CategoryItemDetailProps) => {
  const [activeTitle] = useState('ALL');

  return (
    <S.HiddenContainer $isOpen={isOpen}>
      <S.Container>
        {CATEGORYDETAILS.map(({ english, korean }) => (
          <S.Wrapper key={english} $isSelected={english === activeTitle}>
            <div className="title-tontainer">
              <span className="eng-title">{english}</span>
              <span className="ko-title">{korean}</span>
            </div>
            {activeTitle === english && <IcCheck />}
          </S.Wrapper>
        ))}
      </S.Container>
    </S.HiddenContainer>
  );
};

export default CategoryItemDetail;
