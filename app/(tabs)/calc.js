import { StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { ThemedView } from '@/components/ThemedView';
import Button,{ButtonTypes} from '@/components/Button';
import { useState } from 'react';
import { number } from 'prop-types';



const Operators ={
  CLEAR:'C',
  PLUS:'+',
  MINUS:'-',
  EQUAL:'='
}

export default function TabCalcScreen() {
  const [result,setResult]=useState(0);
  const [formula,setFormula]=useState([]);
  const widnowWidth= useWindowDimensions().width;
  const width = (widnowWidth-5)/4;
  console.log('window',widnowWidth)
  console.log('render',result)
  

  const onPressNumber = (number) =>{
    const last= formula[formula.length=1]
    if (isNaN(last)){
      setResult(number)
      setFormula((prev)=>[...prev,number]);

    }else{
      const newNumber = (last??0)*10+number;
      setFormula((prev)=>{
        prev.pop();
        return [...prev, newNumber]
      })
    }
  }
  const onPressOperator = (operator)=>{
    switch (operator){
      case operator.CLEAR:
        setFormula([]);
        setResult(0);
        return;
      case Operators.EQUAL:
        calculate();  
        return;
      default:
        const last= formula[formula.length-1];
        if ([Operators.MINUS,Operators.PLUS].includes(last)){
          setFormula((prev)=>{
            prev.pop();
            return [...prev, operator];
          });
        }else{
          setFormula((prev)=>[...prev,operator])
        }
    }
    return;
  }

  const calculate =()=>{
    let calculatedNumber=0;
    let operator='';

    formula.forEach((value)=>{
      if ([Operators.MINUS,Operators.PLUS].includes(value)){
        operator=value;
      }else{
        if (operator===Operators.PLUS){
          calculatedNumber+=value;
        }else if (operator === Operators.MINUS){
          calculatedNumber-=value;
        }else{
          calculatedNumber=value;
        }
      }
    });
    setResult(calculatedNumber);
    setFormula([]);
  }

  return (
      <View style={styles.container}>
        <StatusBar style='light' backgroundColor={'black'}/>
        <View style={styles.resultContainer}>
          <Text style={styles.text}>{result.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.leftPad}>
            <View style={styles.number}>
                {[1,2,3,4,5,6,7,8,9].map((num)=>
                  (<Button 
                    key={num}
                    title={num.toString()}
                    onPress={()=>onPressNumber(num)}
                    buttonStyle={{width:width,height:width,marginBottom:1}}
                    buttonType={ButtonTypes.NUMBER}
                    />))}
              </View>
            <View style={styles.bottom}>
              <Button 
              title="0"
              onPress={()=>onPressNumber(0)}
              buttonStyle={{width:width*2,height:width,marginTop:1}}
              buttonType={ButtonTypes.NUMBER}
              />
              <Button
                title="="
                onPress={()=> onPressOperator(Operators.EQUAL)}
                buttonStyle={{width:width,height:width,marginTop:1}}
                buttonType={ButtonTypes.OPERATOR}
              /> 
            </View>

          </View>
          <View>
              <Button 
                  key="C"
                  title="C"
                  onPress={()=> onPressOperator(Operators.CLEAR)}
                  buttonStyle={{width:width,height:width,marginTop:1}}
                  buttonType={ButtonTypes.OPERATOR}
                  />
              <Button 
                  key="-"
                  title="-"
                  onPress={()=> onPressOperator(Operators.MINUS)}
                  buttonStyle={{width:width,height:width,marginTop:1}}
                  buttonType={ButtonTypes.OPERATOR}
                  />
              <Button 
                  key="+"
                  title="+"
                  onPress={()=> onPressOperator(Operators.PLUS)}
                  buttonStyle={{width:width,height:width*2+1,marginTop:1}}
                  buttonType={ButtonTypes.OPERATOR}
                  />
          </View>
        </View>

      </View>

  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    backgroundColor:'#fff',
    alignItems:'stretch',
    justifyContent:'center',
  },
  text:{
    fontSize:30,
    fontWeight:'700',
    color:'green'
  },
  resultContainer:{
    flex:1,
    alignItems:'flex-end',
    justifyContent:'flex-end',
    backgroundColor:'#000000'
  },
  buttonContainer:{
    // flex:1,
    backgroundColor:'#000000',
    flexDirection:'row',
    justifyContent:'space-evenly',
  },
  leftPad:{
    // backgroundColor:'green',
    width:'75%'
  },
  number:{
    flexWrap:'wrap-reverse',
    flexDirection:'row',
    justifyContent:'space-evenly',
  },
  bottom:{
    flexDirection:'row',
    justifyContent:'space-evenly',
  },
});
