const express = require("express");
const router = express.Router();
// Import controller
const {signup, activateAccount} = require("../controller/auth");

router.post("/signup", signup);
router.post("/activate-email/:token", activateAccount);

module.exports = router;