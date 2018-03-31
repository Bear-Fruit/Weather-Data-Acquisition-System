var mongoose = require('mongoose');
var moment = require('moment');

var Schema = mongoose.Schema;

var TemperatureSchema = new Schema(
  {
    sensor_reading: {type: Number, required: true, max: 100},
    time_stamp: {type: Date},
  }
);

// Virtual for Temperature reading
TemperatureSchema
.virtual('Reading')
.get(function () {
  return this.sensor_reading ;
});

// Virtual for Temperature's URL
TemperatureSchema
.virtual('url')
.get(function () {
  return '/Station/Temperature/' + this._id;
});

TemperatureSchema
.virtual('time_stamp_formatted')
.get(function () {
  return moment(this.time_stamp).format('LTS');
});

//Export model
module.exports = mongoose.model('Temperature', TemperatureSchema);