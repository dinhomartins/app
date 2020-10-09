import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function HistoricoList({ data }) {
 return (
   <View style={styles.container}>
        <View style={styles.divisor} >
          
          <View style={styles.ViewContent}>
            <Text style={styles.TextList}>Nome:</Text> 
            <Text style={styles.txt} > {data.nome}</Text>
          </View>
          <View style={styles.ViewContent}>
            <Text style={styles.TextList}>Pedido:</Text> 
            <Text style={styles.txt} > {data.pedido}</Text>
          </View>

          <View style={styles.ViewContent}>
            <Text style={styles.TextList}>Telefone:</Text> 
            <Text style={styles.txt} > {data.telefone}</Text>
          </View>



        </View>
   </View>
  );
}
export default  HistoricoList;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  TextList: {
    fontWeight: 'bold',
    fontSize: 16,

    marginLeft: 10
  },
  divisor: {
    marginTop: 20,
    backgroundColor: '#e8e8e8'
  },
  txt: {
    
    fontSize: 16,
    color: '#a30049'
  },
  ViewContent: {
    flexDirection: 'row',
    alignItems: 'center',
    
  }
})