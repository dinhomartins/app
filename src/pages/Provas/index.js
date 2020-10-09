import React,{useState, useContext, useEffect} from 'react';
import firebase from '../../services/firebaseConnection';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import {format} from 'date-fns';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';
import {FlatList} from 'react-native-gesture-handler';
import HistoricoList from './historicoList';
import HistoricoList2 from './historicoList';
console.disableYellowBox=true;

function Provas() {
    const navigation = useNavigation();

    const[historico2, setHistorico2] = useState([]);
    const[ saldo, setSaldo] = useState(0);
    const[nome, setNome] = useState('');
    const[pedido, setPedido] = useState('');
    const[endereco, setEndereco] = useState('');
    const{ user } = useContext(AuthContext);
    const uid = user && user.uid;
    const[usuarios, setUsuarios] = useState([]);
    

    useEffect(()=> {
        async function loadList2(){
            // await firebase.database().ref('users').child(uid).on('value', (snapshot)=> {
            //     setSaldo(snapshot.val().saldo);
            // });

            await firebase.database().ref('pedidos').child(uid).on('value', (snapshot) => {

                snapshot.forEach((childItem) => {
                    let data = {
                        key: childItem.key,
                        endereco: childItem.val().endereco,
                        pedido: childItem.val().pedido,
                        data: childItem.val().data,
                        saldo: childItem.val().saldo,
                        nome: childItem.val().nome,
                        telefone: childItem.val().telefone,
                    };
                    setUsuarios(oldArray => [...oldArray, data]);
                })
            })
            await firebase.database().ref('users').child(uid).child(key).on('value', (snapshot) => {

                snapshot.forEach((childItem) => {
                    let data = {
                        key: childItem.key,
                        nome: childItem.val().nome,
                        endereco: childItem.val().endereco 
                    };
                    setHistorico2(oldArray => [...oldArray, data]);
                })
            }) 
        }
        loadList2();
    }, []);


 return (
   <View>
        <FlatList
            showsVerticalScrollIndicator={false}
            data={usuarios}
            keyExtractor={ item => item.key}
            renderItem={ ({ item }) => ( <HistoricoList data={item} /> )}
        />

<FlatList
            showsVerticalScrollIndicator={false}
            data={historico2}
            keyExtractor={ item => item.key}
            renderItem={ ({ item }) => ( <HistoricoList2 data={item} /> )}
        />

   </View>
  );
}

export default Provas;

const styles = StyleSheet.create({
    button: {
        width: 250,
        height: 40,
        backgroundColor: 'red',
        marginTop: 50
    },
    input: {
        borderWidth: 1,
        borderColor: 'blue',
        height: 60,

    }
})