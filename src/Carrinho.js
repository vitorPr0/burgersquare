import { Image, View, StyleSheet, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';


export default function Carrinho(){

    return(
        <View style={css.container}>
            <Image source={ require( "../assets/cesta.png")} style={css.img}></Image>
            <Text style={css.text}> Sua cesta está vazia!</Text>
        </View>
    )
}


const css = StyleSheet.create({
    container:{
        backgroundColor: '#F5EBDC',
        flex: 1,  
        alignItems: "center"  
    },
    img:{
        width: 120,
        height: 120,
        marginTop: 245
    },
    text:{
        fontSize: 20
    }

})