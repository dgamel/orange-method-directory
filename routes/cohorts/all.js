'use strict';

const data = require('../../data.json');

module.exports = (req, res) => {
  const cohorts = data.cohorts;

  res.status(200).json({ cohorts });
};
