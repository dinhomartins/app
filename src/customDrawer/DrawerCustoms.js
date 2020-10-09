import React, {useContext} from 'react';

import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import {Icon, Container, Header, Footer, Content, Right, Image, Button, ListItem, Thumbnail, Left, List, Body, H3, Text} from 'native-base';
import {DrawerActions} from '@react-navigation/native';
import {Switch} from 'react-native-paper';

import { AuthContext } from '../contexts/auth';
import {TouchableOpacity} from 'react-native-gesture-handler';


function CustomDrawer({...props}) {
// chamada do contexto para utilização
const { user, signOut } = useContext(AuthContext);

 return (
    <Container>
        <Header style={{baackgroundColor: '#ffffff', borderBottomWidth: 0}} >
            <Right >
                <Button transparet onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())} >
                <Icon name="menu" style={{width: 20, marginTop: 20}}  />
                </Button>
            </Right>
        </Header>
        <Content>
                <ListItem thumbnail>
                    <Left>
                        <Thumbnail source={{uri: 'https://www.hellomagazine.com/imagenes/homes/2020022185175/love-island-jess-home-photos/0-409-856/jess-love-island-home-t.jpg'}} />
                    </Left>
                    <Body>         
                    <Text>{ user && user.nome }</Text>
                    <Text note>{ user && user.email }</Text>    
                        <Text note>Software Engineer</Text>
                    </Body>
                </ListItem>
            <DrawerContentScrollView {...props}>              
                <DrawerItemList {...props}  />              
                <DrawerItem label="Perfil"
                icon={({color, size}) => {
                    <Icon name="star" style={{fontSize: size, color: color}} />  
                    }}  
                    onPress={() =>props.navigation.navigate('Details')}
                />
                <DrawerItem label="Meus Cursos"
                icon={({color, size}) => {
                    <Icon name="star" style={{fontSize: size, color: color}} />  
                    }}  
                    onPress={() =>props.navigation.navigate('Details')}
                />               
            </DrawerContentScrollView>
            <List >
                <ListItem>
                    <Body>
                        <Text>Dark Mode</Text>
                    </Body>
                    <Right>
                        <Switch value={true} />
                    </Right>
                </ListItem>
            </List>       
        </Content>
            <Footer style={{backgroundColor: '#0046a8'}} >
                <TouchableOpacity style={{height: '100%',  color: '#fff', alignItems: 'center', justifyContent: 'center'}}
                onPress={ () => signOut()}>
                <Text style={{color: '#fff'}} >Sair</Text>
                </TouchableOpacity>
            </Footer>     
    </Container>
  );
}
export default CustomDrawer;
