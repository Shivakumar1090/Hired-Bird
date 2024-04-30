const express = require('express');
const router = express.Router();

const CompanySignin = require('../../controllers/company/auth/login');
const CompanySignup = require('../../controllers/company/auth/register');

router.post('/signin' , CompanySignin);
router.post('/signup' , CompanySignup);

module.exports = router;