import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Home'
import Carrinho from './src/Carrinho'
import Pedidos from './src/Pedidos'

const Tab = createBottomTabNavigator()
export default function App() {
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

      </Tab.Navigator>




         


      
         

    </NavigationContainer>

  );
}


