import React,{useEffect, useRef}from 'react';
import { View,Text,StyleSheet,TouchableOpacity,Image, Animated} from 'react-native';

export default function ModalResult(props) {
 return (
   <View style={Estilos.ConteinerPrincipal}>


           <View style={Estilos.ConteinerImg}>  
            <Image source={require('../gas.png')} />
           </View>   
           
           <View style={Estilos.ConteinerTexto}>
           <Text style={[Estilos.TextoPreco,{color: 'green'}]}>{props.compensacao}</Text>
            <Text style={Estilos.TextoPreco}>Com os Preço</Text>
            <Text style={Estilos.TextoPrincipal}>Preço Alcool {props.alcool}</Text>
            <Text style={Estilos.TextoPrincipal}>Preço Gasolina: {props.gasolina}</Text>
           </View>

        
            <TouchableOpacity onPress={() => {props.goBackModal()}} style={Estilos.ConteinerBtn}>
                <Text style={Estilos.TextoBtn}>Calcular Novamente</Text>
            </TouchableOpacity>
           
   </View>

  );
}

const Estilos = StyleSheet.create({

    ConteinerPrincipal: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
  
    },
    ConteinerImg:{
        marginTop: '20%', 
    },
    ConteinerTexto:{
        marginTop: 30,
    },
    ConteinerBtn:{
        marginTop: '10%',
        width: '70%',
        height: '6%',
        borderColor: '#B62727',
        borderWidth: 1,
        borderRadius: 7
    },
    TextoPrincipal: {
       textAlign: 'center',
       color: 'white'  
    },
    TextoPreco:{
        margin: 5,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    TextoBtn:{
        color: '#B62727',
        padding: 8,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    }


})