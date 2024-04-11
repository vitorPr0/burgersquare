import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
import Home from './src/Home'
import Carrinho from './src/Carrinho'
import Pedidos from './src/Pedidos'
import Perfil from './src/Perfil'
import Comentarios from './src/Comentarios';
import Detalhes from './src/Detalhes';


import Login from './src/Login';
import Cadastro from './src/Cadastro';
import Compras from './src/Compras';


const Tab = createBottomTabNavigator()
export default function App() {

  

  const[ logado, setLogado] = useState(false);
  const[cadastro, setCadastro] = useState(false);

    if(!logado) {
      return(<Login setLogado={setLogado} setCadastro={setCadastro}/> )
    }

    if(cadastro){
      return( <Cadastro setCadastro={setCadastro} setLogado={setLogado}/> )
    }

    


  return (
    <NavigationContainer>
      <Tab.Navigator  initialRouteName="Home"
         screenOptions={{
          headerStyle: {backgroundColor: '#7A361F'},
          tabBarStyle: {backgroundColor: '#7A361F'},
          tabBarActiveTintColor: "#FFBB5C",
          tabBarInactiveTintColor:"white"

         }}
      >
        <Tab.Screen name="Home" component={Home}
         options={{
            tabBarLabel: 'Home',
            tabBarLabelStyle: {fontSize: 15},
            tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        />

        <Tab.Screen name="Pedidos" component={Pedidos}
          options={{
            tabBarLabel: 'Pedidos',
            tabBarLabelStyle: {fontSize: 15},
            tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="food" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen name="Perfil" component={Perfil}
           options={{
            tabBarLabel: 'Perfil',
            tabBarLabelStyle: {fontSize: 15},
            tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
          
        />

       
        </Tab.Navigator>
        </NavigationContainer>

  );
}