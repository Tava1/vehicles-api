const connection = require('../database/connection')

module.exports = {
  async create(request, response) {
    const { model, description, horsePower, torqueNm, price, typeVehicle, idBrand } = request.body

    try {
      await connection('Cars').insert({
        model,
        description,
        horsePower,
        torqueNm,
        price,
        typeVehicle,
        idBrand
      })
    } catch (error) {
      response.sendStatus(500)
    }
    return response.send('Incluido com sucesso')
  },

  async read(request, response) {
    const cars = await connection('Cars').select('*')

    return response.json(cars)
  },

  async update(request, response) {
    const { id } = request.params
    const { model, description, horsePower, torqueNm, price, typeVehicle, idBrand } = request.body
    try {
      await connection('Cars')
        .where('ID', '=', id)
        .update({
          model,
          description,
          horsePower,
          torqueNm,
          price,
          typeVehicle,
          idBrand
        })
    } catch (error) {
      response.sendStatus(500)
    }
    return response.send('Atualizado com sucesso')
  },

  async delete(request, response) {
    const { id } = request.params

    try {
      await connection('Cars')
        .where('ID', '=', id)
        .del()
    } catch (error) {
      response.sendStatus(500)
    }
    return response.send('Deletado com sucesso')
  }
}