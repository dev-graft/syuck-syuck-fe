import { Global, css } from '@emotion/react';

import normalize from './normalize';
import reset from './reset';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${reset}
        ${normalize},
      `}
    />
  );
};

export default GlobalStyle;
