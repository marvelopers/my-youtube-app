import React from 'react';
import { ModalController } from './components/modals/ModalController';
import { AppRouter } from './routes';
import GlobalStyles from './styles/GlobalStyle';

const App = () => (
  <>
    <GlobalStyles />
    <ModalController />
    <AppRouter />
  </>
);

export default App;
