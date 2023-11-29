import * as S from './CategoryProductList.style';
import { PRODUCTIMGS } from '../../../constants/ProductImgs'
import { IcArrowRight, IcBookmarkDefault, IcChat, IcNew } from '../../../assets/svgs/0_icons';
import { useEffect, useState } from 'react';
import { client } from '../../../utils/api/axios.ts';

type itemListDataType = {
  "itemId": number,
  "brandName": string,
  "itemName": string,
  "price": number
}

const CategoryproductList = () => {
  const [page,setPage]=useState(1);
  const [itemListData,setItemListData]=useState<itemListDataType[]>([])

  const handlePageChange=(num:number)=>{
    setPage(num);
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await client.get(`/items`);
        console.log(res.data.data.itemInfos); // 'res.data'로 서버 응답 데이터 접근
        setItemListData(res.data.data.itemInfos);
      } catch (err) {
        console.error(err); // 에러 로깅
      }
    };

    getData(); // 함수 호출
  }, []);

  return (
    <S.Container>
      <S.ItemsWrapper>
        {itemListData.map((item,idx)=>(
          <S.ItemContainer key={idx}>
            <S.ItemImg>
              <img src={PRODUCTIMGS[item.itemId]} alt={item.itemName}/>
            </S.ItemImg>
            <S.ItemBrandTitle>{item.brandName}</S.ItemBrandTitle>
            <S.ItemProductTitle>{item.itemName}</S.ItemProductTitle>
            <IcNew/>
            <S.ItemPrice>{item.price.toLocaleString()}</S.ItemPrice>
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