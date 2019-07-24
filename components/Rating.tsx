import * as React from 'react';
import styled from 'styled-components';

type Props = {
  rating: number;
};

const Wrapper = styled.div`
  display: block;
  width: 100%;
`;

const Content = styled.div`
  position: relative;
  display: inline-block;

  ::before {
    content: '☆☆☆☆☆';
    letter-spacing: 4px;
    color: ${({theme}) => theme.colors.rating};
  }

  ::after {
    content: '★★★★★';
    letter-spacing: 4px;
    position: absolute;
    top: 0;
    left: 0;
    color: ${({theme}) => theme.colors.rating};
    width: ${({rating}) => rating * 100 / 5}%;
    overflow: hidden;
  }
`;

const Product: React.FunctionComponent<Props> = ({
  rating
}) => (
  <Wrapper>
    <Content rating={rating} />
  </Wrapper>
);

export default Product;