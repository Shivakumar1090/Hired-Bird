const express = require('express');
const router = express.Router();

const { CompProfile, Edit_CompProfile } = require('../../controllers/company/comp_prof_cntr');

router.get('/' , CompProfile);
router.edit('/edit' , Edit_CompProfile);

module.exports = router;