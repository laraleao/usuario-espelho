import React, {useContext} from 'react';

import {View, Text} from 'react-native';
import {UsuarioContext} from '../../App';

const Home = () => {
  const {usuario} = useContext(UsuarioContext);

  return (
    <View>
      <Text style={{fontSize: 25, color: 'black'}}>Bem Vind@ {usuario}</Text>
    </View>
  );
};

export default Home;
