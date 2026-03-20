const { Router } = require('express');
const { handleSignUp, handleLogin, handleProfile } = require('../controllers/user');
const { requireAuth } = require('../middlewares/authentication');

const router = Router();
console.log('Inside Routes');

router.post('/sign-up', handleSignUp);
router.post('/login', handleLogin);
router.get('/profile', requireAuth, handleProfile);

module.exports = router;