import React   from 'react';
import {useState, useContext} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../contexts/auth';

function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useContext(AuthContext);


  function handleLogin(){
    signIn(email, password);
  }

  return (
    <View style={styles.container}>
      <Image 
      style={styles.Logo}
      source={require('../../../assets/logoapp.png')} />
      <TextInput style={styles.input}
      placeholder="Email"
      autoCapitalize="none"
      placeholderTextColor="#fff" 
      autoCorrect={false}
      onChangeText={(text) => setEmail(text)}
      />
      <TextInput style={styles.input}
      placeholder="Senha"
      autoCapitalize="none"
      placeholderTextColor="#fff" 
      onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity onPress={handleLogin}
        style={styles.button}
      >
        <Text>Logar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={ () => navigation.navigate('SignUp')}

      style={styles.btnSignUp}>
        <Text>Criar uma conta</Text>
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
    top: '10%'
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
