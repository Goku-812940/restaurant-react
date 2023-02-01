import axios from "axios";
import { R_FAIL,R_SUCCESS } from "../constants/restaurantConstants";
// create  a asynchronous fn to api call

export const RestaurantListAction=()=>async(dispatch)=>{
   try{
      const result= await axios.get('/restaurants.json')
      console.log(result.data.restaurants);
      dispatch({
         type:R_SUCCESS,
         payload:result.data.restaurants
      })
   }
   catch(error){
      dispatch({
         type:R_FAIL,
         error:error
      })
   }
}
