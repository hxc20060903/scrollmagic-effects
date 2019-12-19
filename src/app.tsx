import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Scroll } from './scroll-test';

const GlobalStyle = createGlobalStyle({
  ':root': {
    boxSizing: 'border-box',
  },
  '*, :before, :after': {
    boxSizing: 'inherit',
  },
});

const App = (): JSX.Element => (
  <>
    <GlobalStyle />
    <Scroll />
  </>
);
export default App;
