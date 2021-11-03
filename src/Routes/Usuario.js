import React, {useState, useContext} from 'react';

import {UsuarioContext} from '../../App';

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';

const Usuario = () => {
  const [text, onChangeText] = useState('');
  const {usuario, setUsuario} = useContext(UsuarioContext);

  function sendUser(t) {
    setUsuario(t);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.text}>Nome:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Digite seu nome"
        />
      </TouchableOpacity>

      {/* <TouchableOpacity>
        <Text style={styles.text}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"></TextInput>
      </TouchableOpacity> */}

      <Button onPress={() => sendUser(text)} title="Alterar" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
    borderRadius: 4,
  },

  text: {
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#003638',
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Usuario;
