import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Home'
<<<<<<< HEAD
import Carrinho from './src/Carrinho'
import Pedidos from './src/Pedidos'
=======
import Perfil from './src/Perfil'
import Comentarios from './src/Comentarios';
>>>>>>> 4ceefd085920fd356d6e9eabbb158907f5a388b0

const Tab = createBottomTabNavigator()
export default function App() {
  return (
<<<<<<< HEAD
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

=======
    <NavigationContainer >
      <Tab.Navigator   initialRouteName="Perfil">
        <Tab.Screen name="Home" component={Perfil}/>
>>>>>>> 4ceefd085920fd356d6e9eabbb158907f5a388b0
      </Tab.Navigator>




         


      
         

    </NavigationContainer>

  );
}