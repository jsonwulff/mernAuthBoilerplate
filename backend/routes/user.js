const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/', (req, res) => {
  const id = req.body.id;
  console.log(id);
  User.findById(id)
    .then((user) => {
      console.log(user);
      res.json(user);
    })
    .catch((err) => {
      console.log('fejl');
      res.json({ Error: err });
    });
});

module.exports = router;
