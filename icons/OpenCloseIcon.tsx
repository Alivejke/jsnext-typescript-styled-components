import * as React from 'react';
import styled from 'styled-components';

type Props = {
  isOpen?: boolean;
  className?: string;
};

const Svg = styled.svg`
  transition: all 0.3s ease;
  display: block;
  transform: ${({isOpen}) => isOpen ? 'rotate(45deg)' : 'none'};
`;

const OpenCloseIcon: React.FunctionComponent<Props> = ({
  isOpen = false,
  className,
}) => (
  <Svg
    className={className}
    isOpen={isOpen}
    xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
    <path d="M7 1.667v10.666M1.667 7h10.666" stroke="#00A3E9" strokeWidth="1.8" strokeLinecap="square"></path>
  </Svg>
);

export default OpenCloseIcon;