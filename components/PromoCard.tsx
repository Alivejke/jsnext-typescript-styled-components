import * as React from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';

import media from '../styles/theme/main/media';
import OpenCloseIcon from '../icons/OpenCloseIcon';

type Props = {
  title: string;
  text?: string;
  imageUrl: string;
  imageAlt?: string;
  alignment?: 'left' | 'right';
};

const Content = styled.div`
  padding: 0 24px;
  margin: 0 auto 56px;
  max-width: ${({theme}) => theme.maxWidth};
  display: flex;
  align-items: center;
  flex-direction: column;

  ${media.tablet`
    flex-direction: ${({alignment}) => alignment === 'right' ? 'row-reverse' : 'row'};
  `}
`;

const ImageBlock = styled.div`
  flex: 3;
  margin-left: -24px;
  margin-right: -24px;

  ${media.tablet`
    margin: 0;
  `}
`;

const Image = styled.img`
  width: 100%;
`;

const TextBlock = styled.div`
  flex: 2;
  background: ${({theme}) => theme.colors.fone};;
  border-radius: 4px;
  margin-top: -40px;
  width: 100%;
  box-sizing: border-box;
  padding: 32px 24px;
  cursor: pointer;

  ${media.tablet`
    cursor: auto;
    margin-top: 0;
    padding: 72px 32px;
    margin-${({alignment}) => alignment}: -80px;
  `}
`;

const Title = styled.h4`
  color: ${({theme}) => theme.colors.primary};
  font-weight: normal;
  margin: 0;
  font-size: 18px;
  line-height: 22px;

  ${media.tablet`
    font-size: 24px;
    line-height: 29px;
  `}
`;

const OpenCloseIconStyled = styled(OpenCloseIcon)`
  float: right;
  margin: 4px 4px 0 4px;

  ${media.tablet`
    display: none;
  `}
`;

const Text = styled.p`
  color: ${({theme}) => theme.colors.primary};
  font-weight: normal;
  font-size: 15px;
  line-height: 27px;
  margin: 16px 0;
`;

const TextWrapper = styled.div`
  overflow: hidden;

  ${({showText}) => showText
    ? css`
      max-height: 500px;
      transition: max-height 0.6s ease-in 0s;
    `
    : css`
      max-height: 0;
      transition: max-height 0.3s ease-out;
    `
  }

  ${media.tablet`
    max-height: 500px;
  `}
`;

const Headline: React.FunctionComponent<Props> = ({
  title,
  text,
  imageUrl,
  imageAlt,
  alignment = 'left',
}) => {
  const [showText, setShowText] = useState(false);

  return (
    <Content alignment={alignment}>
      <ImageBlock>
        <Image src={imageUrl} alt={imageAlt} />
      </ImageBlock>

      <TextBlock
        alignment={alignment}
        onClick={() => {
          setShowText(!showText);
        }}>
        <Title>
          {title}
          <OpenCloseIconStyled isOpen={showText} />
        </Title>

        <TextWrapper showText={showText}>
          <Text>{text}</Text>
        </TextWrapper>
      </TextBlock>
    </Content>
  );
}

export default Headline;