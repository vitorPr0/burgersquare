import { Text, View, StyleSheet, Button, TouchableOpacity, Image } from "react-native";

export default function Pedidos()
{
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
                <TouchableOpacity style={css.btnum} >
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
        borderColor: '#FF8732',
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
        borderColor: '#FF8732',
        borderRadius:6,
    },
    texth:{
        fontSize:20,
        padding:14
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
        backgroundColor:'#FF8732',
        borderColor: '#FF8732',
        marginTop: 10,
        marginLeft: 30
    },
    btn:{
        width: '80%',
        height: 50,
        borderWidth: 3,
        borderRadius:6,
        borderColor: '#FF8732',
        marginTop: 10,
        marginLeft: 30
    },
    text:{
        fontSize:20,
        textAlign: "center",
        marginTop:7
    },
    logo:{
        width: 170,
        height: 70,
        marginTop: 20,
        alignItems: "center"
    },
    seta:{
        width: 30,
        height: 30,
        marginRight: 260,
        marginTop: -52
       

    },
 
})