import { Text, View, StyleSheet, Button, TouchableOpacity, Image } from "react-native";
import Mapa from "./Mapa";
import { useState } from 'react';

export default function Pedidos({navigation}){ 

    const [mapa, setMapa] = useState(false);

    if(mapa) {
        return (<Mapa setMapa={setMapa}/>)
        
    }
    return(
        <View style={css.container}>
           
            <Image style={css.logo} source={require("../assets/logo66.png")}/>
            <View>
            <Image style={css.seta} source={require("../assets/setAV.png")}/>
            </View>


            <TouchableOpacity style={css.hist} >
                <Text style={css.texth}>Histórico</Text>
            </TouchableOpacity>
            <View style={css.box}>
                <Image source={ require( "../assets/Burger.png")}  style={css.img}></Image>
                <TouchableOpacity style={css.btnum} onPress={() =>  setMapa(true)} >
                    <Text style={css.text}>Acompanhar pedido</Text>
                </TouchableOpacity>
                <TouchableOpacity style={css.btn} >
                    <Text style={css.text}>Detalhes</Text>
                </TouchableOpacity>
                
            </View>
            
        </View>
    )
}

const css = StyleSheet.create({
    container:{
        backgroundColor: '#F5EBDC',
        flex: 1,
        alignItems: 'center'

    },
    box:{
        width: '80%',
        height: 400,
        backgroundColor: "white",
        borderWidth: 3,
        borderColor: '#FFBB5C',
        borderRadius:6,
        marginTop:40

    },
    hist:{
        backgroundColor: "white",
        width: '30%',
        height: 60,
        marginTop: 40,
        marginLeft: 200,
        borderWidth: 3,
        borderColor: '#FFBB5C',
        borderRadius:6,
        alignItems: "center",
        justifyContent: "center",
    },
    texth:{
        fontSize:20,
        color: "#7A361F"
       
    },
    img:{
        width: '80%',
        height: 160,
        margin:30,

    },
    btnum:{
        width: '80%',
        height: 50,
        borderWidth: 3,
        borderRadius:6,
        backgroundColor:'#FFBB5C',
        borderColor: '#FFBB5C',
        marginTop: 10,
        marginLeft: 30
    },
    btn:{
        width: '80%',
        height: 50,
        borderWidth: 3,
        borderRadius:6,
        borderColor:'#FFBB5C',
        marginTop: 10,
        marginLeft: 30
    },
    text:{
        fontSize:20,
        textAlign: "center",
        marginTop:7,
        color: "#7A361F"
    },
    logo:{
        width: 170,
        height: 70,
        marginTop: 20,
        alignItems: "center",
      
    },
    seta:{
        width: 30,
        height: 30,
        marginRight: 260,
        marginTop: -52
       

    },
 
})