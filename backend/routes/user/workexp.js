const express = require('express');
const router = express.Router();

const { Add_WorkExp, Edit_WorkExp, Delete_WorkExp } = require('../../controllers/user/workexp_cntr');

router.post('/add/:candidateId' , Add_WorkExp);
router.put('/edit/:workexpId' , Edit_WorkExp);
router.delete('/delete/:candidateId/:workexpId' , Delete_WorkExp);

module.exports = router;