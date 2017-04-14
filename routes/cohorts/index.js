'use strict';

const cohorts = require('express').Router();
const all = require('./all');
const single = require('./single');
const students = require('./students');

cohorts.use('/:cohortID/students', students);

cohorts.get('/:cohortId', single);

cohorts.get('/', all);

module.exports = cohorts;
