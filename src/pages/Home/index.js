import React, {useContext} from 'react';
import { Button, View, TextSafeAreaView, ScrollView, StyleSheet, Text, Image } from 'react-native';
import { Container, ContentTop, TextTop, TextBlock, SubTextTop, Menu, TextBoxInfor, BoxColorRed, BoxColorBlue, BoxColorOrange,ContentBox,Divisor, TxtBlock1 } from './styled';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icone from 'react-native-vector-icons/FontAwesome5'
import Play from 'react-native-vector-icons/MaterialCommunityIcons'
import Calendar from 'react-native-vector-icons/Entypo'
import Pencil from 'react-native-vector-icons/EvilIcons'
import Trophy from 'react-native-vector-icons/EvilIcons'
import Print from 'react-native-vector-icons/FontAwesome'
import {AuthContext} from '../../contexts/auth'

const image = { uri: "https://i.pinimg.com/474x/aa/cc/4e/aacc4e3613e5180a9e96368aea1f56b7.jpg" };


function HomeScreen({ navigation }) {

  const { user, signOut } = useContext(AuthContext);
  
    return (
      <Container>
        {/* <ImageBackground source={image} style={styles.image}> */}
          <ScrollView style={styles.scrollView}>
            <Divisor>
              <Menu onPress={ ()=> navigation.toggleDrawer() }>
                <Icon name="menu" size={25} color="#0e82b0" />
              </Menu>
  
              <TextTop>Bem vindo M T D</TextTop>
              <SubTextTop>
              
              </SubTextTop>
            </Divisor>
            <ContentBox>
              <BoxColorRed style={styles.shadow} onPress={() => navigation.navigate('Courses')}> 
                <Icone name="book" size={60} color="#db8216" />
                <TextBoxInfor >Cursos</TextBoxInfor>
              </BoxColorRed>

              <BoxColorRed style={styles.shadow} onPress={() => navigation.navigate('Aula')} >
                <Play name="play-circle-outline" size={60} color="#168fdb" />
                <TextBoxInfor>Sala de aula</TextBoxInfor>
              </BoxColorRed>

              <BoxColorRed style={styles.shadow} onPress={() => navigation.navigate('Calendario')}>
                <Calendar name="calendar" size={60} color="#7204e0" />
                <TextBoxInfor >Calendario</TextBoxInfor>
              </BoxColorRed>

              {/* <BoxColorRed>
                
                    <Image
                    style={styles.imgBtn}
                    source={{uri: "https://paragominas.pa.gov.br/wp-content/uploads/2020/04/thumb-83.png"}} />
              </BoxColorRed> */}

              <BoxColorRed style={styles.shadow} onPress={() => navigation.navigate('Provas')}>
                <Pencil name="pencil" size={60} color="#7204e0" />
                <TextBoxInfor >Provas</TextBoxInfor>
              </BoxColorRed>

              <BoxColorRed style={styles.shadow} onPress={() => navigation.navigate('Conquistas')}> 
                <Trophy name="trophy" size={60} color="#04e097" />
                <TextBoxInfor >Conquistas</TextBoxInfor>
              </BoxColorRed>

              <BoxColorRed style={styles.shadow} onPress={() => navigation.navigate('Cadastro')}>
                <Print name="print" size={60} color="#E74C3C" />
                <TextBoxInfor >Relatorio</TextBoxInfor>
              </BoxColorRed>



              
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

  