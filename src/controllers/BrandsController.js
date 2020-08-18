const connection = require('../database/connection')

module.exports = {
  async create(request, response) {
    const { id, name, image } = request.body;

    console.log(name, image)
    console.log(request.file.path)

    await connection('Brands').insert({
      name,
      image,
    })

    // TODO: Devolver o ultimo ID inserido

    console.log("Marca Incluida com sucesso!")
    return response.json({ id })
  },

  async read(request, response) {

    const brands = await connection('Brands').select('*')

    return response.json(brands)
  }
}