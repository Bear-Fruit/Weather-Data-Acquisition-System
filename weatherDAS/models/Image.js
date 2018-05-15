var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ImageSchema = new Schema(
  {
    sensor_reading: {type: Buffer, required: true, max: 100},
    time_stamp: {type: Date},
  }
);

// Virtual for Image reading
ImageSchema
.virtual('Reading')
.get(function () {
  return this.sensor_reading ;
});

// Virtual for Humidity's URL
ImageSchema
.virtual('url')
.get(function () {
  return '/Station/Image/' + this._id;
});

//Export model
module.exports = mongoose.model('Images', ImageSchema);