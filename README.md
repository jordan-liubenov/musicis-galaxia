# Musicis Galaxia

Musicis Galaxia is a music store Single Page Application made using React, Express and MongoDB (The MERN stack).

## About

Features user authentication using JWT, data storage in MongoDB and communication to the database
through a Rest API written in Node.js (https://github.com/jordan-liubenov/musicis-rest).

Every user is able to register and log in their profile. They are then able to post offers on instruments, amplifiers or miscellanious items such as strings, guitar picks, etc.

## How to run it

-Clone repository and run `npm install`

-Clone repository for the backend and run `npm install`

-In the backend create a `.env` file and create a `db` variable which holds the connection string to MongoDB

-Run frontend and backend with `npm start`

### Homepage view:

![alt text](https://i.ibb.co/f26fFDV/image.png)

Welcomes clients and explains the basic idea of the application.

### Register:

![alt text](https://i.ibb.co/cKBQMFy/image.png)

Features field validation on the frontend and data validation on the backend, if a user tries creating an account with an already in-use email or username they will be shown an error received from the server.

### Login:

![alt text](https://i.ibb.co/x6yMCvV/image.png)

Features error handling when a user tries sending a login request with incorrect data.

### Create new offer form:

![alt text](https://i.ibb.co/mJtjcTX/image.png)

Three different types of offers available to be created:

**-Instrument**

**-Amplifier**

**-Other**

### Dynamic catalog

![alt text](https://i.ibb.co/17KjjvH/image.png)

Renders either all offers that exist, or renders only offers of one of the three categories based on what the client has selected.

Features a search bar in which the client may type in a value and search through either all offers or only the currently-selected category of offers.

### Dynamic profile

![alt text](https://i.ibb.co/SvBQNjS/image.png)

Shows all offers posted by the currently logged-in user.

### Detail view for each offer

![alt text](https://i.ibb.co/7RdRcKm/image.png)

If the owner opens their own offer, they have access to the Edit and Delete options, but are not able to rate their own posts.

If a user other than the owner of the currently opened post opens the offer, they have the option to rate an offer with a `like` or `dislike`.
