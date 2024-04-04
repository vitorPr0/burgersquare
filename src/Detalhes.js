import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'


export default function Detalhes() {
  return (
    <View style={css.geral}>
        <Image style={css.logo} source={require("../assets/logo66.png")}/>
        <Image style={css.seta} source={require("../assets/setAV.png")}/>
        <Text style={css.text}>Veja mais sobre esse lanche!!</Text>

        <View style={css.box}>
            <Image style={css.img} source={require("../assets/Burger.png")} />
            <View>
                <Text style={css.textinfo}>Nosso combo de hamburgeres artesanais traz dois laches muito recheados por apenas R$29,99 </Text>
                <Text style={css.textinfo}>Junto a ele, você ganha uma lata de refregirante da sua preferência de graça!</Text>
            </View>
            
        </View>
        
    </View>
  )
}

const css=StyleSheet.create({
    geral:{
        flex: 1,
        backgroundColor: "#F5EBDC",
        alignItems: "center"
    },
    logo:{
        width: 170,
        height: 70,
        marginTop: 20
    },
    seta:{
        width: 30,
        height: 30,
        marginRight: 260,
        marginTop: -52
    },
    text:{
        fontSize:20,
        marginTop: 40,
        color:"#7A361F",

    },
    box:{
        width:"80%",
        height:350,
        backgroundColor: "white",
        marginTop: "6%",
        borderWidth: 3,
        borderRadius:6,
        borderColor: "#FFBB5C",

    },
    img:{
        width: '80%',
        height: 150,
        margin:30,
    },
    textinfo:{
        width: "90%",   
        alignItems: "center",
        alignSelf: "center",
        marginTop:3,
        fontSize:15
    }
 
    

})
