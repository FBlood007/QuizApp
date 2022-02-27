import React from 'react'
import { Button, Text, View, StyleSheet, StatusBar } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import question from './questions';
import javaQue from './JavaQuestions';

export default function HomePage(props) {
  return (
    <LinearGradient colors={['#F3C892', '#A3DA8D', '#146356']} style={{flex:1}}>
      
        <StatusBar  backgroundColor={'#F3C892'} barStyle={'dark-content'}/>
   
    <View style={{padding:20}}>

        <Text style={css.heading}>
            Test Topic :{"\n"}  Core Java MCQ</Text>
        <Text style={css.instr}>Instructions :</Text>
        <Text style={css.details}>* Total Number of questions are {javaQue.length}</Text>
        <Text style={css.details}>* All questions are compulsory</Text>
        <Text style={css.details}>* No time limit</Text>
        <Text></Text>

        <Button color={"#146356"} 
                backgroundColor={'black'}
                title='Click here to start the test' 
                onPress={()=> props.navigation.navigate('McqText')}/>
       
    </View>
    </LinearGradient>  
  );
}

const css = StyleSheet.create({
    
    heading:{
        alignSelf:"center",
        fontSize:30,
        textAlign:'center',
        fontWeight:'bold',
        color:'#146356',
        textShadowColor:"white",
        textShadowRadius:20},

    instr:{
        color:'#146356',
        fontSize:25,
        padding:10,
        fontWeight:'600',
        marginTop:20
},    


    details:{
        fontSize:20,
        padding:15,
        fontWeight:'600',
        color:"#146356"
    }
});