
#python version of DbConnect.js
from mongothon import *
from pymongo import MongoClient
import time
import datetime

connection = MongoClient("mongodb://user_name:zhilja0@ds121289.mlab.com:21289/weather_station")
db = connection.weather_station
print (datetime.datetime.now())
HumiditySchema = Schema({
    "sensor_reading": {"type": int, "required": True},
    "time_stamp": {"type": datetime.datetime, "required": True},
})

TemperatureSchema = Schema({
    "sensor_reading": {"type": int, "required": True},
    "time_stamp": {"type": datetime.datetime, "required": True},
})

LightSchema = Schema({
    "sensor_reading": {"type": int, "required": True},
    "time_stamp": {"type": datetime.datetime, "required": True},
})

PressureSchema = Schema({
    "sensor_reading": {"type": int, "required": True},
    "time_stamp": {"type": datetime.datetime, "required": True},
})

Humidity = create_model(HumiditySchema, db['humidities'])
Temperature = create_model(TemperatureSchema, db['temperatures'])
Light = create_model(LightSchema, db['lights'])
Pressure = create_model(PressureSchema, db['pressures'])

i=time
temperature = Temperature({
    "sensor_reading": 100,
    "time_stamp": i
    })
temperature.save()
humidity = Humidity({
    "sensor_reading": 100,
    "time_stamp": i
    })
humidity.save()
light = Light({
    "sensor_reading": 100,
    "time_stamp": i
    })
light.save()
pressure = Pressure({
    "sensor_reading": 100,
    "time_stamp": i
    })
pressure.save()
print(i)

#It's not working. I'm stuck. mongothon isnt well documented or I'm missing something
