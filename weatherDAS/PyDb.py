
#python version of DbConnect.js
from mongothon import *
from pymongo import MongoClient
import time
import datetime

connection = MongoClient("mongodb://user_name:zhilja0@ds121289.mlab.com:21289/weather_station")
db = connection.weather_station
'''try:
    connection.admin.command( 'ismaster' )
except ConnectionFailure:
   print("Server not available")
   '''
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

i=datetime.datetime.now()
print(i)
def saveTemperature(reading,time):
    temperature = Temperature({
    "sensor_reading": reading,
    "time_stamp": time
    })
    print("Saving temperature......")
    temperature.save()
    print(temperature)
    print ("Saved!")

def saveHumidity(reading,time):
    humidity = Humidity({
    "sensor_reading": reading,
    "time_stamp": time
    })
    print("Saving humidity.....")
    humidity.save()
    print(humidity)
    print("Saved!")

def saveLight(reading,time):
    light = Light({
    "sensor_reading": reading,
    "time_stamp": time
    })
    print("Saving light......")
    light.save()
    print(light)
    print("Saved!")

def savePressure(reading,time):
    pressure = Pressure({
    "sensor_reading": reading,
    "time_stamp": time
    })
    print("Saving humidity....")
    pressure.save()
    print(pressure)
    print("Saved!")

    
#saveTemperature(3,i)
#saveHumidity(2,i)
#saveLight(5,i)
#savePressure(7,i)
print(i)

#cd C:\Users\Lazarus\Desktop\JS\Node DB\weatherDAS
