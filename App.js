import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Home'
import Perfil from './src/Perfil'
import Comentarios from './src/Comentarios';

const Tab = createBottomTabNavigator()
export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator   initialRouteName="Perfil">
        <Tab.Screen name="Home" component={Perfil}/>
      </Tab.Navigator>
    </NavigationContainer>

  );
}