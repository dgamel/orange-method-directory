'use strict';

const data = require('../../data.json');

module.exports = (req, res) => {
  const cohortId = req.params.cohortId * 1;
  const cohort = data.cohorts.find(cohort => cohort.id === cohortId);

  res.status(200).json({ cohort });
};
