 import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_FETCH_SUCCESS

} from './types' ;
import firebase from 'firebase' ;

export const EmployeeUpdate = ({prop , value})=>{
    return{
        type:EMPLOYEE_UPDATE ,
        payload: {prop , value}
    }
};

export const employeeCreate = ({name ,phone , shift}) =>{

    const {currentUser} =firebase.auth() ;

    return (dispatch) =>{
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({ name , phone , shift}) 
        .then(()=>{
            dispatch({
                type:EMPLOYEE_CREATE
            })
        
        });
    };
   
};

export const employeesFetch =()=>{
    const {currentUser} =firebase.auth() ;

    return(dispatch) =>{
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value' , snapshot =>{
               // console.log("snapshot" , snapshot);
                    dispatch({
                        type:EMPLOYEE_FETCH_SUCCESS,
                        payload:snapshot.val()
                    })
            });
    }
};
