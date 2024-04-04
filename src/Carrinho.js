import { Image, View, StyleSheet, Text, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { NavigationContainer } from '@react-navigation/native';


export default function Carrinho(){

    return(
        <View style={css.geral}>
            <Image style={css.logo} source={require("../assets/logo66.png")}/>
            <Image style={css.seta} source={require("../assets/setAV.png")}/>   

                <View  style={css.carrinho}>
                    <View style={css.imgbox}>
                        <Image style={css.img} source={require("../assets/produto1.jpg")} />
                    </View>
                    <View style={css.boxtext}>
                        <Text style={css.text}>Lanche tradicinal da casa.</Text>
                        <Text style={css.text}>R$ 25,99</Text>

                        <View style={css.btns}>
                            <TextInput style={css.um} 
                            keyboardType="numeric">

                            </TextInput>

                            <TouchableOpacity style={css.dois} >
                                <Text style={css.textdois}>Excluir</Text>
                            </TouchableOpacity>

                            <View style={css.boxtres}>
                                <Image style={css.tres}  source={require("../assets/checklist.png")} />
                            </View>

                        </View>
                    </View>     
                </View>

                <View  style={css.carrinho}>
                    <View style={css.imgbox}>
                        <Image style={css.img} source={require("../assets/lanche2.jpg")} />
                    </View>
                    <View style={css.boxtext}>
                        <Text style={css.text}>X-Bacon</Text>
                        <Text style={css.text}>R$ 20,99</Text>

                        <View style={css.btns}>
                            <TextInput style={css.um} 
                            keyboardType="numeric">

                            </TextInput>

                            <TouchableOpacity style={css.dois} >
                                <Text style={css.textdois}>Excluir</Text>
                            </TouchableOpacity>

                            <View style={css.boxtres}>
                                <Image style={css.tres}  source={require("../assets/checklist.png")} />
                            </View>

                        </View>
                    </View>     
                </View>
        </View>
    )
}


const css = StyleSheet.create({
    geral:{
        flex:1,
        backgroundColor:'#F5EBDC',
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
    carrinho:{
        width: "90%",
        borderWidth: 3,
        borderColor: "#FFBB5C",
        borderRadius: 6,
        marginTop:40  ,
        flexDirection:"row",
        columnGap:2,
    },
    imgbox:{
        width:"40%",
        padding:6

    },
    img:{
        width:"100%",
        height: 140,
        resizeMode: "cover",
    },
    boxtext:{
        width:"58%",
        padding:6,
    },
    text:{
        marginTop:2,
        fontSize:15
    },
    btns:{
        width:"100%",
        marginTop:"20%",
        height: 45,
        flexDirection:"row",
        columnGap:4
    },
    um:{
        width:"24%",
        height:45,
        backgroundColor: "white",    
        borderWidth: 3,
        borderColor: "#FFBB5C",
        borderRadius:6,
        padding:8
    },
    dois:{
        width:"52%",
        height:45,
        backgroundColor: "white" ,
        borderWidth: 3,
        borderColor: "#FFBB5C",
        borderRadius:6,
        alignItems: "center",
        justifyContent: "center",
        fontSize: 5
    },
    textdois:{
        fontSize:20,
        color:"#7A361F"
    },
    tres:{
        width:30,
        height:30,
        marginTop:4
       
    },
    boxtres:{
        
        borderWidth: 3,
        backgroundColor: "#FFBB5C",
        borderColor: "#FFBB5C",
        borderRadius:6,
        height:45,
    }
    
})