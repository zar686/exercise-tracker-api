const router = require('express').Router()
const User = require('../models/user.model.js')

// first route or end point that takes incoming request at / users url path
router.route('/').get((req, res) => {
// users.find is a mongoose method that returns a promise
  User.find()
  // return will be users in json format
    .then(users => res.json(users))

    // else we catch the error with status 400 and error message
    .catch(err => res.status(400).json('Error: ' + err))
})

// this takes in incoming http POST request
router.route('/add').post((req, res) => {
  // adding username
  const username = req.body.username

  const newUser = new User({username})
  // new user is saved to the database using save method
  newUser.save()
    // notified that user is added else we receive an error
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err))
})

// Exporting the router
module.exports = router
