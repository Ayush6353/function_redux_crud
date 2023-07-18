
import { ACTION,ADD_DATA,REMOVE_DATA, UPDATE_DATA } from "./type";


const Action_data =()=>{    
    return{
    type: ACTION,
    payload: "",
    }
};

// ADD DATA
export const add_data =(data)=>{   
    return {
        type: ADD_DATA,
        payload: data,
    }
 }

 // REMOVE DATA
 export const remove_data =(id)=>{
    return {
        type: REMOVE_DATA,
        payload: id,
    }
 }

 // UPDATE DATA
 export const update_data =(id)=>{
    return {
        type: UPDATE_DATA,
        payload: id,
    }
 };

 export default Action_data;