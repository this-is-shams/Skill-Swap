const express = require("express")
const router = express.Router()
const devRecord = require("../../schemas/devRecordSchema")
const MenteeSignUp = require("../../schemas/menteeSchema")

router.get("/", async (req, res) => {
  try {
    const users = await devRecord.find()
    res.json(users)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// POST signup data
router.post("/", async (req, res) => {
  try {
    const devRecordInsert = new devRecord({
      user: req.body.user,
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      links: req.body.links,
    })

    await devRecordInsert.save()
    res.status(200).json({
      message: "Record Inserted successfully!",
      statusCode: 200,
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({
      err: "Record Insertion failed!",
    })
  }
})

// GET USER DEVELOPMENT RECORDS
router.get("/:username", async (req, res) => {
  try {
    const { username } = req.params

    try {
      // Checking if the user exists
      const foundUser = await MenteeSignUp.findOne({ user: username }) // To match username with DB
      console.log(foundUser)
      console.log(username)
      if (!foundUser) {
        return res.status(401).json({ message: "User Not found!" })
      }

      // Fetching user's development records
      const userAllDevRecord = await devRecord.find({ user: username })

      if (userAllDevRecord.length === 0) {
        return res.status(401).json({ message: "No Records to show!" })
      } else {
        res.send(userAllDevRecord)
      }
    } catch (err) {
      console.error(err)
      res
        .status(500)
        .json({ message: "An error occurred during user retrival" })
    }
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "An error occurred from server side" })
  }
})

module.exports = router
