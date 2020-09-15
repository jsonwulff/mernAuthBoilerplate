const express = require("express");
const router = express.Router();
// Import controller
const {signup, activateAccount, login} = require("../controller/auth");

router.post("/signup", signup);
router.post("/activate-email/:token", activateAccount);
router.post("/login/", login);

module.exports = router;