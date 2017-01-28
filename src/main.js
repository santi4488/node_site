"use strict";

var angular = require('angular');

var app = angular.module('app', []);

app.controller('iceAndFireCtrl', require('./controllers/ice_and_fire_ctrl').controller);

module.exports = {
  app: app,
};
