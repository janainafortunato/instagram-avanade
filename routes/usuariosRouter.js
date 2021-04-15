const express = require('express');
const usuariosController = require('../controllers/usuariosController');
const ValidarCadastro = require('../middlewares/ValidarCadastro');
const router = express.Router();

/* GET usuarios listing. */
router.get('/', usuariosController.index);
/*Post usuarios*/
router.post('/', ValidarCadastro, usuariosController.create);
/*Update usuarios*/
router.put('/:id', usuariosController.update);
/*delete usuario*/
router.delete('/:id', usuariosController.delete);

module.exports = router;
