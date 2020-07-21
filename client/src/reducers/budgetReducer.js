import { CREATE_BUDGET } from '../actions/index';


export default function(state = {}, action) {
  
  switch (action.type) {
    
    case CREATE_BUDGET:
        console.log("this is what we are creating", action.payload)
      return action.payload.data
      
      
                  
        
             
          
      default:
        return state;
  }
}