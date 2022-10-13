import React, { useState } from 'react';

import { ThemeProvider } from '@emotion/react';
import { RecoilRoot } from 'recoil';

import Router from './routes';
import GlobalStyle from '@/styles/GlobalStyle';
import { theme } from '@/styles/theme';

const App = () => {
  //   const customization = useAppSelector(
  //     (state: RootState) => state.customization
  //   );

  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <GlobalStyle />
        <Router />
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default App;
