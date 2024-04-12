import { View, Image, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";

export default function Comentarios({setComentarios}) {

    return (
        <View style={css.geral}>

            <View style={css.flex}>
            <TouchableOpacity style={css.buton} onPress={() => setComentarios(false)}>
                <Image style={css.seta} source={require("../assets/setAV.png")} />
            </TouchableOpacity>
            <Image style={css.logo} source={require("../assets/logo66.png")} />
            </View>
            <Text style={css.frase}>Comente sua experiência aqui! </Text>
            <TouchableOpacity style={css.btncomentar}>
                <Text style={css.btntext}>Comentar</Text>
            </TouchableOpacity>
            <ScrollView>
                <View style={css.comentarios}>
                    <View style={css.perfil}>
                        <Image style={css.perfilimg} source={require("../assets/usersamara.png")} />
                        <View style={css.perfilInfo}>
                            <Text style={css.perfilNome}>Samara Albuquerque</Text>
                            <Text style={css.data}>08/02/2022</Text>
                        </View>
                    </View>
                    <View style={css.comentario}>
                        <Text>O lanche estava perfeito, a família toda adorou e com certeza vamos repetir!</Text>
                        <Image style={css.comentarioImg} source={require("../assets/lanche1.jpg")} />
                    </View>
                </View>
                <View style={css.comentarios}>
                    <View style={css.perfil}>
                        <Image style={css.perfilimg} source={require("../assets/user.png")} />
                        <View style={css.perfilInfo}>
                            <Text style={css.perfilNome}>Luís Alberto Cavalcante</Text>
                            <Text style={css.data}>07/02/2022</Text>
                        </View>
                    </View>
                    <View style={css.comentario}>
                        <Text>Muito bom! Preços bons e uma qualidade incrível, super recomendo!</Text>
                        <Image style={css.comentarioImg} source={require("../assets/lanche2.jpg")} />
                    </View>
                </View>
                <View style={css.comentarios}>
                    <View style={css.perfil}>
                        <Image style={css.perfilimg} source={require("../assets/perfilcareca.png")} />
                        <View style={css.perfilInfo}>
                            <Text style={css.perfilNome}>Genilson Oliveira</Text>
                            <Text style={css.data}>05/02/2022</Text>
                        </View>
                    </View>
                    <View style={css.comentario}>
                        <Text>O lanche é muito bom, não me arrependo de comprar.</Text>
                        <Image style={css.comentarioImg2} source={require("../assets/lanche3.jpg")} />
                    </View>
                </View>
                <View style={css.comentarios}>
                    <View style={css.perfil}>
                        <Image style={css.perfilimg} source={require("../assets/perfilicon.png")} />
                        <View style={css.perfilInfo}>
                            <Text style={css.perfilNome}>Olívia Fausto Correia</Text>
                            <Text style={css.data}>03/02/2022</Text>
                        </View>
                    </View>
                    <View style={css.comentario}>
                        <Text>Não me arrependo de ter comprado, veio bem recheado e a entrega foi rápida.</Text>
                        <Image style={css.comentarioImg2} source={require("../assets/lanche4.jpg")} />
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}

const css = StyleSheet.create({
    geral: {
        flex: 1,
        backgroundColor: "#F5EBDC",
    },
    logo: {
        width: 170,
        height: 70,
        marginTop: 20,
    },
    voltar: {
        width: 30,
        height: 30,
        marginLeft: 30,
        marginTop: 30,
        position: "absolute"

    },
    frase: {
        fontSize: 20,
        textAlign: "center",
        marginLeft: 15,
        marginTop: 40,
        color: "#7A361F",
    },
    seta: {
        width: 35,
        height: 35,
    },
    btncomentar: {
        width: "30%",
        height: 60,
        borderRadius: 6,
        backgroundColor: "#FFBB5C",
        marginLeft: "63%",
        marginTop: 30,
        marginBottom: 10

    },
    btntext: {
        textAlign: "center",
        marginTop: 15,
        fontSize: 20,
        color: "#7A361F"
    },
    comentarios: {
        width: "90%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        borderWidth: 3,
        borderColor: "#FFBB5C",
        padding: 20,
        borderRadius: 6,
        marginTop: 30,
        marginBottom:10
    },
    perfil: {
        width: "100%",
        display: "flex",
        flexDirection: "row"
    },
    comentario: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    perfilimg: {
        width: "20%",
        height: 50,
        resizeMode: "contain"
    },
    perfilInfo: {
        width: "60%"
    },
    perfilComentario: {
        with: "100%"
    },
    comentarioImg: {
        height: 200,
        resizeMode: "contain",
        marginTop: 15
    },
    buton:{
        width: 50,
        height: 40,
        marginRight: 23,
        marginTop: 40,

    },
    flex:{
        display:"flex",
        marginLeft: 50,
        flexDirection: "row",
    },
})

