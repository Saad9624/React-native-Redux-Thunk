import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE
} from './../actions/types' ;
import { State } from 'react-native-gesture-handler';

const INITIAL_STATE = {
    name:'',
    shift:'',
    phone:'',
} ;

export default ( state = INITIAL_STATE , action) =>{
    switch(action.type){
        case EMPLOYEE_UPDATE:
            return {...state , 
                    [action.payload.prop] : action.payload.value
                   }
        case EMPLOYEE_CREATE:
            return INITIAL_STATE ;
        default:
            return state ;
    }
}