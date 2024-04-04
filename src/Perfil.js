import { Image, StyleSheet, View, Tab, Screen,TouchableOpacity, Text  } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'



export default function Perfil()
{
    return(
        <View style={css.geral}>
            <Image style={css.voltar} source={require("../assets/setAV.png")}/>
            <Image style={css.logo} source={require("../assets/logo66.png")}/>

            <Image style={css.perfilimg} source={require("../assets/perfilimgc.png")}/>
            
            <TouchableOpacity style={css.boxperfil}>
            <Text style={css.btntext}>Minha conta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={css.boxperfil}>
            <Text style={css.btntext}>Configurações</Text>
            </TouchableOpacity>
            <TouchableOpacity style={css.boxperfil}>
            <Text style={css.btntext}>Suporte</Text>
            </TouchableOpacity>
            <TouchableOpacity style={css.boxperfil}>
            <Text style={css.btntext}>Comentários</Text>
            </TouchableOpacity>
            <TouchableOpacity style={css.boxsair}>
            <Image style={css.porta} source={require("../assets/porta.png")}/>
            <Text style={css.btntext}>Sair da conta</Text>
            </TouchableOpacity>
            

        </View>
    )
}
const css = StyleSheet.create({
    geral: {
        flex:1,
        backgroundColor: "#F5EBDC",
      },
    logo:{
        width: 170,
        height: 70,
        marginTop: 20,
        marginLeft: "30%"
    },
    perfilimg:{
        width: 100,
        height: 100,
        marginLeft: '37%',
        marginTop: 20,
    },
    boxperfil:{
        width: '85%',
        height: '9%',
        backgroundColor: "white",
        borderRadius: 6,
        marginTop:25,
        marginLeft: "7.5%",
        borderWidth: 3,
        borderColor: "#7A361F",
    },
    boxsair:{
        width: '85%',
        height: '9%',
        backgroundColor: "white",
        borderRadius: 6,
        marginTop:25,
        marginLeft: "7.5%",
        borderWidth: 3,
        borderColor: "#FFBB5C",
    },
    btntext:{
        color:"#7A361F",
        textAlign:'center',
        marginTop:13,
        fontSize: 20,
    },
    voltar:{
        width: 30,
        height: 30,
        marginLeft: 30,
        marginTop: 50,
        position:"absolute"

    },
    porta:{
        width: 30,
        height: 30,
        marginLeft: 30,
        marginTop: 13,
        position:"absolute",
        marginLeft: 60,
    }
})