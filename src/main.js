"use strict";

var angular = require('angular');
var jquery = require('jquery');
var moment = require('moment');
var _ = require('lodash');
var bootstrap = require('bootstrap');

var app = angular.module('app', []);

app.controller('iceAndFireCtrl', require('./controllers/ice_and_fire_ctrl').controller);

module.exports = {
  app: app,
};
