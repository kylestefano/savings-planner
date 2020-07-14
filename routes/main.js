const router = require('express').Router()
const Budget = require('../models/budget')



router.get('/budget/:budget', (request, response, next) => {
  const budgetId = request.params.budget;

  Budget
  .findById(budgetId, (error, budget) => {
    if (error) return next(error)
    
      response.send(budget);
    
  })
});



// creates a new budget
router.post('/budget', (request, response, next) => {
  let newBudget = new Budget();

  newBudget.incomeAmount = 4500;
  newBudget.expenseCategory = "Mortgage";
  newBudget.expenseAmount = 1500;
  newBudget.goalAmount = 6000;
  

  newBudget.save((error, budget) => {
    if (error) throw error
    
  })
  response.send(newBudget);
});




module.exports = router