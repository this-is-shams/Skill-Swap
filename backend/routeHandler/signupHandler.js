const express = require('express');
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const router = express.Router();
const signupSchema = require('../schemas/signupschema')
const SignUp = new mongoose.model("SignUp",signupSchema);


router.get('/', async (req, res) => {
    try {
      const users = await SignUp.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

//GET all the signup data
router.get("/", async (req,res) => {});

//GET a signup data by id
router.get("/:id", async (req,res) => {});

//POST signup data
router.post("/", async(req,res) => {
    const hashedPassword = await bcrypt.hash(req.body.pass,10);
    const newSignup = new SignUp({
        name: req.body.name,
        user: req.body.user,
        pass: hashedPassword,
        conPass: hashedPassword,
        cat: req.body.cat,
        mentor: req.body.mentor,

    });
    await newSignup.save();
    await newSignup
        .save()
        .then(() => {
            res.status(200).json({
                message: 'Signup successful!',
                statusCode: 200 
            });
        })
        .catch(() => {
            res.status(500).json({
                err: 'Signup failed!',
            });
        });
});

//POST all signup data
router.post("/all", async (req,res) => {});

//PUT signup data
router.put("/:id", async (req,res) => {});

//DELETE signup data
router.delete("/:id", async (req,res) => {});

module.exports = router;