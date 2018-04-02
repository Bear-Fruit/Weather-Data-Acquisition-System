#! /usr/bin/env node
var db = require("./DbConnector.js")
var async = require('async')
var temp,hum,light,pres,date;
var i=-1;

//2ND APPROACH - USE ASYNC TO RUN THE UPDATE IN PARALLEL FOR FIXED INTERVAL WITH SETINTERVAL
setInterval(function (res,rej){
  date = new Date();
  async.series(
    console.log('RUN'+date),
    db.temperatureCreate(Math.floor(Math.random() * 20), date),
    db.pressureCreate(Math.floor(Math.random() * 20),date),
    db.lightCreate(Math.floor(Math.random() * 20),date),
    db.humidityCreate(Math.floor(Math.random() * 20),date),
    
)
},20000);



// RUNNING THE UPDATES 10X WITH WHILE LOOP-THIS WAS THE FIRST APPROACH
/*
while (i < 10){

temp = Math.floor(Math.random() * 20);
hum = Math.floor(Math.random() * 20);
light = Math.floor(Math.random() * 20);
pres = Math.floor(Math.random() * 20);
console.log( temp+ ', ' + hum + ', '+light +', '+ pres);
 
date = new Date();
console.log('RUN'+ i);
//delay(2000);
db.lightCreate(temp, date);
db.temperatureCreate(hum, date);
db.humidityCreate(light, date);
db.pressureCreate(pres, date);

i +=1
}
*/


