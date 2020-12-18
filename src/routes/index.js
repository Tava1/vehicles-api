const express = require('express')
const routes = express.Router();

const brandsRouter = require('./brands.routes');
const carsRouter = require('./cars.routes');
const motorcyclesRouter = require('./motorcycles.routes');

routes.use('/brands', brandsRouter);
routes.use('/cars', carsRouter);
routes.use('/motorcycles', motorcyclesRouter);

routes.get('/', (req, res) => {
  return res.send({
    "Brand": "http://localhost:5555/brands",
    "Cars": "http://localhost:5555/cars",
    "Motorcycles": "http://localhost:5555/motorcycles"
  })
})

module.exports = routes;