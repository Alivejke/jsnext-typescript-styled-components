import { css } from 'styled-components';

import breakpoints from './breakpoints';

const media = Object
  .keys(breakpoints)
  .reduce<any>((acc, breakpoint) => {
    acc[breakpoint] = (...args) => css`
      @media (min-width: ${breakpoints[breakpoint]}) {
        ${css(...args)}
      }
    `;

    return acc;
  }, {});

export default media;