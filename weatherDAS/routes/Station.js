var express = require('express');
var router = express.Router();

// Require controller modules.
var humidity_controller = require('../controllers/humidityController');
var light_controller = require('../controllers/lightController');
var pressure_controller = require('../controllers/pressureController');
var temperature_controller = require('../controllers/temperatureController');
var image_controller = require('../controllers/imageController');
var update_controller = require('../controllers/updateController');


/// HUMIDITY ROUTES ///
// GET catalog home page.
router.get('/', humidity_controller.index);
//router.get('/humidity/:id', humidity_controller.humidity_detail);
// GET request for list of all Authors.
router.get('/humidity', humidity_controller.humidity_list);

/// LIGHT ROUTES ///
// GET request for one Author.
//router.get('/light/:id', light_controller.light_detail);
// GET request for list of all Authors.
router.get('/light', light_controller.light_list);

/// PRESSURE ROUTES ///
// GET request for one Author.
//router.get('/pressure/:id', pressure_controller.pressure_detail);
// GET request for list of all Authors.
router.get('/pressure', pressure_controller.pressure_list);

/// TEMPERATURE ROUTES ///
// GET request for one Author.
//router.get('/temperature/:id', temperature_controller.temperature_detail);
// GET request for list of all Authors.
router.get('/temperature', temperature_controller.temperature_list);
router.get('/image', image_controller.image_list);

router.get('/update', update_controller.update_new);
router.get('/update_data', update_controller.update_news);


module.exports = router;


                    