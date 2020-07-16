import axios from 'axios'

const ROOT_URL = "http://localhost:8000/budget";

export const CREATE_BUDGET = "CREATE_BUDGET";
export const GET_BUDGET = "GET_BUDGET";


export function createBudget (budgetData, callback) {

    let url = `${ROOT_URL}/`;
    
    const request = axios({
        method: "post",
        url: url,
        data: budgetData
        
    })
    
    request.then(() => callback());
    
    return {
        type: CREATE_BUDGET,
        payload: request,
    };

}

export function getBudget(budgetId) {
    
    let url = `${ROOT_URL}/${budgetId}`;

    const request = axios.get(url);
    request.then((response) => {
        console.log("this is the response ", response)
    })
    return {
      type: GET_BUDGET,
      payload: request,
    };
}