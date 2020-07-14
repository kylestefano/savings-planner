const mongoose = require('mongoose')
const Schema = mongoose.Schema

const budgetSchema = new Schema({
  incomeAmount: Number,
  expenseCategory: String,
  expenseAmount: Number,
  goalAmount: Number,
  })
  
  module.exports = mongoose.model('Budget', budgetSchema)
  
  // let myBudget = new Budget({
  //   incomeAmount: 4500, 
  //   expenseCategory: 'Mortgage', 
  //   expenseAmount: 1500, 
  //   goalAmount: 6000
  // });

  //   myBudget.save();
  
  