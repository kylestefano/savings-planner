import axios from 'axios'

const ROOT_URL = "http://localhost:8000/budget";

export const CREATE_BUDGET = "CREATE_BUDGET";


export function createBudget (budgetData) {

    let url = `${ROOT_URL}/`;
    
    const request = axios({
        method: "post",
        url: url,
        data: budgetData
        
    })
    
    console.log('Request', request);
    return {
        type: CREATE_BUDGET,
        payload: request,
    };
}