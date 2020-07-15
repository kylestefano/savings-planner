import axios from 'axios'

const ROOT_URL = "http://localhost:8000/budget";

export const CREATE_BUDGET = "CREATE_BUDGET";


export function createBudget (income, expenseCategoryOne, expenseAmountOne, expenseCategoryTwo, expenseAmountTwo, goal) {

    let url = `${ROOT_URL}/`;
    
    const request = axios({
        method: "post",
        url: url,
        data: {
            income: income,
            expenseCategoryOne: expenseCategoryOne,
            expenseAmountOne: expenseAmountOne,
            expenseCategoryTwo: expenseCategoryTwo,
            expenseAmountTwo: expenseAmountTwo,
            goal: goal,
        }
    })
    debugger
    console.log('Request', request);
    return {
        type: CREATE_BUDGET,
        payload: request,
    };
}