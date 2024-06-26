import React, { useState } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity, Alert } from 'react-native'
import Pedidos from './Pedidos'

export default function Compras({setCompras}) {
    const [comprar, setComprar] = useState(false);
    function Comprar(){
        setComprar(true);
        alert("Compra realizada com sucesso! Vá para a página de pedidos para mais informações.")
    }

  return (
    <View style={css.container}>


            <View style={css.flex}>
                <TouchableOpacity style={css.buton} onPress={() => setCompras(false)}>
                    <Image style={css.seta} source={require("../assets/setAV.png")} />
                </TouchableOpacity>
                <Image style={css.logo} source={require("../assets/logo66.png")} />
            </View>

      
        <Text style={css.Text} >Finalizando sua compra!</Text>
        <View style={css.box}>

            <Image style={css.img} source={require("../assets/Burger.png")} />
            <View  style={css.boxtext}>
                <Text style={css.info}>Valor: R$29,00</Text>
                <Text style={css.info}>Frete: R$6,50</Text>
                <Text style={css.info}>Valor Total: R$35,50</Text>
                <Text style={css.info}>Forma de Pagamento: Pix</Text>

                <View style={css.linha}></View>

                <Text style={css.info}>Endereço Cadastrado:</Text>
                <Text style={css.info}>Av. Aquilino F. 212</Text>

                <View style={css.linha}></View>

                <Text style={css.info}>Número para Contato</Text>
                <Text style={css.info}>00000-0000</Text>
            </View>

            <TouchableOpacity style={css.btn} onPress={Comprar}>
                <Text style={css.btntext} >Comprar</Text>
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
        height: 480,
        backgroundColor: "red",
        marginTop: "6%",
        backgroundColor: "white",
        borderWidth: 3,
        borderRadius:6,
        borderColor: "#FFBB5C",
    },
    logo: {
        width: 170,
        height: 70,
        marginTop: 20,
        marginRight: 75
    },
    seta: {
        width: 35,
        height: 35,
    },
    Text:{
        fontSize:20,
        marginTop: 40,
        color:"#7A361F"
    },
    img:{
        width: '80%',
        height: 150,
        margin:30,
    },
    info:{
        fontSize:15,
        marginLeft:30,
    },
    btn:{
        backgroundColor: "white",
        width: '30%',
        height: 50,
        borderWidth: 3,
        borderColor: "#FFBB5C",
        backgroundColor: "#FFBB5C",
        borderRadius:6,
        alignItems: "center",
        justifyContent: "center",
        marginTop:8,
        marginLeft: "60%"
    },
    btntext:{
        fontSize:18,
        color:"#7A361F"
    },
    linha:{
        width: "90%",
        height:3,
        backgroundColor:"#FFBB5C",
        marginLeft:"5%",
        margin:5
    },
    buton:{
        width: 50,
        height: 40,
        marginRight: 40,
        marginTop: 40,

    },
    flex:{
        display:"flex",
        flexDirection: "row",
    }
})