import * as React from 'react';
import styled from 'styled-components';

import media from '../styles/theme/main/media';
import { ProductType } from '../interfaces';
import Trademark from './Trademark';
import { formatCents } from '../helpers/money';
import ArrowIcon from '../icons/ArrowIcon';
import Button from '../styles/mixins/Button';
import Rating from './Rating';

type Props = {
  product: ProductType;
};

const Wrapper = styled.div`
  width: 100%;
  padding: 12px;
  box-sizing: border-box;

  ${media.tablet`
    width: 50%;
  `}

  ${media.desktop`
    width: 25%;
  `}
`;

const Content = styled.div`
  box-shadow: 0 0 20px 0 rgba(0,0,0, 0.1);
  border-radius: 8px;
  background: ${({theme}) => theme.colors.contrast};
  padding: 8px 24px 24px;
  overflow: hidden;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const TrademarkStyled = styled(Trademark)`
  margin-bottom: 10px;
`;

const ImageLink = styled.a`
  display: block;
  margin: 0 auto;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  padding: 8px 0;
  height: 130px;
`;

const Title = styled.h4`
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 10px;
  color: ${({theme}) => theme.colors.primary};
  font-weight: 300;
  flex-grow: 2;

  ${media.tablet`
    font-size: 24px;
    line-height: 29px;
  `}
`;

const Description = styled.p`
  font-size: 15px;
  line-height: 27px;
  margin-bottom: 10px;
  color: ${({theme}) => theme.colors.primary};
  font-weight: 300;
  flex-grow: 2;
  margin: 0;
`;

const Price = styled.div`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 10px;
  color: ${({theme}) => theme.colors.primary};
  font-weight: normal;
  margin: 16px 0;

  ${media.tablet`
    font-size: 18px;
    line-height: 24px;
  `}
`;

const ButtonStyled = styled(Button)`
  width: 140px;
  margin-bottom: 10px;
`;

const Link = styled.a`
  font-weight: normal;
  font-size: 15px;
  line-height: 27px;
  text-decoration: none;
  color: ${({theme}) => theme.colors.gray};

  :hover {
    color: ${({theme}) => theme.colors.brandFade};
  }
`;

const Product: React.FunctionComponent<Props> = ({
  product
}) => (
  <Wrapper>
    <Content>
      <TrademarkStyled />
      <ImageLink href="#">
        <Image src={product.image.url} alt={product.image.altText} />
      </ImageLink>
      <Title>{product.name}</Title>
      <Description>{product.description}</Description>
      <Rating rating={product.stars} />
      <Price>{formatCents(product.price.centAmount, product.price.currencyCode)}</Price>
      <ButtonStyled href="#">Buy now</ButtonStyled>
      <Link href="#">Learn more <ArrowIcon /></Link>
    </Content>
  </Wrapper>
);

export default Product;