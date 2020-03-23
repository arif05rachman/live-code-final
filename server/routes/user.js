const express = require('express');
const router = express.Router();
const Controller = require("../controllers/user");

router.post('/login', Controller.login)

module.exports = router