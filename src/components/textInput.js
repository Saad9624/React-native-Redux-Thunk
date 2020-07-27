import {View, Text,TextInput} from 'react-native' ;
import {Card} from 'native-base' 
import React from 'react'

const textInput =(props)=>{
    return(
        <Card style={{width:'80%',alignSelf:'center'}}>
            <TextInput   onChangeText={props.onChangeText} 
                placeholder={props.placeholder}></TextInput>
        </Card>
    )
}

export default textInput;