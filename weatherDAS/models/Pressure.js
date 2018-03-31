var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PressureSchema = new Schema(
  {
    sensor_reading: {type: Number, required: true, max: 100},
    time_stamp: {type: Date},
  }
);

// Virtual for Temperature reading
PressureSchema
.virtual('Reading')
.get(function () {
  return this.sensor_reading ;
});

// Virtual for Temperature's URL
PressureSchema
.virtual('url')
.get(function () {
  return '/Station/Pressure/' + this._id;
});

//Export model
module.exports = mongoose.model('Pressure', PressureSchema);