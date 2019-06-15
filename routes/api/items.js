const express = require('express');
const router = express.Router();

const Item = require('../../models/Items');

// @route GET
// @desc GET all aitems
// @access Public
router.get('/', (req, res) => {
  Item.find().then((items) => {
    res.status(200).json(items)
  }).catch((err) => {
    res.status(400).json({ success: false })
  })
})

// @route POST
// @desc Create an aitem
// @access Public
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });
  newItem.save().then((item) => {
    res.status(200).json({ success: true, item })
  }).catch((err) => {
    res.status(400).json({ success: false })
  })
})

// @route DELETE
// @desc Delete an aitem
// @access Public
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id).then((item) => {
    item.remove().then((item) => {
      res.status(200).json({ success: true })
    })
  }).catch((err) => {
    res.status(404).json({ success: false })
  })
})

module.exports = router;