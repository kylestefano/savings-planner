import { CREATE_BUDGET, GET_BUDGET, UPDATE_BUDGET } from '../actions/index';


export default function(state = {}, action) {
  
  switch (action.type) {
    
    case CREATE_BUDGET:
        console.log("this is what we are creating", action.payload)
      return action.payload.data
      
      
    case GET_BUDGET:
      console.log("this is the payload ", action.payload)
      
      
        console.log( "Action payload for get_budget is", action.payload.data );  
          return action.payload.data;
         
                        
        
    case UPDATE_BUDGET:
      console.log("this is what we are updating", action.payload)
      return action.payload.data
              
          
          
      default:
        return state;
  }
}