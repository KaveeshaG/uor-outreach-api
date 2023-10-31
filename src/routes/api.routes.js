const express = require('express');
const router = express.Router();

const bookController = require('../controllers/books.controller');

router.get('/books', bookController.getAll);
router.get('/books/:id', bookController.getOne);
router.post('/books', bookController.create);
router.put('/books/:id', bookController.update);
router.delete('/books/:id', bookController.delete);

module.exports = router;