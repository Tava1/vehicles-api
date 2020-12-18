const express = require('express')
const brandsRouter = express.Router();
const BrandsController = require('../controllers/BrandsController')

const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

// Brands
brandsRouter.get('/', BrandsController.read)

brandsRouter.post('/new', upload.single('image'),
  // celebrate({
  //   [Segments.BODY]: Joi.object().keys({
  //     name: Joi.string(),
  //   })
  // }), 
  BrandsController.create)

brandsRouter.put('/:id', upload.single('image'), BrandsController.update)

brandsRouter.delete('/:id', BrandsController.delete)

module.exports = brandsRouter