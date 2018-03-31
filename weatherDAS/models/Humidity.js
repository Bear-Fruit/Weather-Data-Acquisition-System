var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var HumiditySchema = new Schema(
  {
    sensor_reading: {type: Number, required: true, max: 100},
    time_stamp: {type: Date},
  }
);

// Virtual for Humidity reading
HumiditySchema
.virtual('Reading')
.get(function () {
  return this.sensor_reading ;
});

// Virtual for Humidity's URL
HumiditySchema
.virtual('url')
.get(function () {
  return '/Station/Humidity/' + this._id;
});

//Export model
module.exports = mongoose.model('Humidity', HumiditySchema);