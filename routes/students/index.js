'use strict';

const students = require('express').Router({ mergeParmas: true});
const all = require('./all');

students.get('/', all);

module.exports = students;
