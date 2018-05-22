'use strict';

var utils = require('../utils/writer.js');
var Admins = require('../service/AdminsService');

module.exports.addJoke = function addJoke (req, res, next) {
  var item = req.swagger.params['item'].value;
  Admins.addJoke(item)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
