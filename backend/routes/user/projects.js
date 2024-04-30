const express = require('express');
const router = express.Router();

const { Add_Project, Edit_Project, Delete_Project } = require('../../controllers/user/projects_cntr');

router.post('/add/:candidateId' , Add_Project);
router.put('/edit/:projectId' , Edit_Project);
router.delete('/delete/:candidateId/:projectId' , Delete_Project);

module.exports = router;