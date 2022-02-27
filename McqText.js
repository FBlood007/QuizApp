import {View, Text, TouchableOpacity, StatusBar, Button,StyleSheet} from 'react-native';
import React, {useState} from 'react';
import question from './questions';
import javaQue from './JavaQuestions';



export default function McqText() {
  const [quizAnswers, setQuizAnswers] = useState({});
  const [hasSubmitted, setSubmit] = useState(false);
  const [first,setFirst] = useState(0);
  const [last,setLast] = useState(1);

  const handleQuizSelection = (sid, qid) => {
    let newState = {...quizAnswers};
    newState[qid] = {
      value: sid,
    };
    console.log(newState);
    setQuizAnswers(newState);
  
  };
  
  const nextQue = ()=>{
      console.log(first , last);
      setFirst(first + 1);
      setLast(last + 1);
      
  }
  const previQue = ()=>{  
    setFirst(first - 1);
    setLast(last - 1);
  }
  
  const queNumber= (num) =>{
    setFirst(num-1);
    setLast(num);
    console.log(first , last);
  }

  const handeResult = () => {
    if (hasSubmitted) {
      setSubmit(false);
      setQuizAnswers({});
      setLast(1);
      setFirst(0);
    } 
    else {
      if(Object.keys(quizAnswers).length < javaQue.length) {
        alert("Please select all answers");
        return;
      }
      var result = 0;
      javaQue.map(que => {
        if (quizAnswers[que.id]?.value === que?.correctAnswer) {
          result = result + 1;
        }
      });
      setSubmit(true);
      alert(`Your score is: ${result} / ${javaQue.length} \nPercentage :${result/javaQue.length*100}%`);
    }
  };

  return (
    <View style={css.body}>

    <StatusBar backgroundColor={'#146356'}  barStyle={'default'}/>

      <Text style={css.headingText1}>
        Core Java
      </Text>
      <Text style={css.headingText2}>
        Total Questions: {javaQue?.length}{' '}
      </Text>

      <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'center',paddingVertical:20}}>
        {javaQue?.map((que,index) => {
          return(
             
              <TouchableOpacity onPress={()=> queNumber(que.id)} key={que.id} style={{paddingHorizontal:7,paddingVertical:2}}>
               <Text style={[{backgroundColor:'#999',color:'black',width:20,borderRadius:20,textAlign:'center'},
                            first === index ? { backgroundColor: '#146356',color:'white' } : null ]}>
                    {que.id}
                </Text>
               </TouchableOpacity>
             
          );
        })}
        </View>

      {javaQue?.slice(first,last).map((que) => {
        return (
          <View  key={que.id} style={css.questionBlockWarp}>
            <Text style={css.javaQue}>
              {que.id}. {que?.title}
            </Text>
            <View style={{marginLeft: 20}}>
              {que?.options.map((option, indx) => {
                return (
                  <TouchableOpacity key={indx}
                    onPress={() => handleQuizSelection(option.id, que.id)}
                   >
                    <Text
                      style={[
                        {padding: 5,fontSize:18,color:"#146356"},
                        hasSubmitted ? 
                          (quizAnswers[que.id]?.value === option.id
                            ? {color:'white',fontWeight:"bold",
                                backgroundColor:
                                  quizAnswers[que.id]?.value ===
                                  que.correctAnswer
                                    ? 'green'
                                    : '#eb2d2d'
                              } : null)

                          : (quizAnswers[que.id]?.value === option.id ?
                             {backgroundColor: '#ddd'}: null),
                      ]}>
                      {indx + 1}. {option?.name}
                      
                    </Text>
                  </TouchableOpacity>
                );
              })}    
            </View>
          </View>  
        );    
      })}
      <View style={{backgroundColor:'#FFF1BD',marginVertical:15,borderWidth:1,borderTopRightRadius:50,borderBottomRightRadius:50}}>
        <Text style={{backgroundColor:'#146356',width:`${((first) / (javaQue.length-1)) * 100}%`,borderTopRightRadius:50,borderBottomRightRadius:50}}></Text>
      </View>
      
      <View style={css.nextPrevButnWrap}>
            <View flex={1}>
                {last != javaQue.length ? 
                    <TouchableOpacity  onPress={()=> nextQue()} style={{alignItems:'center',paddingVertical:5}}>
                    <Text style={css.nextPrevBtn}> Next</Text>
                </TouchableOpacity>
                : null}
            </View>
            <View  flex={1}>
                {first != 0 ? <TouchableOpacity onPress={()=> previQue()} style={{alignItems:'center'}} >
                    <Text style={css.nextPrevBtn}> Previous</Text>
                </TouchableOpacity> : null} 
            </View>     
        </View>


      
     
      
       
      <View flex={1} style={{flexDirection:'column-reverse'}}>
      
       <Button color={"#146356"} 
        title={hasSubmitted ? 'reset' : 'submit'}
        onPress={handeResult}>
        </Button> 
      
        </View>
        
    </View>
  );
}


const css = StyleSheet.create({

  body:{
    padding: 20, 
    paddingVertical: 0,
    flex:1,
    backgroundColor:'#F3C892'
},
  headingText1:{
    marginBottom: 10,
    textAlign:"center",
    alignSelf:'center',
    fontSize:30,
    fontWeight:'bold',
    color:'#146356'
  },

  headingText2:{
    marginBottom: 10,
    fontSize:25,
    alignSelf:'center',
    borderBottomWidth:2,
    color:"#146356"
  },

  questionBlockWarp:{
    height:300,
    backgroundColor:'#FFF1BD',
    padding:10
  },

  javaQue:{
    marginBottom: 10,
    fontSize:20,
    color:'#146356'
  },

  nextPrevButnWrap:{
    flexDirection:'row'
    ,alignItems:'center',
    padding:20,
    
  },

  nextPrevBtn:{
    fontSize:15,
    fontWeight:'bold',
    backgroundColor:'#146356',
    borderWidth:1,
    paddingHorizontal:5,
    color:'white'
  },
});
