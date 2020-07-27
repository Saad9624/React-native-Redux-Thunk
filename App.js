import React , {Component } from 'react'
import {View,Text} from 'react-native' ;

import {Provider} from 'react-redux' ;
import {createStore,applyMiddleware} from 'redux' ;
import reducers from './src/reducers' ;
import firebase from 'firebase' ;
import ReduxThunk from 'redux-thunk' ;
import Loginform from './src/screens/loginForm' ;

import Route from './src/Routes' ;

class App extends React.Component{

  componentDidMount(){
    const  firebaseConfig = {
      apiKey: "AIzaSyDKnrBa3HfIZUJlfmhY5aXb8_lTgWZeJSk",
      authDomain: "manager-c4765.firebaseapp.com",
      databaseURL: "https://manager-c4765.firebaseio.com",
      projectId: "manager-c4765",
      storageBucket: "manager-c4765.appspot.com",
      messagingSenderId: "400393891684",
      appId: "1:400393891684:web:833096fa72ef02aacdd471",
      measurementId: "G-652QRPMBK2"
    };
    // Initialize Firebase
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
  }
    //firebase.initializeApp(firebaseConfig);
  }

  render(){
    const store = createStore(reducers ,{} , applyMiddleware(ReduxThunk));
    return(
      <Provider store={store}>
        <Route/>
      </Provider>
    )
  }
}

export default App ;