const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Items');

// @route GET api/items
// @desc GET all items
// @access Public
router.get('/', (req, res) => {
  Item.find().then((item) => {
    res.status(200).json(item)
  }).catch((err) => {
    console.log(err)
    res.status(404).json({ success: false })
  })
})

// @route POST api/items
// @desc Create an item
// @access Public
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });
  newItem.save().then((item) => {
    res.status(200).json(item)
  }).catch((err) => {
    console.log(err);
    res.status(400).json({ success: false })
  })
})

// @route DELETE api/items
// @desc delete an item
// @access Public
router.delete('/:id', (req, res) => {
  Item.findById({ _id: req.params.id }).then((item) => {
    item.remove().then(() => res.status(200).json({ success: true }))
  }).catch((err) => {
    res.status(400).json({ success: false })
  })

})

module.exports = router;