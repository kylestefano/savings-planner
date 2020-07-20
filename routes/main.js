const router = require('express').Router()
const Budget = require('../models/budget')



router.get('/budget/:userId', (request, response, next) => {
  const budgetId = request.params.budgetId;

  Budget
  .findById(budgetId, (error, budget) => {
    if (error) return next(error)
    
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




module.exports = router