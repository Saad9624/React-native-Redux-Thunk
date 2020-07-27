import firebase from 'firebase' ;
import {
    EMAIL_CHANGED ,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS ,
    LOGIN_USER_FAIL ,
    LOGIN_USER
 } from './types' ;
 import * as RootNavigation from './../Routes/rootnavigation' ;

export const emailChanged = (text) =>{
    return{
        type:EMAIL_CHANGED,
        payload:text
    }
}
export const passwordChanged = (text)=>{
    return{
        type:PASSWORD_CHANGED,
        payload:text
    }
}

export const loginUser= ({email  , password}) => {
   
   return (dispatch) => {
    dispatch({type :LOGIN_USER })

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch , user))
    .catch(()=>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(user => loginUserSuccess(dispatch , user))
        .catch((error) => loginUserFail(dispatch,error))
    })
   };
};


const loginUserSuccess = (dispatch , user) =>{
    dispatch({
        type:LOGIN_USER_SUCCESS ,
        payload:user
    })
    RootNavigation.navigate('List');
};


const loginUserFail = (dispatch ,error) =>{
    console.log(error)
    dispatch({
        type:LOGIN_USER_FAIL
    })

}   