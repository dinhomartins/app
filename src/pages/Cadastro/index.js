import React,{useState, useContext, useEffect} from 'react';
import firebase from '../../services/firebaseConnection';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import {format} from 'date-fns';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';
import {NavigationContainer} from '@react-navigation/native';

function Cadastro() {
    const navigation = useNavigation();
    const[nome, setNome] = useState('');
    const[telefone, setTelefone] = useState('');
    const[endereco, setEndereco] = useState('');
    const[pedido, setPedido] = useState('');
    const{ user:usuario } = useContext(AuthContext);
    const[saldo, setSaldo] = useState('');



    async function handlerAdd(){
        let uid = usuario.uid;
        // cria o banco de dados                 banco           filho  adiciona
        let key = await firebase.database().ref('pedidos').child(uid).push().key
        // adiciona a chanve relacionada a uid o set adiciona os proximos campos
        await firebase.database().ref('pedidos').child(uid).child(key).set({
            endereco: endereco,
            pedido, pedido,
            data: format(new Date(), "dd/MM/yy"),
            usaurio: usuario.nome,
            nome: nome,
            telefone: telefone
        })

        navigation.navigate('Home');
    }

    async function teste(){
        let uid = usuario.uid;
        // cria o banco de dados                 banco           filho  adiciona
        let key = await firebase.database().ref('pedidos').child(uid).push().key
        // adiciona a chanve relacionada a uid o set adiciona os proximos campos
        await firebase.database().ref('pedidos').child(uid).child(key).set({
            endereco: endereco,
            pedido, pedido,
            data: format(new Date(), "dd/MM/yy"),
            usaurio: usuario.nome,
            nome: nome,
            telefone: telefone
        })

        navigation.navigate('Home');
    }




 return (

       <View style={styles.ViewContent}>

        <Text>Nome:</Text>
        <TextInput style={styles.input}
            autoCapitalize="none"
            placeholderTextColor="#000" 
            onChangeText={ (texto) => setNome(texto)}
            value={nome}
            />

        <Text>Endereco</Text>
        <TextInput style={styles.input}
            autoCapitalize="none"
            placeholderTextColor="#000" 
            onChangeText={ (texto) => setEndereco(texto)}
            value={endereco}
            />

        <Text>Telefone</Text>
        <TextInput style={styles.input}
            autoCapitalize="none"
            placeholderTextColor="#000" 
            onChangeText={ (texto) => setTelefone(texto)}
            value={telefone}
            />

        <Text>Pedido</Text>
        <TextInput style={styles.input}
            placeholderTextColor="#000" 
            autoCorrect={false}
            onChangeText={(texto) => setPedido(texto)}
            value={pedido}
            />

        <Text>Valor</Text>
        <TextInput style={styles.input}
            placeholderTextColor="#000" 
            autoCorrect={false}
            onChangeText={(texto) => setSaldo(texto)}
            value={saldo}
            />

        <TouchableOpacity onPress={teste}
            style={styles.button}>
            <Text style={styles.txtBtn}>Fazer Pedido</Text>
        </TouchableOpacity>
       </View>

  );
}

export default Cadastro;

const styles = StyleSheet.create({
    button: {
        width:  '90%',
        height: 40,
        backgroundColor: '#0046a8',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ViewContent: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50
    },
    txtBtn: {
        color: '#fff',
        fontSize: 16
    },
    input: {
        height: 40,
        color: '#000',
        width: '90%',
        borderColor: '#0046a8',
        borderWidth: 1,
        
    }
})