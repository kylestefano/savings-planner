import { CREATE_BUDGET, GET_BUDGET } from '../actions/index';


export default function(state = {}, action) {
  
  switch (action.type) {
    
    case CREATE_BUDGET:
        console.log(action.payload)
      return action.payload
      
      
      case GET_BUDGET:
        console.log("this is the payload ", action.payload)
        
        if (action.payload.data) {
          console.log(
            "Action payload for get_budget is",
            action.payload.data
            );  
            return action.payload.data;
          } else {
            return state;
          }
                          
        default:
          return state;
  }
}