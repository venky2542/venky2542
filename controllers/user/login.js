const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/users');


async function loginUser(req, res) {
          try {
            const { username, password } = req.body;
            const user = await User.findOne({ username });
        
            if (user && (await bcrypt.compare(password, user.password))) {
              const token = jwt.sign({ username: user.username }, 'your-secret-key', { expiresIn: '1h' });
              res.status(200).json({ token });
            } else {
              res.status(401).json({ error: 'Invalid credentials' });
            }
          } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
          }
        }
        
        module.exports = { loginUser };