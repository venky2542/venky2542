const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/users');


async function loginUser(req, res) {
          try {
            const { name ,email , password } = req.body;
            const user = await User.findOne({ email });
        
            if (user && (await (password, user.password))) {
              const token = jwt.sign({ email : user.email }, '1334')
              res.status(200).json({ token , message: 'User logged in successfully' });
             
            } else {
              res.status(401).json({ error: 'Invalid credentials' });
            }
          } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
          }
        }
        
        module.exports = { loginUser };