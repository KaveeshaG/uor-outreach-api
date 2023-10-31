const bookService = require('../services/books.service');

module.exports = {
    getAll: (req, res) => {
        res.json(bookService.getAll());
    },

    getOne: (req, res) => {
        const id = parseInt(req.params.id);
        const book = bookService.getOne(id);
        if (book) {
            res.json(book);
        } else {
            res.status(404).json({ message: 'Book Not Found in Ruhuna' });
        }
    },

    create: (req, res) => {
        const newBook = req.body;
        const createdBook = bookService.create(newBook);
        res.status(201).json(createdBook);
    },

    update: (req, res) => {
        const id = parseInt(req.params.id);
        const updatedBook = req.body;
        const updated = bookService.update(id, updatedBook);

        if (updated) {
            res.json(updatedBook);
        } else {
            res.status(404).json( { message: 'Book Not found in RUHUNA :(' });
        }
    },

    delete: (req, res) => {
        const id = parseInt(req.params.id);
        const deletedBook = bookService.delete(id);

        if (deletedBook) {
            res.json(deletedBook);
        } else {
            res.status(404).json({ message: 'Book not found in RUHUNA :(' });
        }
    },
};