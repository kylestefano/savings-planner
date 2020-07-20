const router = require('express').Router()
const Budget = require('../models/budget')



router.get('/budget/:userId', (request, response, next) => {
  const userId = request.params.userId;

  

  Budget
  .find({userId: userId}, (error, budget) => {
    if (error) return next(error)
    console.log("Kyle needs ", budget)
    response.send(budget);
    
  })
});



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
  // console.log("this is request.body ", request.body)
  // let newBudget = new Budget();
  Budget
      .find(request.params.userId)
      .exec((error, budget) => {

        if (error) return next(error)
        
        let income = request.body.incomeAmount;
        // let savingsGoal = request.body.goalAmount;
        let expenseTotal = 0;
        
        
        
        for (var i = 0; i < request.body.expenses.length; i++) {
          let expenseAmount = Number(request.body.expenses[i].amount)
          if (expenseAmount > 0) {
            expenseTotal += expenseAmount;
          }
        }
        // debugger
        // console.log("total of expenses ", expenseTotal)
        
        let monthlyAmountSaved = (income - expenseTotal)
          
        
        // console.log("expense data ", request.body);
        
        let savingsGoal = request.body.goalAmount;
        
        let monthsToSave = (savingsGoal / monthlyAmountSaved)
        console.log ("months to hit goal is ", monthsToSave)
        
        let graphData = []
        let graphXAxis = []
        
        for (var j = 0; j < (monthsToSave + 1); j++) {
          let graphLine = (monthlyAmountSaved * j)
          graphData.push(graphLine)
          graphXAxis.push(j)
        }
        
        
        
        
        budget.save((error, budget) => {
          if (error) throw error
          
          response.send(budget);
        })
      })
});


module.exports = router