import React, {createContext, useState} from 'react';
// export pois vou utilizar depois
// pegará as informações e as passará, as administrarás
export const UsuarioContext = createContext();

// será declarado dentro do context
// onde usarei, quem poderá usar, especificamente
const UsuarioProvider = ({children}) => {
  const [usuario, setUsuario] = useState('');

  return (
    // usado pra validar contexto
    //todos dos contexto virão no children e virão no provider
    <UsuarioContext.Provider value={{usuario, setUsuario}}>
      {children}
    </UsuarioContext.Provider>
  );
};

export default UsuarioProvider;
