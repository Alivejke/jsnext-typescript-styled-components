import * as React from 'react';
import styled from 'styled-components';

import media from '../styles/theme/main/media';
import Button from '../styles/mixins/Button';

type Props = {
  title: string;
  imageUrl: string;
  imageAlt?: string;
  hasNegativeOffset?: boolean;
  alignment?: 'left' | 'right';
  anchor?: string;
};

const Wrapper = styled.div`
  padding: 0 24px;
  margin: 0 auto;
  max-width: ${({theme}) => theme.maxWidth};
  margin-top: ${({hasNegativeOffset}) => hasNegativeOffset ? '-48px' : '0'};
`;

const Content = styled.div`
  box-shadow: 0 0 20px 0 rgba(0,0,0,0.1);
  border-radius: 8px;
  background: ${({theme}) => theme.colors.contrast};
  padding: 32px;
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  flex-direction: column;

  ${media.tablet`
    flex-direction: ${({alignment}) => alignment === 'right' ? 'row' : 'row-reverse'};
  `}
`;

const ImageBlock = styled.div`
  flex: 1;
  overflow: hidden;
  text-align: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 225px;

  ${media.tablet`
    max-height: 550px;
  `}
`;

const TextBlock = styled.div`
  padding: 16px 0px;
  flex: 1;
  text-align: center;

  ${media.tablet`
    text-align: inherit;
  `}
`;

const Title = styled.h3`
  color: ${({theme}) => theme.colors.primary};
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 24px;
  line-height: 34px;

  ${media.tablet`
    font-size: 32px;
    line-height: 39px;
  `}
`;

const ExploreBlock: React.FunctionComponent<Props> = ({
  title,
  imageUrl,
  imageAlt,
  hasNegativeOffset = false,
  alignment = 'left',
  anchor,
}) => (
  <Wrapper hasNegativeOffset={hasNegativeOffset}>
    <Content alignment={alignment}>
      <TextBlock>
        <Title>{title}</Title>
        <Button href={`#${anchor}`}>Shop now</Button>
      </TextBlock>

      <ImageBlock>
        <Image src={imageUrl} alt={imageAlt} />
      </ImageBlock>
    </Content>
  </Wrapper>
);

export default ExploreBlock;