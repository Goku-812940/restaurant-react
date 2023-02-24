import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {restaurantListReducer} from './reducers/resraurantReducer'
// reducers
const reducers=combineReducers({
    restaurantReducer:restaurantListReducer
})

// middleware
const middleware=[thunk]

// create store
const store=createStore(reducers,applyMiddleware(...middleware))



export default store
