const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/authentication');
const testUser = require('../middleware/test-user');

const { login, register, updateUser } = require('../controllers/auth');

router.post('/login', login);
router.post('/register', register);
router.patch('/updateUser', authenticateUser, testUser, updateUser);

module.exports = router;
