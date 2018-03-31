var Light = require('../models/Light');

// Display list of all Light readings.
//exports.light_list = function(req, res) {
//    res.send('NOT IMPLEMENTED: Light list');
//};

exports.light_list = function(req, res, next) {

  Light.find({}, 'time_stamp sensor_reading')
    .populate('readings')
    .exec(function (err, list_light) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('light_list', { title: 'Light Readings', light_list: list_light });
    });
    
};

// return new Promise((resolve, reject) => {
//        model.findOne({ bar: "foo" }, {}, { sort: { '_id': -1 } }, function(
//          err,
//          obj
//        ) {
//          resolve(obj);
  //      });
    //  });