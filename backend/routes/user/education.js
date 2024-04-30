const express = require('express');
const router = express.Router();

const { 
    Add_Education, 
    Edit_Education, 
    Delete_Education } = require('../../controllers/user/education_cntr');

router.post('/add/:candidateId' , Add_Education);
router.put('/edit/:educationId' , Edit_Education);
router.delete('/delete/:candidateId/:educationId' , Delete_Education);

module.exports = router;