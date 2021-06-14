import * as React from 'react';
import styled from 'styled-components';

import media from '../styles/theme/main/media';

type Props = {
  title: string;
  text?: string;
  anchor?: string;
};

const Content = styled.div`
  padding: 0 24px;
  margin: 80px auto 40px;
  text-align: center;
  max-width: 860px;
`;

const Title = styled.h3`
  color: ${({theme}) => theme.colors.primary};
  font-size: 28px;
  line-height: 34px;
  font-weight: 300;

  ${media.tablet`
    font-size: 42px;
    line-height: 50px;
  `}
`;

const Text = styled.p`
  font-weight: normal;
  font-size: 15px;
  line-height: 27px;
  color: ${({theme}) => theme.colors.primary};
`;

const Headline: React.FunctionComponent<Props> = ({
  title,
  text,
  anchor,
}) => (
  <Content id={anchor}>
    <Title>{title}</Title>
    <Text dangerouslySetInnerHTML={{__html: text}} />
  </Content>
);

export default Headline;