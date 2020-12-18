const express = require('express');
const motorcyclesRouter = express.Router();
const { celebrate, Segments, Joi } = require('celebrate');

const MotorcyclesController = require('../controllers/MotorcyclesController')

motorcyclesRouter.get('/', MotorcyclesController.read)

motorcyclesRouter.post('/new', celebrate({
  [Segments.BODY]: Joi.object().keys({
    model: Joi.string().required(),
    description: Joi.string().required(),
    cylinder: Joi.number().required().integer(),
    torqueNm: Joi.number().required().integer(),
    price: Joi.number().precision(2),
    typeVehicle: Joi.string().required(),
    idBrand: Joi.number().required().integer()
  })
}), MotorcyclesController.create)

motorcyclesRouter.put('/:id', celebrate({
  [Segments.BODY]: Joi.object().keys({
    model: Joi.string().required(),
    description: Joi.string().required(),
    cylinder: Joi.number().required().integer(),
    torqueNm: Joi.number().required().integer(),
    price: Joi.number().precision(2),
    typeVehicle: Joi.string().required(),
    idBrand: Joi.number().required().integer()
  })
}), MotorcyclesController.update)

motorcyclesRouter.delete('/:id', MotorcyclesController.delete)

module.exports = motorcyclesRouter