const router = require('express').Router()
const Budget = require('../models/budget')



router.get('/budget', (request, response, next) => {
  
  Budget
      .find({})
      .exec((error, event) => {

    if (error) return response.send(error.message);

    response.send(Budget);
  })
  
})



// // creates a new budget
// router.post('/budget', (request, response, next) => {
//   let newProduct = new Product();

//   newProduct.category = req.body.category;
//   newProduct.name = req.body.name;
//   newProduct.price = req.body.price;
//   newProduct.image = req.body.image;
//   newProduct.reviews = [];

//   newProduct.save((err, prod) => {
//     if (err) throw err
    
//   })
//   res.send(prod);
// });




module.exports = router