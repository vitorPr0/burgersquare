import { Image, View, StyleSheet, Text, ScrollView, TouchableOpacity, TextInput, Keyboard } from "react-native";
import { NavigationContainer } from '@react-navigation/native';


export default function Carrinho({ setCarrinho }) {
    Keyboard.dismiss();
    return (
        <View style={css.geral}>


            <View style={css.flex}>
                <TouchableOpacity style={css.buton} onPress={() => setCarrinho(false)}>
                    <Image style={css.seta} source={require("../assets/setAV.png")} />
                </TouchableOpacity>
                <Image style={css.logo} source={require("../assets/logo66.png")} />
            </View>




            <TouchableOpacity style={css.btn}>
                <Text style={css.btntext} >Comprar</Text>
            </TouchableOpacity>
            <ScrollView>
                <View style={css.carrinho}>

                    <View style={css.imgbox}>
                        <Image style={css.img} source={require("../assets/produto1.jpg")} />
                    </View>
                    <View style={css.boxtext}>
                        <Text style={css.text}>LANCHE TRADICIONAL DA CASA</Text>
                        <Text style={css.text}>R$ 25,99</Text>

                        <View style={css.btns}>
                            <TextInput maxLength={2} style={css.um}
                                keyboardType="numeric">

                            </TextInput>

                            <TouchableOpacity style={css.dois} >
                                <Text style={css.textdois}>Excluir</Text>
                            </TouchableOpacity>

                            <View style={css.boxtres}>
                                <TouchableOpacity>
                                    <Image style={css.tres} source={require("../assets/checklist.png")} />
                                </TouchableOpacity>

                            </View>

                        </View>
                    </View>
                </View>


                
                <View style={css.carrinho}>
                    <View style={css.imgbox}>
                        <Image style={css.img} source={require("../assets/xsalada.jpg")} />
                    </View>
                    <View style={css.boxtext}>
                        <Text style={css.text}>X-SALADA SIMPLES</Text>
                        <Text style={css.text}>R$ 22,90</Text>
                        <View style={css.btns}>
                            <TextInput maxLength={2} style={css.um}
                                keyboardType="numeric">
                            </TextInput>
                            <TouchableOpacity style={css.dois} >
                                <Text style={css.textdois}>Excluir</Text>
                            </TouchableOpacity>
                            <View style={css.boxtres}>
                                <TouchableOpacity>
                                    <Image style={css.tres} source={require("../assets/checklist.png")} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>


                <View style={css.carrinho}>
                    <View style={css.imgbox}>
                        <Image style={css.img} source={require("../assets/burger2.jpg")} />
                    </View>
                    <View style={css.boxtext}>
                        <Text style={css.text}>X-TUDO</Text>
                        <Text style={css.text}>R$ 25,90</Text>
                        <View style={css.btns}>
                            <TextInput maxLength={2} style={css.um}
                                keyboardType="numeric">
                            </TextInput>
                            <TouchableOpacity style={css.dois} >
                                <Text style={css.textdois}>Excluir</Text>
                            </TouchableOpacity>
                            <View style={css.boxtres}>
                                <TouchableOpacity>
                                    <Image style={css.tres} source={require("../assets/checklist.png")} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={css.fim}>

                </View>
            </ScrollView>



        </View>
    )
}


const css = StyleSheet.create({
    geral: {
        flex: 1,
        backgroundColor: '#F5EBDC',
        alignItems: "center"
    },
    seta: {
        width: 35,
        height: 35,
    },
    logo: {
        width: 170,
        height: 70,
        marginTop: 20,
        marginRight: 75
    },
    carrinho: {
        width: "95%",
        borderWidth: 3,
        borderColor: "#FFBB5C",
        borderRadius: 6,
        marginTop: 30,
        flexDirection: "row",
        columnGap: 3,
        marginLeft: 8
    },
    imgbox: {
        width: "40%",
        padding: 6

    },
    img: {
        width: "100%",
        height: 140,
        resizeMode: "cover",
    },
    boxtext: {
        width: "58%",
        padding: 6,
    },
    text: {
        marginTop: 2,
        fontSize: 15
    },
    btns: {
        width: "100%",
        marginTop: "20%",
        height: 45,
        flexDirection: "row",
        columnGap: 4
    },
    um: {
        width: "24%",
        height: 45,
        backgroundColor: "white",
        borderWidth: 3,
        borderColor: "#FFBB5C",
        borderRadius: 6,
        padding: 8
    },
    dois: {
        width: "52%",
        height: 45,
        backgroundColor: "white",
        borderWidth: 3,
        borderColor: "#FFBB5C",
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
        fontSize: 5
    },
    textdois: {
        fontSize: 20,
        color: "#7A361F"
    },
    tres: {
        width: 30,
        height: 30,
        marginTop: 4

    },
    boxtres: {

        borderWidth: 3,
        backgroundColor: "#FFBB5C",
        borderColor: "#FFBB5C",
        borderRadius: 6,
        height: 45,
    },
    btn: {

        backgroundColor: "white",
        width: '30%',
        height: 50,
        borderWidth: 3,
        borderColor: "#FFBB5C",
        backgroundColor: "#FFBB5C",
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginLeft: "60%",
        marginBottom: 10
    },
    btntext: {
        fontSize: 18,
        color: "#7A361F"
    },
    fim: {
        height: 45
    },
    buton: {
        width: 50,
        height: 40,
        marginRight: 30,
        marginTop: 40,

    },
    flex: {
        display: "flex",
        flexDirection: "row",
    }

})