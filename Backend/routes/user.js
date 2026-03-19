const { Router } = require('express');
const { handleSignUp, handleLogin } = require('../controllers/user');

const router = Router();
console.log('Inside Routes');

router.post('/sign-up', handleSignUp);
router.post('/login', handleLogin);

module.exports = router;