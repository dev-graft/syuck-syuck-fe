import React, { useState } from 'react';
import Router from './routes';
import { ThemeProvider } from '@emotion/react';
import { RecoilRoot } from 'recoil';

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

