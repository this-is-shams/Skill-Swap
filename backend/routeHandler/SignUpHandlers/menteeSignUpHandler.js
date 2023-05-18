const express = require("express")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const router = express.Router()
const menteeSignUp = require("../../schemas/menteeSchema")

router.get("/", async (req, res) => {
  try {
    const users = await menteeSignUp.find()
    res.json(users)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// POST signup data
router.post("/", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.pass, 10)
    const newMenteeSignUp = new menteeSignUp({
      name: req.body.name,
      user: req.body.user,
      pass: hashedPassword,
      conPass: hashedPassword,
      cat: req.body.cat,
      mentor: req.body.mentor,
    })

    await newMenteeSignUp.save()
    res.status(200).json({
      message: "Mentee Signup successful!",
      statusCode: 200,
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({
      err: "Mentee Signup failed!",
    })
  }
})
//POST all signup data
router.post("/all", async (req, res) => {})

//PUT signup data
router.put("/:id", async (req, res) => {})

//DELETE signup data
router.delete("/:id", async (req, res) => {})

module.exports = router
