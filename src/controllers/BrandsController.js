const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { name } = request.body
    const { filename } = request.file

    const id = await connection('Brands').insert({
      Name: name,
      Image: filename,
    })

    return response.json({
      sendStatus: 201,
      message: "Criado com sucesso",
      id
    })
  },

  async read(request, response) {

    const brands = await connection('Brands').select('*')

    return response.json(brands)
  },

  async update(request, response) {

    const { id } = request.params;
    const { name } = request.body;
    const { filename } = request.file;

    try {
      const brandUpdated = await connection('Brands')
        .where('ID', '=', id)
        .update({
          Name: name,
          Image: filename,
        })
    } catch (error) {
      response.sendStatus(500)
    }
    return response.json({
      status: 200,
      message: "Alterado com sucesso"
    })
  },

  async delete(request, response) {
    const { id } = request.params

    try {
      await connection('Brands')
        .where('ID', '=', id)
        .del()
    } catch (error) {
      response.sendStatus(500)
    }
    return response.json({
      status: 200,
      message: "Deletado com sucesso"
    })
  }
}