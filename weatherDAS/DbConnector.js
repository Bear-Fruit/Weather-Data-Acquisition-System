#! /usr/bin/env node


var async = require('async')
var Humidity = require('./models/Humidity')
var Light = require('./models/Light')
var Pressure = require('./models/Pressure')
var Temperature = require('./models/Temperature')


 //Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb://user_name:zhilja0@ds121289.mlab.com:21289/weather_station';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var humidity 
var light 
var pressure 
var temperature 

function humidityCreate(sensor_reading, time_stamp) {
  var humidity = new Humidity({ sensor_reading: sensor_reading, time_stamp: time_stamp });
       
  humidity.save(function (err) {
    if (err) {
      console.log(err, null);
      return;
    }
    console.log('New Humidity reading: ' + humidity);
  //  humidity.push(humidity)
    (null, humidity);
  }   );
}

function lightCreate(sensor_reading, time_stamp) {
  var light = new Light({ sensor_reading: sensor_reading, time_stamp: time_stamp });
       
  light.save(function (err) {
    if (err) {
      console.log(err, null);
      return;
    }
    console.log('New light reading: ' + light);
  //  light.push(light)
    (null, light);
  }   );
}

function pressureCreate(sensor_reading, time_stamp,cb) {
  var pressure = new Pressure({ sensor_reading: sensor_reading, time_stamp: time_stamp });
       
  pressure.save(function (err) {
    if (err) {
      (err, null);
      return;
    }
    console.log('New Pressure reading: ' + pressure);
 //   pressure.push(pressure)
    (null, pressure);
  }   );
}


function temperatureCreate(sensor_reading, time_stamp) {
  var temperature = new Temperature({ sensor_reading: sensor_reading, time_stamp: time_stamp });
       
  temperature.save(function (err) {
    if (err) {
      (err, null);
      return;
    }
    console.log('New Temperature reading: ' + temperature);
   // temperature.push(temperature)
    (null, temperature);
  }   );
}

// CREATING INSTANCES HERE BECAUSE /randomNumGen.js IS UNABLE TO CALL 
// FUNCTIONS FROM THIS FILE
//var date = new Date(); 
//console.log('Updating.........');


//update run upon execution of randomNumGen.js
/*let update = new Promise(function (res,rej){
 
async.series(
temperatureCreate(Math.floor(Math.random() * 20), date),
pressureCreate(Math.floor(Math.random() * 20),date),
lightCreate(Math.floor(Math.random() * 20),date),
humidityCreate(Math.floor(Math.random() * 20),date),
)});*/

//update run upon execution of this script
/*setInterval(function (res,rej){
 
async.series(
temperatureCreate(Math.floor(Math.random() * 20), date),
pressureCreate(Math.floor(Math.random() * 20),date),
lightCreate(Math.floor(Math.random() * 20),date),
humidityCreate(Math.floor(Math.random() * 20),date),
)},30000);
*/

//update.then(function(res,rej){
//  mongoose.connection.close();
//  console.log('update complete');})
    // All done, disconnect from database
   // mongoose.connection.close();

module.exports.humidityCreate = humidityCreate;
module.exports.lightCreate = lightCreate;
module.exports.temperatureCreate = temperatureCreate;
module.exports.pressureCreate = pressureCreate;

