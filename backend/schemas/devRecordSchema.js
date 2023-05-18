const mongoose = require("mongoose")

const devRecordSchema = mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  links: {
    type: [String], // Specify that "links" is an array of strings
    // default: [], // Optional: Set a default empty array if desired
    required: true,
  },
})

const devRecord = mongoose.model("devRecord", devRecordSchema)

module.exports = devRecord
