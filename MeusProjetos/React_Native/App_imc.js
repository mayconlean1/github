/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [altura , setAltura] = useState('')
  const [peso , setPeso ] = useState('')
  const [imc , setImc] = useState('')
  const [strImc , setStrImc] = useState('')
  const [res , setRes] = useState('')
  const stateAltura = text =>{setAltura(text)}
  const statePeso = text =>{setPeso(text)}

  const analisarImc = tempImc =>{
    if(tempImc < 17){
      setRes('Muito abaixo do peso')
    }else if(tempImc >= 17 && tempImc <= 18.49){
      setRes('Abaixo do peso')
    }else if(tempImc > 18.49 && tempImc <= 24.99){
      setRes('Peso Normal')
    }else if(tempImc > 24.99 && tempImc <= 29.99){
      setRes('Acima do peso')
    }else if(tempImc > 29.99 && tempImc <= 34.99){
      setRes('Obesidade')
    }else if(tempImc > 34.99 && tempImc <= 39.99){
      setRes('Obesidade severa')
    }else if(tempImc > 39.99){
      setRes('Obesidade mórbida')
    }
  }

  const calcular = ()=>{
    if(altura != '' && peso != ''){
      setStrImc('IMC = ')
      
      let tImc = (peso/(altura**2)).toFixed(2)
      setImc(tImc)

      analisarImc(tImc)
    }
  }
  
  return (
    
      <View style={styles.conteiner}>
        <View style={styles.inputs}>
          <TextInput placeholder='Altura' keyboardType='numeric' style={styles.input} onChangeText={stateAltura}/>
          <TextInput placeholder='Peso' keyboardType='numeric' style={styles.input} onChangeText={statePeso}/>
        </View>
        <TouchableOpacity style={styles.botao} onPress={calcular}>
          <Text style={styles.botaoTexto}>Calcular</Text>
        </TouchableOpacity>
  <Text style={styles.resultado}>{strImc}{imc}</Text>
  <Text style={[styles.resultado , {fontSize:30}] } >{res}</Text>
      </View>
    
  ); 
};


const styles = StyleSheet.create({
 conteiner:{
   flex:1,
   justifyContent:"center",
   alignItems: "center", 
 },
 inputs:{
   
   flexDirection: "row",
   marginBottom: 80,
   
   
 }, 
 input:{
  height: 50,
  width: "50 %",
  marginTop: 24,
  fontSize: 30,
  textAlign: "center",
  
 },
 botao:{
   width:'80%', 
   backgroundColor:'green',
   borderRadius:70,
 },
 botaoTexto:{
   alignSelf : "center",
   fontSize: 25,
   padding : 30,
   color: '#6dc4a4',
 },
 resultado:{
  alignSelf:'center',
  color: 'lightgrey',
  fontSize: 40,
  padding: 25

 },
             
});

export default App;
