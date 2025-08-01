const express = require('express');
const router = express.Router();
const CharacterController = require('../controllers/characterController');

router.post('/', CharacterController.create);
router.get('/', CharacterController.findAll);
router.get('/:id', CharacterController.findById);
router.put('/:id', CharacterController.update);
router.delete('/:id', CharacterController.delete);

module.exports = router;