import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Home'
import Carrinho from './src/Carrinho'
import Pedidos from './src/Pedidos'


import Perfil from './src/Perfil'
import Comentarios from './src/Comentarios';
import { useState } from 'react';
import Login from './src/Login';
import Cadastro from './src/Cadastro';

const Tab = createBottomTabNavigator()
export default function App() {

 /* const[ logado, setLogado] = useState(false);
  const[ cadastro, setCadastro] = useState(false);

  if(!logado){
   return(<Login setLogado={setLogado} setCadastro={setCadastro} />)
  }
  if(cadastro){
    return(<Cadastro setCadastro={setCadastro} setLogado={setLogado}/>)
  }*/
  return (
    <NavigationContainer>
      <Tab.Navigator  initialRouteName="Home"
         screenOptions={{
          headerStyle: {backgroundColor: '#7A361F'},
          tabBarStyle: {backgroundColor: '#7A361F'},
          tabBarActiveTintColor: "white",

         }}
      >
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Pedidos" component={Pedidos}/>
        <Tab.Screen name="Comentarios" component={Comentarios}/>
        <Tab.Screen name="Perfil" component={Perfil}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}