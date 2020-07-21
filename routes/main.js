const router = require('express').Router()
const Budget = require('../models/budget')



// router.get('/budget/:userId', (request, response, next) => {
//   const userId = request.params.userId;

  

//   Budget
//   .find({userId: userId}, (error, budget) => {
//     if (error) return next(error)
//     console.log("Kyle needs ", budget)
//     response.send(budget);
    
//   })
// });



// creates a new budget
router.post('/budget', (request, response, next) => {
  console.log("this is request.body ", request.body)
  let newBudget = new Budget();

  newBudget.incomeAmount = request.body.incomeAmount;
  newBudget.expenses = request.body.expenses;
  // newBudget.expenseCategory = "Mortgage";
  // newBudget.expenseAmount = 1500;
  newBudget.goalAmount = request.body.goalAmount;
  newBudget.userId = request.body.userId;
  

  newBudget.save((error, budget) => {
    if (error) throw error
    
    response.send(budget);
  })
});

router.post('/budget/:userId/calculate', (request, response, next) => {
  
  Budget
      .findOne({userId: request.params.userId})
      .exec((error, budget) => {

        if (error) return next(error)
        
        let income = budget.incomeAmount;
        // let savingsGoal = request.body.goalAmount;
        let expenseTotal = 0;
        
        let currentExpenses = budget.expenses
        let expensesToRemove = request.body.expenses

        

          if (expensesToRemove && expensesToRemove.length !== 0) {
            currentExpenses = currentExpenses.filter(expense => {
                expensesToRemove.forEach(expenseToRemove => {
                  if(expenseToRemove.category === expense.category) {
                    return expense.amount = 0
                  }
                })
                return expense.amount
              })
            }

        
        
        for (var i = 0; i < currentExpenses.length; i++) {
          let expenseAmount = Number(currentExpenses[i].amount)
          if (expenseAmount > 0) {
            expenseTotal += expenseAmount;
          }
        }
           
        let monthlyAmountSaved = (income - expenseTotal)
            
        let savingsGoal = budget.goalAmount;
        
        let monthsToSave = (savingsGoal / monthlyAmountSaved)
        // console.log ("months to hit goal is ", monthsToSave)
        
        let graphData = []
        let graphXAxis = []
        
        for (var j = 0; j < (monthsToSave + 1); j++) {
          let graphLine = (monthlyAmountSaved * j)
          graphData.push(graphLine)
          graphXAxis.push(j)
        }

        
        
         
                
        response.send({
          budget: budget,
          expenseTotal: expenseTotal,
          monthlyAmountSaved: monthlyAmountSaved,
          monthsToSave: monthsToSave,

          graphData: graphData,
          graphXAxis:graphXAxis
        });
        
      })
});


module.exports = router