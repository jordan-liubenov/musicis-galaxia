# Musicis Galaxia

Musicis Galaxia is a music store Single Page Application made using React, Express and MongoDB.

## About

Features user authentication using JWT, data storage in MongoDB and communication to the database
through a Rest API written in Node.js (https://github.com/jordan-liubenov/musicis-rest).

Every user is able to register and log in their profile. They are then able to post offers on instruments, amplifiers or miscellanious items such as strings, guitar picks, etc.

## How to run it

-Clone repository and run `npm install`

-Clone repository for the backend and run `npm install` 

-In the backend create a `.env` file and create a `db` variable which holds the connection string to MongoDB

-Run frontend and backend with `npm start`

# Homepage view:

![alt text](https://i.ibb.co/f26fFDV/image.png)

# Register view:

![alt text](https://i.ibb.co/cKBQMFy/image.png)

# Login view:

![alt text](https://i.ibb.co/x6yMCvV/image.png)

# Create new offer view:

![alt text](https://i.ibb.co/mJtjcTX/image.png)

Three different types of offers available to be created:

**-Instrument**

**-Amplifier**

**-Other**

# Dynamic profile view showing all offers created by the currently logged-in user

![alt text](https://i.ibb.co/5KWWHzX/image.png)
