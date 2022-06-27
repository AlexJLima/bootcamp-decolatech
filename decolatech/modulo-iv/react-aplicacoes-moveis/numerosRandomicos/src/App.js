import React, {useState} from 'react';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';

const APP =() => {
  const [numero, setNumero] = useState(0);

  function handleNumero() {
    const novo_numero = Math.floor(Math.random() * 100);
    setNumero(novo_numero);
  }

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.numero}>{numero}</Text>
      <TouchableOpacity onPress={handleNumero}>
        <Text style={style.botao}>Gerar Número</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );_
}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },

  numero: {
    fontSize: 38,
    color: 'white',
    fontWeight: 'bold',
  },

  botao: {
    backgroundColor: 'white',
    width: '80%',
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default APP;