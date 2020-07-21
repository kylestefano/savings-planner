import { combineReducers } from 'redux';
import BudgetReducer from './budgetReducer';
import updateBudgetReducer from './updateBudgetReducer';

const rootReducer = combineReducers({
    budget: BudgetReducer,
    updatedBudget: updateBudgetReducer
});

export default rootReducer;