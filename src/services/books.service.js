let books = require('../models/books.model')

const getAll = () => {
    return books;
};

const getOne = (id) => {
    return books.find((book) => book.id === id);
};


const create = (book) => {
    book.id = books.length + 1;
    books.push(book);
    return book;
};

const update = (id, updatedBook) => {
    const index = books.findIndex((book) => book.id === id);
    if (index !== -1) {
        books[index] = { ...books[index], ...updatedBook };
        return true;
    }
    return false;
};

const deleteBook = (id) => {
    const index = books.findIndex((book) => book.id === id);
    if (index !== -1 ) {
        const deletedBook = books[index];
        books = books.filter((book) => book.id !== id);
        return deletedBook;
    }
    return null;
};

module.exports = {
    getAll,
    getOne,
    create,
    update,
    delete: deleteBook
};