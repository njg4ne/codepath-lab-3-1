const express = require("express");

const router = express.Router();
const GiftExchange = require("../models/gift-exchange");

// router.route('/pairs')
//   .post((req, res, next) => {
//     console.log(req.body)
//     res.send('Add a book')
//   })

router.post("/pairs", (req, res, next) => {
  const names = req.body?.names;
  try {
    res.send(GiftExchange.pairs(names));
  } catch (error) {
    next(error);
  }
});

router.post("/traditional", (req, res) => {
  const names = req.body?.names;
  res.send(GiftExchange.traditional(names));
});

module.exports = router;
