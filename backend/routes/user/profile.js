const express = require("express");
const router = express.Router();

const { Profile } = require("../../controllers/user/profile_cntr");

router.get("/:candidateId" , Profile);

module.exports = router;