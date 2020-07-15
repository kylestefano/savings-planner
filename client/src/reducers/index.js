import { combineReducers } from 'redux';
import BudgetReducer from './budgetReducer';


const rootReducer = combineReducers({
    budget: BudgetReducer
 
});

export default rootReducer;