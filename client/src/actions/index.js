import axios from 'axios'

const ROOT_URL = "http://localhost:8000/budget";

export const CREATE_BUDGET = "CREATE_BUDGET";
export const GET_BUDGET = "GET_BUDGET";
export const UPDATE_BUDGET = "UPDATE_BUDGET";


export function createBudget(budgetData, callback) {

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

export function getBudget(userId, expenses) {
    
    let url = `${ROOT_URL}/${userId}/calculate`;

    const request = axios({
        method: "post",
        url: url,
        data: {expenses: expenses}
        
    })

    // const request = axios.get(url);
    return {
      type: GET_BUDGET,
      payload: request,
    };
}


// export function getBudget(budgetData, userId, callback) {

//     let url = `${ROOT_URL}/${userId}/calculate`;
    
//     const request = axios({
//         method: "post",
//         url: url,
//         data: budgetData
        
//     })
    
//     request.then(() => callback());
    
//     return {
//         type: UPDATE_BUDGET,
//         payload: request,
//     };

// }