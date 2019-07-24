import * as React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const Content = styled.div`
  font-weight: normal;
  font-size: 12px;
  line-height: 25px;
  text-align: center;
  color: ${({theme}) => theme.colors.gray};
`;

const Sign = styled.sup`
  font-size: 8px;
`;

const Trademark: React.FunctionComponent<Props> = ({ className }) => (
  <Content className={className}>
    <em>my</em>
    blu
    <Sign>TM</Sign>
  </Content>
);

export default Trademark;
