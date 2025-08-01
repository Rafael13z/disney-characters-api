const CharacterModel = require('../models/characterModel');

  class CharacterController {
    async create(req, res) {
      try {
        const character = await CharacterModel.create(req.body);
        return res.status(201).json(character);
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }
    }

    async findAll(req, res) {
      try {
        const characters = await CharacterModel.findAll();
        return res.status(200).json(characters);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    }

    async findById(req, res) {
      try {
        const character = await CharacterModel.findById(req.params.id);
        if (!character) {
          return res.status(404).json({ error: 'Personagem não encontrado' });
        }
        return res.status(200).json(character);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    }

    async update(req, res) {
      try {
        const character = await CharacterModel.update(req.params.id, req.body);
        if (!character) {
          return res.status(404).json({ error: 'Personagem não encontrado' });
        }
        return res.status(200).json(character);
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }
    }

    async delete(req, res) {
      try {
        const character = await CharacterModel.delete(req.params.id);
        if (!character) {
          return res.status(404).json({ error: 'Personagem não encontrado' });
        }
        return res.status(204).send();
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    }
  }

  module.exports = new CharacterController();