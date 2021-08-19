const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: [ true, "Please provide a title" ]
  },
  body: {
    type: String,
    required: [ true, "PLease provide a body" ]
  }
}, {
  timestamps: true
})

module.exports = mongoose.model("Post", PostSchema)