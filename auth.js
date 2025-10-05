// routes/auth.js or index.js
const express = require("express");
const router = express.Router();
const User = require("../models/User"); // adjust path if needed

router.post("/register", async (req, res) => {
  try {
    console.log("📥 Request received:", req.body); // check incoming data

    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required!" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    console.log("✅ User saved successfully!");
    res.status(200).json({ message: "Registration successful!" });

  } catch (err) {
    console.error("❌ Registration error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;



























// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// // REGISTER
// router.post('/register', async (req, res) => {
//   const { name, email, password } = req.body;
//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(400).json({ message: 'User already exists' });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new User({ name, email, password: hashedPassword });
//     await user.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // LOGIN
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: 'Invalid credentials' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;

// router.post('/register', async (req, res) => {
//   const { name, email, password } = req.body;

//   // Check if user exists
//   const existingUser = await User.findOne({ email });
//   if(existingUser) return res.status(400).json({ message: "User already exists" });

//   // Hash password
//   const hashedPassword = await bcrypt.hash(password, 10);

//   const user = new User({ name, email, password: hashedPassword });
//   await user.save();

//   res.status(201).json({ message: "User created successfully" });
// });










































// // const jwt = require('jsonwebtoken');

// module.exports = function(req,res,next){
//   const token = req.header('Authorization')?.split(' ')[1];
//   if(!token) return res.status(401).json({ message: 'No token, authorization denied' });
//   }
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded.user;
//     next();
//   } catch(err){
//     res.status(401).json({ message: 'Token is not valid' });
//   }


// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/user');

// router.post('/register', async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     const existingUser = await User.findOne({ email });
//     if(existingUser) return res.status(400).json({ message: 'User already exists' });

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = new User({ name, email, password: hashedPassword });
//     await user.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;