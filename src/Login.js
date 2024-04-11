import { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity,Text, TextInput, Keyboard, ScrollView } from "react-native";
import { endAsyncEvent } from "react-native/Libraries/Performance/Systrace";
import Cadastro from "./Cadastro";



export default function Login({setLogado, setCadastro,})
{
    const[ email, setEmail ] = useState("");
    const[ senha, setSenha ] = useState("");

    function Login()
    {
        Keyboard.dismiss();
        if (email == "vitor@gmail" && senha =="1234"){
            setLogado(true)
        }
    }
    function Cadastro()
    {
        setLogado( true );
        setCadastro( true );
    }

    return(
        <View style={css.body}>
          <ScrollView>
          <Image style={css.logo}  source={require("../assets/logo.png")} />
            <View style={css.fraselogin}>
            <Text style={css.frase}>FAÇA SEU LOGIN OU CRIE UMA CONTA!</Text>
            </View>
            <Text style={css.texto}>EMAIL:</Text>
            <TextInput placeholder='Digite seu Email' value={email} style={css.input} onChangeText={(digitado) => setEmail(digitado)} />
            <Text style={css.texto1}>SENHA:</Text>
            <TextInput placeholder='Digite sua Senha' value={senha} style={css.input} onChangeText={(digitado) => setSenha(digitado)} secureTextEntry={true}  />
            <Text style={css.esqs}>Esqueci a minha senha?</Text>
            
            <TouchableOpacity style={css.btnlogar} onPress={Login}>
            <Text style={css.btntext}>LOGAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={css.btncadastrar} onPress={Cadastro}>
            <Text style={css.btntext2}>CADASTRAR</Text>
            </TouchableOpacity>
            <View style={css.caixa}>

            </View>

          </ScrollView>
           
            

        </View>
    )
}



const css = StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: '#F5EBDC',

    },
    logo :{
        width: 200,
        height: 219,
        resizeMode: "contain",
        objectFit: "cover",
        marginTop:80,
        marginLeft: "25%"
    },
    frase:{
      fontSize:19,
      marginLeft: "8.3%",
      marginTop: 40
    },
    input:{
        backgroundColor:"white",
        width: '85%',
        height: '7%',
        borderRadius: 6,
        borderWidth: 2,
        padding: 10,
        color:"#6b503b",
        fontSize: 15,
        borderColor: "#7A361F",
        marginLeft: "7.5%"
      },
      texto:{
        fontSize:20,
        marginTop:40,
        marginBottom: 5,
        marginLeft: "7.5%"
      },
      texto1:{
        fontSize:20,
        marginTop:15,
        marginBottom: 5,
        marginLeft: "7.5%"
      },
      btnlogar:{
        width: '85%',
        height: '7%',
        backgroundColor:"#FFBB5C",
        padding: 15,
        borderRadius:9,
        textAlign:"center",
        marginTop:25,
        marginLeft: "7.5%",
      },
      btntext:{
        textAlign:"center",
        color: "#7A361F",
        fontSize: 17,
      },
      btncadastrar:{
        width: '85%',
        height: '7%',
        backgroundColor: "white",
        borderRadius: 6,
        marginTop:25,
        marginLeft: "7.5%",
        borderWidth: 2,
        padding: 15,
        borderColor: "#FFBB5C",

        
      },
      btntext2:{
        textAlign:"center",
        color: "#7A361F",
        fontSize: 17,

      },
      esqs:{
        marginLeft: 35,
        marginTop: 6
      },
      caixa:{
        height: 50,
      }
  });