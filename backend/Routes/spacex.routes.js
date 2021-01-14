const {
  getSpacexData,
  getFilteredSpacexData,
} = require('../Controller/spacex.controller');

const router = require('express').Router();

router.get('/', getSpacexData).get('/filter', getFilteredSpacexData);

module.exports = router;
