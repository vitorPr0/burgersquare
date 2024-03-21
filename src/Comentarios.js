import { View,Image, StyleSheet,Text,TouchableOpacity } from "react-native";

export default function Comentarios()
{
    return(
        <View style={css.geral}>
             <Image style={css.voltar} source={require("../assets/setAV.png")}/>
            <Image style={css.logo} source={require("../assets/logo66.png")}/>
            <Text style={css.frase}>Comente sua experiência aqui! </Text>
            <TouchableOpacity style={css.btncomentar}>
            <Text style={css.btntext}>Comentar</Text>
            </TouchableOpacity>
            <View style={css.comentar}>
                <Image style={css.perfilimg} source={require("../assets/user.png")}/>
                <Text style={css.nome}>Samara Albuquerque</Text>
                <Text style={css.data}>02/02/2022</Text>
                <View style={css.boxcomitar}>
                <Text style={css.comentarios}>O lanche estava perfeito, a família toda adorou e com certeza vamos repetir!</Text>
                </View>
                <Image style={css.perfilimg} source={require("../assets/lanche1.jpg")}/>
            </View>
            <View style={css.comentar}>
                <Image style={css.perfilimg} source={require("../assets/usermuiec.png")}/>
                <Text style={css.nome}>Luís Alberto Cavalcante</Text>
                <Text style={css.data}>03/02/2022</Text>
                <View style={css.boxcomitar}>
                <Text style={css.comentarios}>Muito bom! Preços bons e uma qualidade incrível, super recomendo!</Text>
                </View>
                <Image style={css.perfilimg} source={require("../assets/lanche2.jpg")}/>
                
            </View>
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
    voltar:{
        width: 30,
        height: 30,
        marginLeft: 30,
        marginTop: 30,
        position:"absolute"

    },
    frase:{
        fontSize: 20,
        textAlign: "center",
        marginLeft: 15,
        marginTop: 40,
        color: "#7A361F",
    },
    btncomentar:{
        width: "30%",
        height: 60,
        borderRadius: 10,
        backgroundColor: "#FFBB5C",
        marginLeft: "63%",
        marginTop: 30,

    },
    btntext:{
        textAlign:"center",
        marginTop: 15,
        fontSize: 20
    },
    comentar:{
        width: "85%",
        height: 220,
        borderWidth: 3,
        borderColor: "#FF8732",
        marginLeft: "7.5%",
        marginTop: 20,
        borderRadius: 6
        
    },
    perfilimg:{
        width: 60,
        height:60,
        marginLeft: 15,
        marginTop: 15,
    },
    nome:{
        position: "absolute",
        marginLeft: 90,
        marginTop: 20,
    },
    data:{
        position: "absolute",
        marginLeft: 90,
        marginTop: 40,
    },
    boxcomitar:{
        width: "90%",
        marginLeft: "5%",
    },
    comentarios:{
        fontSize: 17,
        marginTop: 10,
    },

})