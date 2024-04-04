import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";


export default function Home() {
    return (
        <View>
            <Image style={css.logo} source={require("../assets/logo66.png")} />
            <ScrollView>
            <TouchableOpacity style={css.pesquisa}>
            <Image style={css.imgpesquisa} source={require("../assets/pesquisac.png")} />
                <Text style={css.btntext2}>Pesquise aqui...</Text>
            </TouchableOpacity>

            <Image style={css.imgcarrossel} source={require("../assets/burger1.jpg")} />
                <TouchableOpacity style={css.cupom}>
                <Image style={css.imgcupom} source={require("../assets/cupom.png")} />
                    <Text style={css.btntext3}>Resgate cupons de desconto!</Text>
                </TouchableOpacity>
                <View>
                    <Image style={css.imghome} source={require("../assets/Burger.png")} />
                    <View style={css.btnge}>
                    <TouchableOpacity style={css.btninfo}>
                        <Text style={css.textinfo}>Mais Informações</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={css.btncomprar}>
                        <Text style={css.textcomprar}>Comprar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={css.btncarrinho}>
                    <Image style={css.imgcesta} source={require("../assets/cesta.png")} />
                    </TouchableOpacity>
                    </View>
                   
                </View>
                <View>
                    <Image style={css.imghome} source={require("../assets/burger2.jpg")} />
                    <View style={css.btnge}>
                    <TouchableOpacity style={css.btninfo}>
                        <Text style={css.textinfo}>Mais Informações</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={css.btncomprar}>
                        <Text style={css.textcomprar}>Comprar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={css.btncarrinho}>
                    <Image style={css.imgcesta} source={require("../assets/cesta.png")} />
                    </TouchableOpacity>
                    </View>
                   
                </View>
                <View style={css.box}></View>
            </ScrollView>
        </View>
    )
}

const css = StyleSheet.create({
    logo: {
        width: 170,
        height: 70,
        marginTop: 20,
        marginLeft: "30%"
    },
    pesquisa: {
        width: '85%',
        height: '4%',
        backgroundColor: "white",
        borderRadius: 6,
        marginTop: 25,
        marginLeft: "7.5%",
        borderWidth: 2,
        borderColor: "#FFBB5C",
    },
    cupom: {
        width: '85%',
        height: '5%',
        backgroundColor: "white",
        borderRadius: 6,
        marginTop: 25,
        marginLeft: "7.5%",
        borderWidth: 2,
        borderColor: "#FFBB5C",
    },
    btntext2: {
        marginLeft: '17%',
        marginTop: -28,
        fontSize: 19,
        color: 'gray'
    },
    btntext3: {
        marginLeft: '20%',
        marginTop: -33,
        fontSize: 19
    },
    imgcarrossel:{
        resizeMode: 'stretch',
        width: 380 ,
        height:240,
        marginLeft: '5%',
        marginTop: 30,
    },
    imgpesquisa:{
        width: 27,
        height: 27,
        marginTop:10,
        marginLeft: '5%'

    },
    imgcupom:{
        width: 37,
        height: 37,
        marginTop:13,
        marginLeft: '5%'
    },
    imghome:{
        resizeMode: 'stretch',
        width: 340 ,
        height:260,
        marginLeft: '9%',
        marginTop: 30,
    },
    btnge:{
        display:'flex',
        flexDirection: 'row'
    },
    btninfo:{
        width: '39%',
        height: '80%',
        backgroundColor: "white",
        borderRadius: 6,
        marginTop:15,
        marginLeft: "9%",
        borderWidth: 2,
        borderColor: "#FFBB5C",
    },
    btncomprar:{
        width: '27%',
        height: '80%',
        backgroundColor:"#FFBB5C",
        borderWidth: 2,
        borderColor:"#FFBB5C",
        borderRadius:9,
        textAlign:"center",
        marginTop:15,
        marginLeft: "2%",
    },
    btncarrinho:{
        width: '12%',
        height: '80%',
        backgroundColor: "white",
        borderRadius: 6,
        marginTop:15,
        marginLeft: "3%",
        borderWidth: 2,
        borderColor: "#FFBB5C",
    },
    textinfo:{
        fontSize:15,
        marginLeft: 15,
        marginTop:7,
    },
    textcomprar:{
        fontSize:15,
        marginTop:8,
        marginLeft: 23,
    },
    imgcesta:{
        width: 27,
        height: 27,
        marginTop:7,
        marginLeft: 10
    },
    box:{
        height:150
    }
})