import {View, Text, TouchableOpacity} from 'react-native' ;
import {Card} from 'native-base' 
import React from 'react'

const button =(props)=>{
    return(
        <Card style={{height:50,marginHorizontal:20,width:'80%',alignSelf:'center',justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity  onPress={props.onPress}>
                    <Text>{props.btntitle}</Text>
            </TouchableOpacity>
        </Card>
    )
}

export default button;