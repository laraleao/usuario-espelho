import React from 'react';
import UsuarioProvider from '../../App';
import Usuario from './Usuario';
import Home from './Home';

const Context = () => {
  return (
    <>
      <UsuarioProvider>
        <Home />
        <Usuario />
      </UsuarioProvider>
    </>
  );
};

export default Context;
