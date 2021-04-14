const express = require('express');
const postController = require('../controllers/postController');
const router = express.Router();

/* GET post listing. */
router.get('/', postController.index);
/*Post post*/
router.post('/', postController.create);
/*Update post*/
router.put('/:id', postController.update);
/*delete post*/
router.delete('/:id', postController.delete);
/*buscar  usuario*/
router.get('/:usuarios_id', postController.show);

module.exports = router;