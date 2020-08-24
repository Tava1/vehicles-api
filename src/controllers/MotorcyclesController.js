const connection = require('../database/connection')

module.exports = {
  async create(request, response) {
    const { model, description, cylinder, torqueNm, price, typeVehicle, idBrand } = request.body

    try {
      await connection('Motorcycle').insert({
        model,
        description,
        cylinder,
        torqueNm,
        price,
        typeVehicle,
        idBrand
      })
    }
    catch (error) {
      console.log(error)
      return response.sendStatus(500)
    }
    return response.send('Incluído com sucesso.')
  },

  async read(request, response) {
    const motorcycles = await connection('Motorcycle').select('*')

    return response.json(motorcycles)
  },

  async update(request, response) {
    const { id } = request.params
    const { model, description, cylinder, torqueNm, price, typeVehicle, idBrand } = request.body

    try {
      await connection('Motorcycle')
        .where('ID', '=', id)
        .update({
          model,
          description,
          cylinder,
          torqueNm,
          price,
          typeVehicle,
          idBrand
        })
    }
    catch (error) {
      console.log(error)
      return response.sendStatus(500)
    }
    return response.send('Atualizado com sucesso.')
  },

  async delete(request, response) {
    const { id } = request.params

    try {
      await connection('Motorcycle')
        .where('ID', '=', id)
        .del()
    }
    catch (error) {
      console.log(error)
      return response.sendStatus(500)
    }
    return response.send('Deletado com sucesso.')
  }
}