const express = require("express")
const router = express.Router()
const MenteeSignUp = require("../../schemas/menteeSchema")
const task = require("../../schemas/taskSchema")

router.get("/", async (req, res) => {
  try {
    const tasks = await task.find()
    res.json(tasks)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})
router.get("/:mTaskId", async (req, res) => {
  const { mTaskId } = req.params

  try {
    // Checking if the user exists
    const foundUser = await task.findOne({ mTaskId: mTaskId })
    if (!foundUser) {
      return res.status(401).json({ message: "Task not found" })
    }

    // Fetching user's DEV records
    const userAllTaskRecord = await task.find({ mTaskId: mTaskId })
    res.json(userAllTaskRecord)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "An error occurred during task retrieval" })
  }
})

// POST Task data
router.post("/", async (req, res) => {
  try {
    const taskNew = new task({
        mTaskId : req.body.mTaskId,
        mentorId: req.body.mentorId,
        date: req.body.date,
        taskTitle: req.body.taskTitle,
        taskDescription: req.body.taskDescription,
        resources: req.body.resources,
        menteeId: req.body.menteeId  || "All",
    })

    await taskNew.save()
    res.status(200).json({
      message: "Task added successfully!",
      statusCode: 200,
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({
      err: "Task Add failed!",
    })
  }
})

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

module.exports = router
