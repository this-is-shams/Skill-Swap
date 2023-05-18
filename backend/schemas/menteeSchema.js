const mongoose = require("mongoose")

const menteeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },
  conPass: {
    type: String,
    required: true,
  },
  cat: {
    type: String,
    required: true,
  },
  mentor: {
    type: String,
    required: true,
  },
})

const MenteeSignUp = mongoose.model("Mentee", menteeSchema)

module.exports = MenteeSignUp
