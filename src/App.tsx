import React from 'react';
import { ModalController } from './components/modals/ModalController';
import HomePage from './components/page/HomePage';
import GlobalStyles from './styles/GlobalStyle';

const App = () => (
  <>
    <GlobalStyles />
    <ModalController />
    <HomePage />
  </>
);

export default App;
