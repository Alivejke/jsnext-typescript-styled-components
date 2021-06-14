import * as React from 'react';
import styled from 'styled-components';

import media from '../styles/theme/main/media';

type Props = {
  title: string;
  text: string;
  imageUrl: string;
  anchor?: string;
};

const WideImage = styled.div`
  background-image: ${props => props.imageUrl ? `url(${props.imageUrl})` : 'none'};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 500px;
`;

const Content = styled.div`
  max-width: ${({theme}) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;
`;

const TextBlock = styled.div`
  padding-top: 80px;
  width: 40%;
`;

const Title = styled.h2`
  font-size: 28px;
  line-height: 34px;
  color: ${({theme}) => theme.colors.contrast};
  font-weight: 300;
  margin: 0 0 30px 0;

  ${media.tablet`
    font-size: 42px;
    line-height: 50px;
  `}
`;

const Text = styled.p`
  color: ${({theme}) => theme.colors.contrast};
  font-weight: normal;
  font-size: 15px;
  line-height: 27px;
`;

const Link = styled.a`
  font-weight: normal;
  font-size: 15px;
  line-height: 27px;
  text-decoration: none;
  color: ${({theme}) => theme.colors.contrast};

  :hover {
    color: ${({theme}) => theme.colors.brandFade};
  }
`;

const FlavorCollectionsBillboard: React.FunctionComponent<Props> = ({
    title,
    text,
    imageUrl,
    anchor,
}) => (
  <WideImage imageUrl={imageUrl}>
    <Content>
      <TextBlock>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <Link href={`#${anchor}`}>Learn more &rsaquo;</Link>
      </TextBlock>
    </Content>
  </WideImage>
);

export default FlavorCollectionsBillboard;