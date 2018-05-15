var Temperature = require('../models/Temperature');
var Humidity = require('../models/Humidity');
var Light = require('../models/Light');
var Pressure = require('../models/Pressure');
var Image = require('../models/Image');

var async = require('async');

exports.index = function(req, res) {   
    
    async.parallel({
        temperature_count: function(callback) {
            Temperature.count(callback);
        },
        humidity_count: function(callback) {
            Humidity.count(callback);
        },
        light_count: function(callback) {
            Light.count(callback);
        },
        pressure_count: function(callback) {
            Pressure.count(callback);
        },
        image_count: function(callback) {
            Image.count(callback);
        },
        time: function(callback) {  //should be changed to give time_stamp of lastest readings
            Pressure.count(callback);
        },
        temperature_new: function(callback) {//should be changed to give latest temp reading
            Temperature.count(callback);
        },
        humidity_new: function(callback) {//should be changed to give latest humidity reading
            Humidity.count(callback);
        },
        light_new: function(callback) {//should be changed to give latest light reading
            Light.count(callback);
        },
        pressure_new: function(callback) {//should be changed to give latest pressure reading
            Pressure.count(callback);
        },
        image_new: function(callback) {//should be changed to give latest pressure reading
            Image.count(callback);
        },
        
    }, function(err, results) {
        res.render('index', { title: 'Weather Station Home', error: err, data: results });
    });
};

// Display list of all Light readings.
//exports.humidity_list = function(req, res) {
//    res.send('NOT IMPLEMENTED: Humidity list');
//};

exports.humidity_list = function(req, res, next) {

  Humidity.find({}, 'time_stamp sensor_reading')
    .populate('readings')
    .exec(function (err, list_humidity) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('humidity_list', { title: 'Humidity Readings', humidity_list: list_humidity });
    });
    
};