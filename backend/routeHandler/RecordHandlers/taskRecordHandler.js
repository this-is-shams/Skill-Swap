// const express = require("express")
// const router = express.Router()
// const devRecord = require("../../schemas/devRecordSchema")
// const MenteeSignUp = require("../../schemas/menteeSchema")
// const task = require("../../schemas/taskSchema")

// router.get("/", async (req, res) => {
//   try {
//     const users = await devRecord.find()
//     res.json(users)
//   } catch (err) {
//     res.status(500).json({ message: err.message })
//   }
// })
// router.get("/:username", async (req, res) => {
//   const { username } = req.params

//   try {
//     // Checking if the user exists
//     const foundUser = await devRecord.findOne({ user: username })
//     if (!foundUser) {
//       return res.status(401).json({ message: "User not found" })
//     }

//     // Fetching user's DEV records
//     const userAllDevRecord = await devRecord.find({ user: username })
//     res.json(userAllDevRecord)
//   } catch (err) {
//     console.error(err)
//     res.status(500).json({ message: "An error occurred during user retrieval" })
//   }
// })

// // POST DEV data
// router.post("/", async (req, res) => {
//   try {
//     const devRecordInsert = new devRecord({
//       user: req.body.user,
//       taskId: req.body.taskId,
//       title: req.body.title,
//       description: req.body.description,
//       time: req.body.time,
//       date: req.body.date,
//       links: req.body.links,
//       remarks: req.body.remarks,
//     })

//     res.status(200).json({
//       message: "Development Record Inserted successfully!",
//       statusCode: 200,
//     })
//   } catch (err) {
//     console.error(err)
//     res.status(500).json({
//       err: "Development Record Insertion failed!",
//     })
//   }
// })

// // GET USER DEVELOPMENT RECORDS
// router.get("/:username", async (req, res) => {
//   try {
//     const { username } = req.params

//     try {
//       // Checking if the user exists
//       const foundUser = await MenteeSignUp.findOne({ user: username }) // To match username with DB
//       console.log(foundUser)
//       console.log(username)
//       if (!foundUser) {
//         return res.status(401).json({ message: "User Not found!" })
//       }

//       // Fetching user's development records
//       const userAllDevRecord = await devRecord.find({ user: username })

//       if (userAllDevRecord.length === 0) {
//         return res.status(401).json({ message: "No Records to show!" })
//       } else {
//         res.send(userAllDevRecord)
//       }
//     } catch (err) {
//       console.error(err)
//       res
//         .status(500)
//         .json({ message: "An error occurred during user retrival" })
//     }
//   } catch (err) {
//     console.error(err)
//     res.status(500).json({ message: "An error occurred from server side" })
//   }
// })

// // DELETE  DEVELOPMENT DATA RECORD by User ID and Serial Number
// router.delete("/:userId/:taskId", async (req, res) => {
//   const { userId, taskId } = req.params
//   console.log(userId, taskId)
//   try {
//     // Find the CP record in the database by user ID and serial number and remove it
//     const deletedRecord = await devRecord.findOneAndDelete({
//       user: userId,
//       taskId: taskId,
//     })

//     if (!deletedRecord) {
//       return res.status(404).json({ message: "Development Record not found" })
//     }

//     // Find the associated leaderboard record and update the totalCpTime
//     const leaderboardUser = await leaderboard.findOne({
//       user: deletedRecord.user,
//     })
//     if (leaderboardUser) {
//       leaderboardUser.totalDevTime -= deletedRecord.time
//       await leaderboardUser.save()
//     }
//     res.status(200).json({ message: "Development Record deleted successfully" })
//   } catch (err) {
//     console.error(err)
//     res.status(500).json({
//       message: "An error occurred while deleting the Development Record",
//     })
//   }
// })

// module.exports = router
