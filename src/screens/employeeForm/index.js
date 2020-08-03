import React from 'react' ;
import {
    View,
    Text,
    TouchableOpacity,
    Picker
}  from 'react-native' ;
import TextInput from './../../components/textInput' ;
import {connect } from 'react-redux' ;
import {EmployeeUpdate, employeeCreate} from '../../actions' ;
import {Card} from 'native-base' ;


class EForm extends React.Component{

    componentDidMount(){
        console.log("details" , this.props.route.params )
    }

    onButtonPress(){
        const {name , phone , shift} = this.props ;

        this.props.employeeCreate({name , phone , shift :shift || 'Monday'}) ;

    }

    render(){
        console.log("e,ployee detail" , this.props.employees)
        return(
            <View>
                <TextInput
                onChangeText={text => this.props.EmployeeUpdate({prop:'name' , value:text})}
                value={this.props.name}   placeholder="Emp Name"/>

                <TextInput
                 onChangeText={text => this.props.EmployeeUpdate({prop:'phone' , value:text})}
                 value={this.props.phone}
                 placeholder="Phone Name"/>

                <Card style={{width:'80%',alignSelf:'center'}}>
                        <Picker
                           selectedValue={this.props.shift}
                           onValueChange={day =>  this.props.EmployeeUpdate({prop:'shift' , value: day})}
                        >
                            <Picker.Item label="Monday" value="Monday"></Picker.Item>
                            <Picker.Item label="Tuesday" value="Tuesday"></Picker.Item>
                            <Picker.Item label="Wednesday" value="Wednesday"></Picker.Item>
                            <Picker.Item label="Thursday" value="Thursday"></Picker.Item>
                            <Picker.Item label="Friday" value="Friday"></Picker.Item>
                            <Picker.Item label="Saturday" value="Saturday"></Picker.Item>
                            <Picker.Item label="Sunday" value="Sunday"></Picker.Item>

                        </Picker>
                </Card>
                 

                    <TouchableOpacity
                      onPress={this.onButtonPress.bind(this)}
                       style={{backgroundColor:'yellow' ,alignItems:'center',justifyContent:'center',marginTop:50,height:40}}>
                        <Text>Add</Text>
                    </TouchableOpacity>
            </View>
        )
    }
}
const mapStateToProps = (state) =>{
    const {name   ,phone , shift } = state.employeeForm ;
    return{
        name , phone , shift 
    }
}

export default connect(mapStateToProps ,
                    {EmployeeUpdate,employeeCreate})
                     (EForm) ;
