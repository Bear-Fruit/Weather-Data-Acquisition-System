import datetime
import PyDb as db
import random
from pytz import timezone
run = True
i = 1

def readTemperature():
    print("Reading temperature")
    return random.randint(5,35)

def readPressure():
    print("Reading pressure")
    return random.randint(5,35)

def readHumidity():
    print("Reading temperature")
    return random.randint(5,35)

def readLight():
    print("Reading pressure")
    return random.randint(5,35)

def readCamera():
    print("Capturing image")
    return "image"
#timezone('Africa/Johannesburg')
#MAIN FUNCTION
while run == True:
    t = datetime.datetime.now()
    print(t)
    print("Run : {number}" .format(number=i))
    db.saveTemperature(readTemperature() ,t)
    db.saveHumidity(readHumidity()  ,t)
    db.saveLight(readLight()  ,t)
    db.savePressure( readPressure() ,t) 
    #print(readTemperature())
    #print(readPressure())
    #print(readCamera())
    i += 1
    if i>1:
        run = input("Continue loop: ")
        if run:
            i=1
        #run = False


    


    
    
