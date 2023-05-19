const mongoose = require("mongoose")

const cpRecordSchema = mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  remarks: {
    type: String,
    default: "No Remarks YET",
    required: true,
  },
})

const cpRecord = mongoose.model("cpRecord", cpRecordSchema)

module.exports = cpRecord
