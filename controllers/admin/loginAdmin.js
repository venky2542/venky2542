const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AdminModel = require('../../models/Admin'); // Assuming your model is named AdminModel

async function loginAdmin(req, res) {
  try {
    const { username, password } = req.body;
    const admin = await AdminModel.findOne({ username }); // Use a different variable name here

    if (admin && (await bcrypt.compare(password, admin.password))) {
      const token = jwt.sign({ username: admin.username }, '1334'); // Include expiresIn in options
      res.status(200).json({ token });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { loginAdmin };
