const express = require('express');
const router = express.Router();

const SignIn = require('../../controllers/user/auth/signin');
const SignUp = require('../../controllers/user/auth/signup');


router.post('/signin' , SignIn);
router.post('/signup' , SignUp);

module.exports = router;