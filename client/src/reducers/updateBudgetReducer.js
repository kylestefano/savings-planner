import { CREATE_BUDGET, GET_BUDGET, UPDATE_BUDGET } from '../actions/index';


export default function(state = {}, action) {
  
  switch (action.type) {
    
    case GET_BUDGET:
      console.log("this is the payload WE NOW WANT ", action.payload)
      
      
      // console.log( "Action payload for get_budget is", action.payload.data );  
         
      return action.payload.data;
         
              
      default:
        return state;
  }
}