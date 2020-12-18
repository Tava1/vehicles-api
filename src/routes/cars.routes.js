const express = require('express')
const carsRouter = express.Router();
const { celebrate, Segments, Joi } = require('celebrate')

const CarsController = require('../controllers/CarsController')

// Cars
carsRouter.get('/', CarsController.read)

carsRouter.post('/new', celebrate({
  [Segments.BODY]: Joi.object().keys({
    model: Joi.string().required(),
    description: Joi.string().required(),
    horsePower: Joi.number().required().integer(),
    torqueNm: Joi.number().required().integer(),
    price: Joi.number().precision(2),
    typeVehicle: Joi.string().required(),
    idBrand: Joi.number().required().integer()
  })
}), CarsController.create)

carsRouter.put('/:id', celebrate({
  [Segments.BODY]: Joi.object().keys({
    model: Joi.string().required(),
    description: Joi.string().required(),
    horsePower: Joi.number().required().integer(),
    torqueNm: Joi.number().required().integer(),
    price: Joi.number().precision(2),
    typeVehicle: Joi.string().required(),
    idBrand: Joi.number().required().integer()
  })
}), CarsController.update)

carsRouter.delete('/:id', CarsController.delete)

module.exports = carsRouter