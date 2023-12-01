import * as S from './CategoryProductList.style';
import { PRODUCTIMGS } from '../../../constants/ProductImgs'
import { IcArrowRight, IcBookmarkDefault, IcChat, IcNew } from '../../../assets/svgs/0_icons';
import { useEffect, useState } from 'react';
import { client } from '../../../utils/api/axios.ts';
import { useNavigate } from 'react-router-dom';

type itemListDataType = {
  "itemId": number,
  "brandName": string,
  "itemName": string,
  "price": number
}

const CategoryproductList = () => {
  const navigate=useNavigate();

  const [page,setPage]=useState(1);
  const [itemDatas,setItemDatas]=useState<itemListDataType[]>([])

  const handlePageChange=(num:number)=>{
    setPage(num);
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 부드러운 스크롤 효과를 위해 'smooth' 옵션 사용
    });
  }

  const handelMoveProductPage=(itemId:number)=>{
    navigate(`/product/${itemId}`);
  }

  //서버 연결
  useEffect(() => {
    const getData = async () => {
      try {
        const {data} = await client.get(`/items`);
        setItemDatas(data.data.itemInfos);
      } catch (err) {
        console.error(err); 
      }
    };

    getData();
  }, []);

  //페이지네이션
  /*
  1. 페이지 당 항목 수 정하기
  2. 전체 배열에서 처음값과 끝값 슬라이싱해서 배열에 넣어놓기
  */
  const NUMOFITEMSPERPAGE=10;
  const startItemIdx=10*(page-1);
  const endItemIdx=page*NUMOFITEMSPERPAGE;
  const pageItems=itemDatas.slice(startItemIdx,endItemIdx);

  return (
    <S.Container>
      <S.ItemsWrapper>
        {pageItems.map((item,idx)=>(
          <S.ItemContainer key={idx} onClick={()=>handelMoveProductPage(item.itemId)}>
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