var Pressure = require('../models/Pressure');

// Display list of all Pressure Readings.
//exports.pressure_list = function(req, res) {
//    res.send('NOT IMPLEMENTED: Pressure list');
//};

exports.pressure_list = function(req, res, next) {

  Pressure.find({}, 'time_stamp sensor_reading')
    .populate('readings')
    .exec(function (err, list_pressure) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('pressure_list', { title: 'Pressure Readings', pressure_list: list_pressure });
    });
    
};