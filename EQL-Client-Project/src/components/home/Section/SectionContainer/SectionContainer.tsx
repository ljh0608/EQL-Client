import {
  ImgRec1,
  ImgRec2,
  ImgRec3,
  ImgRec4,
  ImgRec5,
  ImgRec6,
  ImgRec7,
} from '../../../../assets/images';
import * as S from './SectionContainer.style';
import { IcBookmarkDefault } from '../../../../assets/svgs/0_icons';
const SectionContainer = () => {
  return (
    <>
      <S.SectionContainer>
        <S.SectionText>
          <S.SectionKeywordLine>BLACK WEEK,</S.SectionKeywordLine>
          <S.SectionKeyword>Sweats&Hoodies,</S.SectionKeyword>
          <S.SectionKeyword>Windbreaker,</S.SectionKeyword>
          <S.SectionKeyword>Jacket,</S.SectionKeyword>
          <S.SectionKeyword>Sneakers,</S.SectionKeyword>
          <S.SectionKeyword>Flat Shoes,</S.SectionKeyword>
          <S.SectionKeyword>Loafer,</S.SectionKeyword>
          <S.SectionKeyword>Ankle Boots,</S.SectionKeyword>
          <S.SectionKeyword>Knit,</S.SectionKeyword>
          <S.SectionKeyword>Cardigan,</S.SectionKeyword>
          <S.SectionKeyword>Slacks,</S.SectionKeyword>
          <S.SectionKeyword>Cargo-Pants,</S.SectionKeyword>
          <S.SectionKeyword>Backpack,</S.SectionKeyword>
          <S.SectionKeyword>Mini Bag,</S.SectionKeyword>
          <S.SectionKeyword>Camping Gear,</S.SectionKeyword>
          <S.SectionKeyword>Denim,</S.SectionKeyword>
          <S.SectionKeyword>Pet,</S.SectionKeyword>
          <S.SectionKeyword>Travel,</S.SectionKeyword>
        </S.SectionText>

        <S.SectionTitle>회원님을 위한 추천 상품</S.SectionTitle>
        <S.ProductList>
          <S.SectionList>
            <S.SectionBox>
              <S.SectionImg src={ImgRec1} />
              <S.SectionIc>
                <IcBookmarkDefault />
              </S.SectionIc>
            </S.SectionBox>
            <S.SectionInfo>
              <S.InfoText>
                <S.InfoTitle>
                  ESSENTIAL by EQL
                  <S.InfoSubtitle>Heavy Weight Knit Hoodie (Black)</S.InfoSubtitle>
                </S.InfoTitle>
              </S.InfoText>
              <S.InfoPrice>269,000</S.InfoPrice>
            </S.SectionInfo>
          </S.SectionList>

          <S.SectionList>
            <S.SectionBox>
              <S.SectionImg src={ImgRec2} />
              <S.SectionIc>
                <IcBookmarkDefault />
              </S.SectionIc>
            </S.SectionBox>
            <S.SectionInfo>
              <S.InfoText>
                <S.InfoTitle>
                  ASICS
                  <S.InfoSubtitle>[아식스 본사]젤 소노마 15-50 112339306-402</S.InfoSubtitle>
                </S.InfoTitle>
              </S.InfoText>
              <S.InfoPrice>119,000</S.InfoPrice>
            </S.SectionInfo>
          </S.SectionList>

          <S.SectionList>
            <S.SectionBox>
              <S.SectionImg src={ImgRec3} />
              <S.SectionIc>
                <IcBookmarkDefault />
              </S.SectionIc>
            </S.SectionBox>
            <S.SectionInfo>
              <S.InfoText>
                <S.InfoTitle>
                  LUMENA
                  <S.InfoSubtitle>루메나 MIST STAND 무선 조명 가습기</S.InfoSubtitle>
                </S.InfoTitle>
              </S.InfoText>
              <S.InfoPrice>
                <S.InfoPriceLine>75,000</S.InfoPriceLine>
                <S.InfoDiscount>
                  <S.DiscountRate>27%</S.DiscountRate>
                  <S.DiscountPrice>54,900</S.DiscountPrice>
                </S.InfoDiscount>
              </S.InfoPrice>
            </S.SectionInfo>
          </S.SectionList>

          <S.SectionList>
            <S.SectionBox>
              <S.SectionImg src={ImgRec4} />
              <S.SectionIc>
                <IcBookmarkDefault />
              </S.SectionIc>
            </S.SectionBox>
            <S.SectionInfo>
              <S.InfoText>
                <S.InfoTitle>
                  SINKINGDEEPER
                  <S.InfoSubtitle>Emoji jacquard u-neck cardigan / red</S.InfoSubtitle>
                </S.InfoTitle>
              </S.InfoText>
              <S.InfoPrice>
                <S.InfoPriceLine>78,000</S.InfoPriceLine>
                <S.InfoDiscount>
                  <S.DiscountRate>26%</S.DiscountRate>
                  <S.DiscountPrice>58,032</S.DiscountPrice>
                </S.InfoDiscount>
              </S.InfoPrice>
            </S.SectionInfo>
          </S.SectionList>

          <S.SectionList>
            <S.SectionBox>
              <S.SectionImg src={ImgRec5} />
              <S.SectionIc>
                <IcBookmarkDefault />
              </S.SectionIc>
            </S.SectionBox>
            <S.SectionInfo>
              <S.InfoText>
                <S.InfoTitle>
                  ANOTHER OFFICE
                  <S.InfoSubtitle>22AW Voyager Balmacaan Coat (Graphite)</S.InfoSubtitle>
                </S.InfoTitle>
              </S.InfoText>
              <S.InfoPrice>
                <S.InfoPriceLine>418,000</S.InfoPriceLine>
                <S.InfoDiscount>
                  <S.DiscountRate>30%</S.DiscountRate>
                  <S.DiscountPrice>292,600</S.DiscountPrice>
                </S.InfoDiscount>
              </S.InfoPrice>
            </S.SectionInfo>
          </S.SectionList>

          <S.SectionList>
            <S.SectionBox>
              <S.SectionImg src={ImgRec6} />
              <S.SectionIc>
                <IcBookmarkDefault />
              </S.SectionIc>
            </S.SectionBox>
            <S.SectionInfo>
              <S.InfoText>
                <S.InfoTitle>
                  KHAKIS
                  <S.InfoSubtitle>Full Zip Pocket Hoodie Sage</S.InfoSubtitle>
                </S.InfoTitle>
              </S.InfoText>
              <S.InfoPrice>
                <S.InfoPriceLine>152,000</S.InfoPriceLine>
                <S.InfoDiscount>
                  <S.DiscountRate>20%</S.DiscountRate>
                  <S.DiscountPrice>121,600</S.DiscountPrice>
                </S.InfoDiscount>
              </S.InfoPrice>
            </S.SectionInfo>
          </S.SectionList>

          <S.SectionList>
            <S.SectionBox>
              <S.SectionImg src={ImgRec7} />
              <S.SectionIc>
                <IcBookmarkDefault />
              </S.SectionIc>
            </S.SectionBox>
            <S.SectionInfo>
              <S.InfoText>
                <S.InfoTitle>
                  ANOTHER OFFICE
                  <S.InfoSubtitle>22AW Voyager Balmacaan Coat (Heather Charcoal)</S.InfoSubtitle>
                </S.InfoTitle>
              </S.InfoText>
              <S.InfoPrice>
                <S.InfoPriceLine>418,000</S.InfoPriceLine>
                <S.InfoDiscount>
                  <S.DiscountRate>30%</S.DiscountRate>
                  <S.DiscountPrice>292,600</S.DiscountPrice>
                </S.InfoDiscount>
              </S.InfoPrice>
            </S.SectionInfo>
          </S.SectionList>
        </S.ProductList>
      </S.SectionContainer>
    </>
  );
};

export default SectionContainer;
