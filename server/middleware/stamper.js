'use strict';
// middlware in express Land is about req modification
module.exports = (req, res, next) => {
  req.timestamp = new Date();
  next();
}
