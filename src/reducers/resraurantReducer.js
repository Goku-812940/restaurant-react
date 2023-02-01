import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { R_FAIL,R_SUCCESS   } from "../constants/restaurantConstants";

// reducer fn
const restaurantLiatReducer=(state={restaurantList:[]},action)=>{
    switch(action.type){
        case R_SUCCESS:
            return{restaurantList:action.payload}
        case R_FAIL:
            return{restaurantList:action.error}
        default:
            return state
    }
}