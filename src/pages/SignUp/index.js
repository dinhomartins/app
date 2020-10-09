import React   from 'react';
import {useState, useContext} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

import { useNavigation} from '@react-navigation/native'

import {AuthContext} from '../../contexts/auth';

function SignIn() {

    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signUp } = useContext(AuthContext);

    function handleSignUp(){
      signUp(email, password, nome)
    }

  return (
    <View style={styles.container}>
      <Image 
      style={styles.Logo}
      source={require('../../../assets/logoapp.png')} />

    <TextInput style={styles.input}
      placeholder="Nome"
      autoCapitalize="none"
      autoCorrect={false}
      placeholderTextColor="#fff" 
      onChangeText={(text) => setNome(text)}
      />

      <TextInput style={styles.input}
      placeholder="Email"
      placeholderTextColor="#fff" 
      autoCapitalize="none"
      autoCorrect={false}
      
      onChangeText={(text) => setEmail(text)}
      />

      <TextInput style={styles.input}
      placeholder="Senha"
      autoCapitalize="none"
      onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity onPress={handleSignUp}
        style={styles.button}
      >
        <Text>Cadastrar</Text>
      </TouchableOpacity>

    </View>
  );
}

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0046a8'
  },
  text: {
    color: '#fff',
    fontSize: 20
  },
  Logo: {
    position: 'absolute',
    top: '5%'
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 0,
    borderBottomWidth: 1,
    margin: 5,
    textAlign: 'center',
    color: "#ffffff",
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    borderRadius: 5
  },
  btnSignUp: {
    marginTop: 30,
    color: '#fff',
    width: '80%',
    height: 40,
    backgroundColor:'#fff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
