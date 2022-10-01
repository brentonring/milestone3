const router = require('express').Router()
// need to require models once database is connected
// const db = require('../models')
// declare database tables (rename if I got them wrong - Marisol)
// const { Book, User, UserFavorite } = db

// INDEX
router.get('/', async (req, res) => {
    // const books = await Books.findAll()
    // res.json(books)
    res.send({message: 'Success!'});
})

// SHOW
router.get('/:bookId', async (req, res) => {
    let bookId = Number(req.params.bookId)
    if (isNaN(bookId)) {
        res.status(404).json({ message: `Invalid id "${bookId}"` })
    } else {
        const book = await Book.findOne({
            where: { bookId: bookId },
            // include: {
            //     association: 'userFavorite',
            //     include: 'user'
            // }
        })
        if (!book) {
            res.status(404).json({ message: `Could not find place with id "${bookId}"` })
        } else {
            res.json(place)
        }
    }
})


module.exports = router