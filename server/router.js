const router = require('express').Router();
const controller = require('./controller.js');

router.route('/:propertyId').get(controller.get);

module.exports = router;
