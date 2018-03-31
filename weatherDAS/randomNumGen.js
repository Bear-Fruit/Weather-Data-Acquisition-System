var db = require('DbConnector.js')
var temp;
var hum;
var light;
var pres;
var i=-1;



while (i < 10){

  temp = Math.floor(Math.random() * 20);
hum = Math.floor(Math.random() * 20);
light = Math.floor(Math.random() * 20);
pres = Math.floor(Math.random() * 20);
console.log( temp+ ', ' + hum + ', '+light +', '+ pres);
 
date = new Date();
console.log(new Date().toTimeString());
//delay(2000);
//db.lightCreate(temp, date);
//db.temperatureCreate(hum, date);
//db.humidityCreate(light, date);
//db.pressureCreate(pres, date);

i +=1
}

