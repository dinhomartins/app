import React, {useContext} from 'react';
import { Button, View, TextSafeAreaView, ImageBackground, ScrollView, StyleSheet, Text, Image } from 'react-native';
import { Container, ContentTop, TextTop, TextBlock, SubTextTop, Menu, BoxColorRedTitle, TextBoxInfor, BoxColorRed, BoxColorBlue, BoxColorOrange,ContentBox,Divisor, TxtBlock1 } from './styled';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icone from 'react-native-vector-icons/FontAwesome5'
import Play from 'react-native-vector-icons/MaterialCommunityIcons'
import Calendar from 'react-native-vector-icons/Entypo'
import Pencil from 'react-native-vector-icons/EvilIcons'
import Trophy from 'react-native-vector-icons/EvilIcons'
import Print from 'react-native-vector-icons/FontAwesome'
import {AuthContext} from '../../contexts/auth'

const image = { uri: "https://i.pinimg.com/474x/aa/cc/4e/aacc4e3613e5180a9e96368aea1f56b7.jpg" };
const arconditioner = { uri: "https://www.armazemtatuape.com.br/images/instalacao-ar-condicionado.jpg" };
const eletricista = {uri: "https://opetroleo.com.br/wp-content/uploads/2020/07/construction-8.jpg"};
const cameras = {uri: "https://www.hightechsolutions.com.br/tecnologia/imagens/informacoes/instalacao-e-manutencao-cftv.jpg"}
const geladeira = {uri: "https://www.refrigeracaohelp.com.br/_libs/dsts/4.jpg"};
const maquina = {uri: "https://www.panoramadenegocios.com.br/wp-content/uploads/2020/08/Conserto_maquina-de-lavar_divulga%C3%A7%C3%A3o.jpg"}

function HomeScreen({ navigation }) {

  const { user, signOut } = useContext(AuthContext);
  
    return (
      <Container>
        {/* <ImageBackground source={image} style={styles.image}> */}
          <ScrollView style={styles.scrollView}>
            <Divisor>
              <TextTop>Seja bem vindo { user && user.nome }</TextTop>
            </Divisor>
            <View style={styles.Line} >

            </View>
            <ContentBox>
              <BoxColorRed style={styles.shadow} onPress={() => navigation.navigate('Courses')}> 
                {/* <Icone name="book" size={30} color="#db8216" /> */}
                <ImageBackground source={arconditioner} style={styles.bgBlock} />
              </BoxColorRed>
              <BoxColorRedTitle>
                <TextBoxInfor >Instalação Ar Condicionado</TextBoxInfor>
              </BoxColorRedTitle>
            </ContentBox>

            <ContentBox>
              <BoxColorRed style={styles.shadow} onPress={() => navigation.navigate('Courses')}> 
                {/* <Icone name="book" size={30} color="#db8216" /> */}
                <ImageBackground source={eletricista} style={styles.bgBlock} />
              </BoxColorRed>
              <BoxColorRedTitle>
                <TextBoxInfor >Eletricista residencial e predial</TextBoxInfor>
              </BoxColorRedTitle>
            </ContentBox>

            <ContentBox>
              <BoxColorRed style={styles.shadow} onPress={() => navigation.navigate('Courses')}> 
                {/* <Icone name="book" size={30} color="#db8216" /> */}
                <ImageBackground source={cameras} style={styles.bgBlock} />
              </BoxColorRed>
              <BoxColorRedTitle>
                <TextBoxInfor >CFTV Instalação cameras</TextBoxInfor>
              </BoxColorRedTitle>
            </ContentBox>

            <ContentBox>
              <BoxColorRed style={styles.shadow} onPress={() => navigation.navigate('Courses')}> 
                {/* <Icone name="book" size={30} color="#db8216" /> */}
                <ImageBackground source={geladeira} style={styles.bgBlock} />
              </BoxColorRed>
              <BoxColorRedTitle>
                <TextBoxInfor >Manutenção Geladeira</TextBoxInfor>
              </BoxColorRedTitle>
            </ContentBox>

            <ContentBox>
              <BoxColorRed style={styles.shadow} onPress={() => navigation.navigate('Courses')}> 
                {/* <Icone name="book" size={30} color="#db8216" /> */}
                <ImageBackground source={maquina} style={styles.bgBlock} />
              </BoxColorRed>
              <BoxColorRedTitle>
                <TextBoxInfor >Manutenção Maquina de lavar</TextBoxInfor>
              </BoxColorRedTitle>
            </ContentBox>
          </ScrollView>
          {/* </ImageBackground> */}
      </Container>
    );
  }

  const styles = StyleSheet.create({

    scrollView: {
      width: '100%',
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    text: {
      color: "grey",
      fontSize: 30,
      fontWeight: "bold"
    },
    Line:{
      borderBottomWidth: 1,
      borderBottomColor: '#d9d9d9',
      marginBottom: 20
    },
    bgBlock:{
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: "contain",
      justifyContent: "center",
      alignItems: 'center',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10
    },
    txtBgBlock: {
      color: "grey",
      fontSize: 30,
      fontWeight: "bold"
    },
    shadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    logoHome: {
      width: 100,
      height: 70,
      marginTop: 10,
      marginLeft: 10
    },
    imgBtn: {
      width: '60%',
      height: '60%',
      resizeMode: 'cover',
      borderRadius: 10

    }
    
  });

  export default HomeScreen;

  