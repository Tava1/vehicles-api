const connection = require('../database/connection')
const { read } = require('./MotorcyclesController')

module.exports = {
  async create(request, response) {
    const { model, description, horsePower, torqueNm, price, typeVehicle, idBrand } = request.body

    await connection('Cars').insert({
      model,
      description,
      horsePower,
      torqueNm,
      price,
      typeVehicle,
      idBrand
    })

    console.log('Carro incluido com sucesso')
    return response
  },

  async read(request, response) {
    const cars = await connection('Cars').select('*')

    return response.json(cars)
  }
}