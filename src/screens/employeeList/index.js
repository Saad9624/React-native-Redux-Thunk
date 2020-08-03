import React from 'react'
import {
    View,
    Text,
    FlatList
} from 'react-native' ;
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { employeesFetch } from '../../actions' ;
import _ from 'lodash' ;

var obj = {
    'Lisa.Sky': {
      name: 'Lisa',
      surname: 'Sky',
      age: 21,
      sex: 'female',
    },
    'Thomas.Prat': {
      name: 'Thomas',
      surname: 'Prat',
      age: 33,
      sex: 'male',
    },
    'Paul.Sing': {
      name: 'Paul',
      surname: 'Sing',
      age: 88,
      sex: 'male',
    },
    'Andrew.Brown': {
      name: 'Andrew',
      surname: 'Brown',
      age: 23,
      sex: 'male',
    },
  };

class List extends React.Component{
   
    componentDidMount(){
            this.props.employeesFetch()
            console.log("this.props" , this.props.employees);
    
    }

    _keyExtractor = (item, index) => item.id.toString();


    
    render(){
        return(
            <View>
                <Text>Employe list</Text>

                {this.props.employees ?
             <FlatList
             data={Object.keys(this.props.employees)}
             renderItem={({ item }) =>
             <TouchableOpacity onPress={() =>this.props.navigation.navigate('EForm' , {
                employees : this.props.employees
             })}>
                <Text>{this.props.employees[item].name}</Text>
             </TouchableOpacity>}
           /> :
           <Text>Loading...</Text>    
            }
                
            </View>
        )
    }
}

const mapStateToProps = state =>{
    // const employees = _.map(state.employees , (val , uid) =>{
    //     return {...val , uid}
    // }) ;

    // return{ employees };
     return {
         employee : state.employees ,
         employees: state.employee
     }
}

export default connect(mapStateToProps , {employeesFetch} )(List)  ;