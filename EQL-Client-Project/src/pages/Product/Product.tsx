import * as S from './Product.style';

import { useEffect, useState } from 'react';

import { IcArrowBreadCrumb } from '../../assets/svgs/0_icons';
import Left from '../../components/Product/Left';
import { ProductProps } from '../../types/product';
import Right from '../../components/Product/Right';
import { client } from '../../utils/api/axios';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { productId } = useParams();
  const ItemId = Number(productId);
  const [dataResponse, setDataResponse] = useState<ProductProps>({
    data: {
      brandName: '',
      itemId: 0,
      itemName: '',
      price: 0,
    },
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    const getProductData = async (ItemId: number) => {
      try {
        const { data } = await client.get<ProductProps>(`/item/${ItemId}`);
        setDataResponse(data);
      } catch (err) {
        console.log(err);
      }
    };
    getProductData(ItemId);
  }, []);

  const { brandName, itemId, itemName, price } = dataResponse.data;

  return (
    <S.ProductContainer>
      <S.CategoryBar>
        <S.Category>우먼</S.Category>
        <IcArrowBreadCrumb />
        <S.Category>의류</S.Category>
        <IcArrowBreadCrumb />
        <S.Category className="selected">스웨트 셔츠 / 후디</S.Category>
      </S.CategoryBar>
      <S.MainContainer>
        <Left itemId={itemId} brandName={brandName} />
        <Right brandName={brandName} itemName={itemName} price={price} itemId={itemId} />
      </S.MainContainer>
    </S.ProductContainer>
  );
};

export default Product;
