import * as React from 'react';
import styled from 'styled-components';

import { ProductType } from '../interfaces';
import Product from './Product';

type Props = {
  products: ProductType[];
};

const Content = styled.div`
  padding: 0 24px;
  margin: 0 auto;
  max-width: 1160px;

  margin-top: 24px;
  margin-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
`;

const Headline: React.FunctionComponent<Props> = ({
  products,
}) => (
  <Content>
    {products.map(product => <Product product={product} key={product.key} />)}
  </Content>
);

export default Headline;