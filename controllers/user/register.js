const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/users');

async function registerUser(req, res) {
  try {
    const {id ,name ,email , password ,age } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ id ,name ,email , password: hashedPassword ,age });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


module.exports = { registerUser };
