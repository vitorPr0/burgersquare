import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export default function Mapa({setMapa}) {


    return (
        <View style={css.geral}>
            <View>
                <TouchableOpacity style={css.sair}  onPress={() => setMapa(false)}>
                <Image style={css.voltar} source={require("../assets/setAV.png")} />
                </TouchableOpacity>
                
            </View>
            <Image style={css.img} source={require("../assets/mapaimg.jpg")} />
        </View>
    )
}


const css = StyleSheet.create({
    img: {
        width: "100%",
        height: 740,
        resizeMode: 'stretch',
    },
    voltar: {

        width: 30,
        height: 30,
        zIndex: 2,

    },
    sair:{
        position: "absolute",
        zIndex: 2,
        marginLeft: 30,
        width: 30,
        height: 30,
        marginTop: 40
    }
})