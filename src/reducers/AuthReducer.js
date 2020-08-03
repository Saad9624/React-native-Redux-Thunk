import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types' ;

const INITIAL_STATE = {
     email:'test@test.com',
     password:'password'  ,
     user:null ,
     error:'',  
     loading:false ,

}  ;

export default (state= INITIAL_STATE , action) =>{
    console.log(action);
    switch(action.type){
            case EMAIL_CHANGED:
                  return {...state, email:action.payload,error:'' ,loading:false} ;
       
            case PASSWORD_CHANGED:
              return {...state  ,password:action.payload,error:'',loading:false}
       
            case LOGIN_USER_SUCCESS:
                return {...state , user : action.payload , error:'Success', loading:false} ;
            
            case LOGIN_USER_FAIL :
                return {...state , error : 'Authentication Failed' ,  password:'' , loading:false} ;
            
            case LOGIN_USER :
                return {...state, loading : true , error:''};    
            default:
              return state ;
    }
}