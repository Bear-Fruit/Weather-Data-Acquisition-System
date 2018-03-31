var Temperature = require('../models/Temperature');

// Display list of all Temperature readings.
//exports.temperature_list = function(req, res) {
//    res.send('NOT IMPLEMENTED: Temperature list');
//};
exports.temperature_list = function(req, res, next) {

  Temperature.find({}, 'time_stamp sensor_reading')
    .populate('readings')
    .exec(function (err, list_temperature) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('temperature_list', { title: 'Temperature Readings', temperature_list: list_temperature });
    });
    
};
