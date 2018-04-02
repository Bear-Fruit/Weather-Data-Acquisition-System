var Temperature = require('../models/Temperature');
var Humidity = require('../models/Humidity');
var Light = require('../models/Light');
var Pressure = require('../models/Pressure');
var async = require('async');


exports.update_new = function(req, res, next){
  async.parallel({
        temperature_update: function(callback) {
            Temperature.findOne({},'time_stamp sensor_reading').sort({time_stamp: -1}).populate('readings').exec(callback);
        },
        humidity_update: function(callback) {
            Humidity.findOne({},'time_stamp sensor_reading').sort({time_stamp: -1}).populate('readings').exec(callback);
        },
        light_update: function(callback) {
            Light.findOne({}, 'time_stamp sensor_reading').sort({time_stamp: -1}).populate('readings').exec(callback);
        },
        pressure_update: function(callback) {
            Pressure.findOne({}, 'time_stamp sensor_reading').sort({time_stamp: -1}).populate('readings').exec(callback);
        },
        
        
    }, function(err, results) {
        res.render('weather_now', { title: 'Latest Readings', error: err, data: results  });
    });

};

exports.update_news = function(req, res, next){
  async.parallel({
        temperature_update: function(callback) {
            Temperature.findOne({},'time_stamp sensor_reading').sort({time_stamp: -1}).populate('readings').exec(callback);
        },
        humidity_update: function(callback) {
            Humidity.findOne({},'time_stamp sensor_reading').sort({time_stamp: -1}).populate('readings').exec(callback);
        },
        light_update: function(callback) {
            Light.findOne({}, 'time_stamp sensor_reading').sort({time_stamp: -1}).populate('readings').exec(callback);
        },
        pressure_update: function(callback) {
            Pressure.findOne({}, 'time_stamp sensor_reading').sort({time_stamp: -1}).populate('readings').exec(callback);
        },
        
        
    }, function(err, results) {
        res.render('weather_now_data', { title: 'Latest Readings', error: err, data: results  });
    });

};

