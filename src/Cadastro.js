import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, FlatList, SafeAreaView, ScrollView } from "react-native";


export default function Cadastro({setLogado, setCadastro})
{
    function Cadastro(){
        setCadastro(false);
        setLogado(false);
        alert("Cadastro concluído com sucesso!")
    }
    function Voltar(){
        setCadastro(false);
        setLogado(false);
    }

    return(

            <View style={css.body}>
              <ScrollView>
              <Image style={css.logo}  source={require("../assets/logo.png")} />
                    <Text style={css.texto}>NOME COMPLETO:</Text>
                    <TextInput placeholder='Digite seu Nome Completo' style={css.input} />
                    <Text style={css.texto}>EMAIL OU CPF:</Text>
                    <TextInput placeholder='Digite seu Email ou CPF' style={css.input} />
                    <Text style={css.texto}>TELEFONE:</Text>
                    <TextInput placeholder='Digite seu Telefone' style={css.input} />
                    <Text style={css.texto}>ENDEREÇO:</Text>
                    <TextInput placeholder='Digite seu Endereço' style={css.input} />
                    <Text style={css.texto}>SENHA:</Text>
                    <TextInput placeholder='Digite sua Senha'  style={css.input} secureTextEntry={true}/>
                    <TouchableOpacity style={css.btncadastrar} onPress={Cadastro}>
                    <Text style={css.btntext}>CADASTRAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={css.btnvoltar} onPress={Voltar}>
                    <Text style={css.btntext}>VOLTAR</Text>
                    </TouchableOpacity>    
                    <View style={css.fim}>
                      </View>   
              </ScrollView>
                     

                    

            </View>
            


            
            
    )
}


const css = StyleSheet.create({
    body:{
      flex: 1,
      backgroundColor: '#F5EBDC'  
    },
    logo:{
        width: 140,
        height: 159,
        resizeMode: "contain",
        objectFit: "cover",
        marginTop:50,
        marginLeft: "32%"
    },
    input:{
        backgroundColor:"white",
        width: '85%',
        height: '6.5%',
        borderRadius: 6,
        borderWidth: 2,
        padding: 10,
        color:"#6b503b",
        fontSize: 15,
        borderColor: "#7A361F",
        marginLeft: "7.5%"
      },
      boxgeral:{
        
      },
      texto:{
        fontSize:18,
        marginTop: 14,
        marginBottom: 4,
        marginLeft: "7.5%"
      },
      btncadastrar:{
        width: '85%',
        height: '6.5%',
        backgroundColor:"#FFBB5C",
        padding: 15,
        borderRadius:9,
        textAlign:"center",
        marginTop:20,
        marginLeft: "7.5%",

      },
      btntext:{
        textAlign:"center",
        color: "#7A361F",
        fontSize: 17,
      },
      btnvoltar:{
        width: '85%',
        height: '6.5%',
        backgroundColor: "white",
        borderRadius: 6,
        marginTop:15,
        marginLeft: "7.5%",
        borderWidth: 2,
        padding: 15,
        borderColor: "#FFBB5C",
      },
      fim:{
        height: 30
      }
  });