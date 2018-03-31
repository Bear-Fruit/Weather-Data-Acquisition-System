var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var LightSchema = new Schema(
  {
    sensor_reading: {type: Number, required: true, max: 100},
    time_stamp: {type: Date},
  }
);

// Virtual for Light reading
LightSchema
.virtual('Reading')
.get(function () {
  return this.sensor_reading ;
});

// Virtual for Light's URL
LightSchema
.virtual('url')
.get(function () {
  return '/Station/Light/' + this._id;
});

//Export model
module.exports = mongoose.model('Light', LightSchema);