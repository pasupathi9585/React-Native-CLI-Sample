import React from 'react';
import GlobalProvider from './src/context/Provider';
import AppNavication from './src/navigations/index';

const App = () => {
  return (
    <GlobalProvider>
      <AppNavication/>
    </GlobalProvider>
  );
};

export default App;
