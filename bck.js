import React, {useContext} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { AuthContext } from '../../contexts/auth';

function Home() {

   const { user, signOut } = useContext(AuthContext);
 return (
    <View style={styles.container} >
       <Text>Home</Text>
   <Text>{ user && user.nome }</Text>
   <Button 
   title="Sair da conta"
   onPress={ () => signOut()}
   />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   }
})