const express = require("express")
const router = express.Router()
const cpRecord = require("../../schemas/cpRecordSchema")
const MenteeSignUp = require("../../schemas/menteeSchema")
const leaderboard = require("../../schemas/leaderBoardSchema")

router.get("/", async (req, res) => {
  try {
    const users = await cpRecord.find()
    res.json(users)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// POST CP data
router.post("/", async (req, res) => {
  try {
    const devRecordInsert = new cpRecord({
      user: req.body.user,
      serial: req.body.serial,
      link: req.body.link,
      status: req.body.status,
      time: req.body.time,
      date: req.body.date,
      remarks: req.body.remarks,
    })
    const leaderboardUser = await leaderboard.findOne({ user: req.body.user }) // To match username with DB
    leaderboardUser.totalCpTime += req.body.time

    await devRecordInsert.save()
    await leaderboardUser.save()
    res.status(200).json({
      message: "CP Record Inserted successfully!",
      statusCode: 200,
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({
      err: "CP Record Insertion failed!",
    })
  }
})

// GET USER CP RECORDS
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

      // Fetching user's CP records
      const userAllCpRecord = await cpRecord.find({ user: username })

      if (userAllCpRecord.length === 0) {
        return res.status(401).json({ message: "No Records to show!" })
      } else {
        res.send(userAllCpRecord)
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
