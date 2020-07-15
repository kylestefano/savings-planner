import { CREATE_BUDGET } from '../actions/index'



export default function(state = [], action) {
  switch (action.type) {
    case CREATE_BUDGET:
        console.log(action.payload.data)
      return action.payload.data
    default:
      return state;
  }
}