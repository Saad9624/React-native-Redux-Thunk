import React from 'react';
import {View, Text, TouchableOpacity,ActivityIndicator} from 'react-native';

import TextInput from '../../components/textInput';
import {connect} from 'react-redux';
import {emailChanged , passwordChanged  ,loginUser} from '../../actions';

class login extends React.Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text){
      this.props.passwordChanged(text) ;
  }
  onButtonPress(){
      const {email , password} = this.props ;
      this.props.loginUser({email , password }) ;
  }
  render() {
    return (
      <View>
        <TextInput
            value={this.props.email}
          onChangeText={this.onEmailChange.bind(this)}
          placeholder="Email"></TextInput>

        <TextInput
         value={this.props.password}
         onChangeText={this.onPasswordChange.bind(this)}
         placeholder="Password"></TextInput>

        <Text style={styles.error}>{this.props.error}</Text>

       {this.props.loading && <ActivityIndicator size="small" color="#0000ff" />}
        <TouchableOpacity
        onPress={this.onButtonPress.bind(this)}
        style={{backgroundColor:'yellow' ,alignItems:'center',justifyContent:'center',marginTop:50,height:40}}>
            <Text>login</Text>
        </TouchableOpacity>

          </View>
    );
  }
}
const styles = {
    error:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }
}
const mapStateToProps = (state) => {
    
  return {
    email: state.auth.email,
    password:state.auth.password ,
    error:state.auth.error  ,
    loading: state.auth.loading ,
    navigation : state.auth.navigation ,
  };
};
export default connect(mapStateToProps,
                     {emailChanged,passwordChanged,loginUser})
                     (login);
