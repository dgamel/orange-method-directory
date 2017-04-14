'use strict';

const routes = require('express').Router();
const cohorts = require('./cohorts');

routes.use('/cohorts', cohorts);

routes.get('/', (req, res) => {
  res.status(200)
    .json({
      message: 'The app is up and running.'
    });
});

module.exports = routes;
