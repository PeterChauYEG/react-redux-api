// BASE SETUP
// =============================================================================
// Requests are proxyed in from PORT 8080
// Any request none matching on the client will be proxied to us

// call the packages we need
import bodyParser from 'body-parser'
import express from 'express'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'

// import models
import Car from './db/models/car'

// import config
import {
  apiSecret,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_URL,
  DB_USER,
}
from './config'

// initialize express
const app = express()

// connect to our db
// mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_URL}.mlab.com:${DB_PORT}/${DB_NAME}`)

// secret variable
app.set('apiSecret', apiSecret)

// set port which api will run on
app.set('port', (process.env.PORT || 8081))

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// ROUTES FOR OUR API
// =============================================================================
const router = express.Router()

// middleware to use for all requests
router.use((req, res, next) => {
  // do logging
  console.log("REQUEST MADE")

  // make sure we go to the next routes and don't stop here
  next()
})

// accessed at GET http://localhost:8081/api
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Pogo Maintenance Map API'
  })
})

// on routes that end in /cars
// -----------------------------------------------------------------------------
router.route('/cars')

  // get all cars
  .get((req, res) => {

    // get all cars from database
    Car.find({}, (err, cars) => {
      if (err) {
        res.send(err)
      }

      // send flavours back to client
      res.send(cars)
    })
  })

  // create a car (accessed at POST http://localhost:8081/api/cars)
  .post((req, res) => {
    const {
      body: {
        name,
      },
    } = req

    // create a new instance of the Car model
    const car = new Car()

    car.name = name

    // save the car and check for errors
    car.save((err, car) => {
      if (err) {
        res.send(err)
      }

      res.send(car)
    })
  })

// REGISTER OUR ROUTES ---------------------------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router)

// START THE SERVER
// =============================================================================
app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

console.log('Magic happens on port ' + app.get('port'))
