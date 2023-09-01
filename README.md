# Bitespeed_Backend_Assignment
Endoint : 'https://bitspeed-backend-xvyu.onrender.com/identify'
Method: POST
RequestBody : {
                  "email": "example@email.com",
                  "phoneNumber": "1234567890"
              }

Response : 	{
            		"contact":{
            			"primaryContatctId": 1,
            			"emails": ["example@gmail.com"]
            			"phoneNumbers": ["123456789"]
            			"secondaryContactIds": []
            		}
            }
