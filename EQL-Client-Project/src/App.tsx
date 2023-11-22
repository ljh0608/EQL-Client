import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Router from './Router';
import GlobalStyle from './styles/globalStyle';
import { theme } from './styles/theme';
import {IcArrow,IcArrowBlackLeft,IcArrowDown} from './icons/0_icons.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
      <IcArrow/>
      <IcArrowBlackLeft/>
      <IcArrowDown/>
    </ThemeProvider>
  );
}
export default App;
