const express = require("express");
const router = express.Router();
// Import controller
const {signup} = require("../controller/auth");

router.post("/signup", signup);

module.exports = router;