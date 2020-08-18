const connection = require('../database/connection')

module.exports = {
  async create(request, response) {
    const { model, description, cylinder, torqueNm, price, typeVehicle, idBrand } = request.body

    await connection('Motorcycle').insert({
      model,
      description,
      cylinder,
      torqueNm,
      price,
      typeVehicle,
      idBrand
    })

    return console.log('Moto incluida com sucesso')
  },

  async read(request, response) {
    const motorcycles = await connection('Motorcycle').select('*')

    return response.json(motorcycles)
  }
}