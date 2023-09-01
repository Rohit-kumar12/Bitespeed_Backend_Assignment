# Bitespeed Backend Assignment

## Identify Endpoint

**Endpoint**: `https://bitspeed-backend-xvyu.onrender.com/identify`
**Method**: POST

### Request Body

```json
{
    "email": "example@email.com",
    "phoneNumber": "1234567890"
}

### Response Body

```json
{
    "contact": {
        "primaryContactId": 1,
        "emails": ["example@gmail.com"],
        "phoneNumbers": ["123456789"],
        "secondaryContactIds": []
    }
}
