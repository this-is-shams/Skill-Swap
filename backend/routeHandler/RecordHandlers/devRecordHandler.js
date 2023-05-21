const express = require("express")
const router = express.Router()
const devRecord = require("../../schemas/devRecordSchema")
const MenteeSignUp = require("../../schemas/menteeSchema")
const leaderboard = require("../../schemas/leaderBoardSchema")

router.get("/", async (req, res) => {
  try {
    const users = await devRecord.find()
    res.json(users)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})
router.get("/:username", async (req, res) => {
  const { username } = req.params

  try {
    // Checking if the user exists
    const foundUser = await devRecord.findOne({ user: username })
    if (!foundUser) {
      return res.status(401).json({ message: "User not found" })
    }

    // Fetching user's DEV records
    const userAllDevRecord = await devRecord.find({ user: username })
    res.json(userAllDevRecord)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "An error occurred during user retrieval" })
  }
})

// POST DEV data
router.post("/", async (req, res) => {
  try {
    const devRecordInsert = new devRecord({
      user: req.body.user,
      taskId: req.body.taskId,
      title: req.body.title,
      description: req.body.description,
      time: req.body.time,
      date: req.body.date,
      links: req.body.links,
      remarks: req.body.remarks,
    })
    const leaderboardUser = await leaderboard.findOne({ user: req.body.user }) // To match username with DB
    leaderboardUser.totalDevTime += req.body.time

    await devRecordInsert.save()
    await leaderboardUser.save()
    res.status(200).json({
      message: "Development Record Inserted successfully!",
      statusCode: 200,
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({
      err: "Development Record Insertion failed!",
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
