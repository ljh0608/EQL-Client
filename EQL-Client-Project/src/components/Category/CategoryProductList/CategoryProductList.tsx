import * as S from './CategoryProductList.style';
import { PRODUCTIMGS } from '../../../constants/ProductImgs'
import { IcArrowRight, IcBookmarkDefault, IcChat, IcNew } from '../../../assets/svgs/0_icons';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CategoryproductList = () => {
  const [page,setPage]=useState(1);

  const handlePageChange=(num:number)=>{
    setPage(num);
  }
  
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/items`);
        console.log(res.data); // 'res.data'로 서버 응답 데이터 접근
      } catch (err) {
        console.error(err); // 에러 로깅
      }
    };
  
    getData(); // 함수 호출
  }, []);
  

  return (
    <S.Container>
      <S.ItemsWrapper>
        {PRODUCTIMGS.slice(1).map((productImgs,idx)=>(
          <S.ItemContainer key={idx}>
            <S.ItemImg>
              <img src={PRODUCTIMGS[idx+1]} alt={`img${idx}`}/>
            </S.ItemImg>
            <S.ItemBrandTitle>PLAC WOMEN</S.ItemBrandTitle>
            <S.ItemProductTitle>Sojeanne X PLAC 레더 자켓</S.ItemProductTitle>
            <IcNew/>
            <S.ItemPrice>699,000</S.ItemPrice>
            <S.FavoriteContainer>
              <S.ItemFavorite>
                <IcBookmarkDefault/>
                <span>5</span>
              </S.ItemFavorite>
              <S.ItemFavorite>
                <IcChat/>
                <span>1</span>
              </S.ItemFavorite>
            </S.FavoriteContainer>
          </S.ItemContainer>
        ))}
      </S.ItemsWrapper>
      <S.PagenationNav>
        <S.PagenationBtn type='button' $isSeleted={page===1} onClick={()=>handlePageChange(1)}>1</S.PagenationBtn>
        <S.PagenationBtn type='button' $isSeleted={page===2} onClick={()=>handlePageChange(2)}>2</S.PagenationBtn>
        <S.PagenationBtn type='button' $isSeleted={page===3} onClick={()=>handlePageChange(3)}>3</S.PagenationBtn>
        <IcArrowRight/>
      </S.PagenationNav>
    </S.Container>
  )
}

export default CategoryproductList