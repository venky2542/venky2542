const express = require('express');
const router = express.Router();

const loginUser = require('../controllers/user/login');
const registerUser = require('../controllers/user/register');

const loginAdmin = require('../controllers/admin/loginAdmin');
const registerAdmin = require('../controllers/admin/registerAdmin');

const authenticateToken = require('../middleware/auth');


//................USER..............................

//user Registration
router.post('/register', registerUser.registerUser);
//user Login
router.post('/login', loginUser.loginUser);

//..............ADMIN................................

//Admin Registration
router.post('/registeradmin', registerAdmin.registerAdmin);
//Admin Login
router.post('/loginAdmin', loginAdmin.loginAdmin);


module.exports = router;
