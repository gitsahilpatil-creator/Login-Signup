const { Router } = require('express');
const { handleSignUp } = require('../controllers/user');

const router = Router();
console.log('Inside Routes');

router.post('/sign-up', handleSignUp);

module.exports = router;