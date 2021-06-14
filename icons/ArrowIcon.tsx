import * as React from 'react';

type Props = {
  className?: string;
};

const ArrowIcon: React.FunctionComponent<Props> = ({
  className,
}) => (
  <svg
    className={className}
    width="7" height="11" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
    <path d="M1 0l5.4 5.4L1 10.8" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>
);

export default ArrowIcon;