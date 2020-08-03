import { combineReducers } from 'redux' ;
import AuthReducer from './AuthReducer' ;
import EmployeeFormReducer from './employeeFormReducer' ;
import EmployeeReducer from './employeeReducer' ;



export default combineReducers({
    auth: AuthReducer ,
    employeeForm : EmployeeFormReducer ,
    employee  : EmployeeReducer ,
}) ; 