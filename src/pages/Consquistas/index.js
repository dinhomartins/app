import React,{useState, useContext, useEffect} from 'react';
import firebase from '../../services/firebaseConnection';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import {format} from 'date-fns';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';
import {FlatList} from 'react-native-gesture-handler';
import HistoricoList from '../../Components/historicoList';
console.disableYellowBox=true;

function Cadastro() {
    const navigation = useNavigation();

    const[historico, setHistorico] = useState([]);
    const[ saldo, setSaldo] = useState(0);
    const[nome, setNome] = useState('');
    const[pedido, setPedido] = useState('');
    const[endereco, setEndereco] = useState('');
    const{ user } = useContext(AuthContext);
    const uid = user && user.uid;

    useEffect(()=> {
        async function loadList(){
            await firebase.database().ref('pedidos').child(uid).on('value', (snapshot)=> {
                setSaldo(snapshot.val().saldo);
            });

            await firebase.database().ref('pedidos')
            .child(uid)
            .limitToLast(10).on('value', (snapshot)=> {
                setHistorico([]);

                snapshot.forEach((childItem) => {
                    let list = {
                        key: childItem.key,
                        endereco: childItem.val().endereco,
                        pedido: childItem.val().pedido,
                        data: childItem.val().data,
                        saldo: childItem.val().saldo,
                        nome: childItem.val().nome,
                        telefone: childItem.val().telefone,
                        
                    };

                    setHistorico(oldArray => [...oldArray, list]);
                })
            })
        }

    loadList();
    }, []);


 return (
   <View>
        <FlatList
            showsVerticalScrollIndicator={false}
            data={historico}
            keyExtractor={ item => item.key}
            renderItem={ ({ item }) => ( <HistoricoList data={item} /> )}
        />

   </View>
  );
}

export default Cadastro;

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