import React, { useState } from 'react';

import { ThemeProvider } from '@emotion/react';
import { RecoilRoot } from 'recoil';

import Router from './routes';

const theme = {
  colors: {
    primary: 'hotpink',
  },
};

const App = () => {
  //   const customization = useAppSelector(
  //     (state: RootState) => state.customization
  //   );

  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default App;

