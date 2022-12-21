import React,{useState,useEffect,useRef} from 'react';
import { View,Text,StyleSheet,Image,TextInput,TouchableOpacity,Modal,StatusBar,Animated,ActivityIndicator} from 'react-native';
import ModalResult from './src/Modal/modalResult';

export default function Economia_Gasolina() {
  const [valoralcool,setValorAlcool] = useState('')
  const [valorgasolina,setValorGasolina] = useState('')
  const [modal,setModal] = useState(false)
  const [compensa,setCompensa] = useState(0)
  const [calculototal,setCalculoTotal] = useState('');
  const [indicador,setIndicador] = useState(true)

  const logogasolinalargura = useRef(new Animated.Value(160)).current
  const logogasolinaaltura = useRef(new Animated.Value(160)).current 
  useEffect(() => {

   Animated.loop(   
    Animated.sequence([
     Animated.timing(logogasolinalargura,{
      toValue:180,
      duration: 1800,
      useNativeDriver: false,
     }), 
     Animated.timing(logogasolinalargura,{
      toValue:150,
      duration: 1800,
      useNativeDriver: false,
     }),
    
     Animated.timing(logogasolinaaltura,{
      toValue:180,
      duration: 1800,
      useNativeDriver: false,
     }),
    
     Animated.timing(logogasolinaaltura,{
      toValue:150,
      duration: 1800,
      useNativeDriver: false,
     })         

    ])).start()

  },[]) 


 function Calculo(){

     let conta = valoralcool / valorgasolina 

     if(conta <= 0.7){
        setCompensa('Compensa usar o alcool')       
     } else {
      
        setCompensa('Compensa usar a gasolina')
      
     }

 }

 function Carregar(){
    Calculo()
    setModal(true)
   
    
 }
   return(
   <View style={Estilos.conteiner}>

     <StatusBar backgroundColor={'#121212'}/>
   
    <View style={Estilos.conteinerImg}>
     <Animated.Image source={require('./src/logo.png')} style={[Estilos.Img,{width: logogasolinalargura,height:logogasolinaaltura}]}/>
     <Text style={Estilos.TextoLogo}>Qual melhor Opção ?</Text>
    </View>

    <View style={Estilos.conteinerInputs}>
       <Text style={Estilos.TextosAcimadoInput}>Alcool preço por litro:</Text>

        <TextInput 
        placeholder='Digite o Preço da Gasolina !'
        value={valoralcool}
        keyboardType="numeric"
        onChangeText={(texto) => setValorAlcool(texto)}
        style={Estilos.Input}
        />

       <Text style={Estilos.TextosAcimadoInput}>Gasolina preço por litro:</Text>
       <TextInput 
        placeholder='Digite o Preço da Gasolina!'
        keyboardType="numeric"
        value={valorgasolina}
        onChangeText={(texto) => setValorGasolina(texto)}
        style={Estilos.Input}
        />
    </View>

    <View style={Estilos.conteinerBtn}>
      <TouchableOpacity onPress={() => { Carregar()}}style={Estilos.btn}>
        <Text style={Estilos.Textobtn}>Calcular</Text>
      </TouchableOpacity>
    </View>

    <Modal visible={modal} transparent={false} animationType={'slide'} >
            <ModalResult gasolina={valorgasolina} alcool={valoralcool} compensacao={compensa} goBackModal={() => { setModal(false) }}/>
    </Modal>
   </View>
  );
 }


const Estilos = StyleSheet.create({

        conteiner: {
          flex: 1,
          alignItems: 'center',    
          backgroundColor: '#121212',

        },
        conteinerImg:{
         marginTop: 20,   
        },
        Img:{ 
 
          margin: 10,
          marginLeft: 25,
        
        
          zIndex: 2
        },
        TextoLogo:{
          textAlign: 'center',
          paddingTop: 2,
          fontSize: 25,
          color: 'white',
          fontWeight: '800'
        },
        TextosAcimadoInput:{
          paddingTop: 15,  
          fontSize: 15,
          textAlign: 'left',
          color: 'white',
          fontWeight: 'bold'
        
        },
        conteinerInputs:{
          width: '90%',
          margin: 10,

        },
        Input: {
          backgroundColor: "white",
          width: '100%',
          color: 'black',
          padding: 10,
          marginTop: 15,
          borderWidth: 2,
          borderColor: '#121212',
          borderRadius: 4
          
        },
        conteinerBtn:{
         
      
        },
        btn:{
          
          backgroundColor: '#B62727',
          width: 320,
          borderRadius: 7,
          height: '25%',  

    
          
        },
        Textobtn:{
          textAlign: 'center',
          padding: 10,
          color: 'white',
          fontSize: 16,
          fontWeight: 'bold'    
        }



})




