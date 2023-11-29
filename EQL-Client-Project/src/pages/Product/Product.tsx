import * as S from './Product.style';
import { IcArrowBreadCrumb } from '../../assets/svgs/0_icons';
import Right from './Right';
import Left from './Left';
import { useEffect, useState } from 'react';
import { client } from '../../utils/api/axios';
import { useParams } from 'react-router-dom';
import { ProductProps } from '../../types/product';

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
        <Left itemId={itemId} />
        <Right brandName={brandName} itemName={itemName} price={price} />
      </S.MainContainer>
    </S.ProductContainer>
  );
};

export default Product;
