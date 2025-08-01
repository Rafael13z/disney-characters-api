const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class CharacterModel {
  async create(data) {
    return await prisma.characters.create({ data });
  }

  async findAll() {
    return await prisma.characters.findMany();
  }

  async findById(id) {
    return await prisma.characters.findUnique({ where: { id: parseInt(id) } });
  }

  async update(id, data) {
    return await prisma.characters.update({
      where: { id: parseInt(id) },
      data,
    });
  }

  async delete(id) {
    return await prisma.characters.delete({ where: { id: parseInt(id) } });
  }
}

module.exports = new CharacterModel();