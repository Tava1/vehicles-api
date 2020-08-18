const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate')
const routes = express.Router();

const BrandsController = require('./controllers/BrandsController')
const CarsController = require('./controllers/CarsController')
const MotorcyclesController = require('./controllers/MotorcyclesController')

const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

routes.get('/', (req, res) => {
  return res.send({
    "Brand": "http://localhost:5555/brands",
    "Cars": "http://localhost:5555/cars",
    "Motorcycles": "http://localhost:5555/motorcycle"
  })
})

// Brands
routes.get('/brands', BrandsController.read)

routes.post('/brands/new', upload.single('image'), celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string(),
    image: Joi.binary(),
  })

}), BrandsController.create)


// Para teste da req sem celebrate :
// routes.post('/brands/new', upload.single('image'), (req, res) => {
//   console.log(req.file.path)
//   return res.sendStatus(200)
// })

// Cars
routes.get('/cars', CarsController.read)

routes.post('/cars/new', celebrate({
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

// Motorcycle
routes.get('/motorcycle', MotorcyclesController.read)

routes.post('/motorcycle/new', celebrate({
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

module.exports = routes;