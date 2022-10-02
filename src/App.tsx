import React, { useState } from "react";
import Router from './routes'
import { ThemeProvider } from "@emotion/react";

const theme = {
  colors: {
    primary: 'hotpink'
  }
}
  
const App = () => {
//   const customization = useAppSelector(
//     (state: RootState) => state.customization
//   );

  return (
    <ThemeProvider theme={theme} >
      <Router/>
    </ThemeProvider>
  );
};

export default App;


