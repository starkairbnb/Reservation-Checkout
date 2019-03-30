const router = require('express').Router();
const controller = require('./controller.js');

router.route('/:property_id').get(controller.get);

module.exports = router;
