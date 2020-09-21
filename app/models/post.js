const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

module.exports = mongoose.model('Post', postSchema)
