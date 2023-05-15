const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const SignUp = require('../schemas/signupschema');

// POST signin data
router.post('/', async (req, res) => {
  const { user, pass, option } = req.body;
  
  try {
    
    // Find the user in the database
    const foundUser = await SignUp.findOne({ user });

    if (!foundUser) {
      return res.status(401).json({ message: 'Authentication failed. Invalid username or password.' });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(pass, foundUser.pass);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Authentication failed. Invalid username or password.' });
    }

    // Check the option value
    if (option !== 'fjs' && option !== 'sp') {
      return res.status(400).json({ message: 'Invalid option value. Please provide either "fjs" or "sp".' });
    }

    // Authentication successful
    res.status(200).json({ message: 'Authentication successful!', statusCode: 200 });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred during authentication.' });
  }
});

module.exports = router;
