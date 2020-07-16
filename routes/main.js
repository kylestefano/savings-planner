const router = require('express').Router()
const Budget = require('../models/budget')



router.get('/budget/:budgetId', (request, response, next) => {
  const budgetId = request.params.budgetId;

  Budget
  .findById(budgetId, (error, budget) => {
    if (error) return next(error)
    
      response.send(budget);
    
  })
});



// creates a new budget
router.post('/budget', (request, response, next) => {
  let newBudget = new Budget();

  newBudget.incomeAmount = request.body.incomeAmount;
  newBudget.expenses = request.body.expenses;
  // newBudget.expenseCategory = "Mortgage";
  // newBudget.expenseAmount = 1500;
  newBudget.goalAmount = request.body.goalAmount;
  

  newBudget.save((error, budget) => {
    if (error) throw error
    
  })
  response.send(newBudget);
});




module.exports = router