var Image = require('../models/Image');

// Display list of all Image readings.
//exports.light_list = function(req, res) {
//    res.send('NOT IMPLEMENTED: Light list');
//};

exports.image_list = function(req, res, next) {

  Image.find({}, 'time_stamp sensor_reading')
    .populate('readings')
    .exec(function (err, list_image) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('image_list', { title: 'Captured images', image_list: list_image });
    });
    
};
