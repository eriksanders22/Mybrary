const mongoose = require('mongoose')
const Book = require('./book')

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

authorSchema.pre('deleteOne', { document: true, query: false }, async function () {
    const count = await Book.countDocuments({ author: this.id })

    if (count > 0) {
        throw new Error('This author has books still')
    }
})


module.exports = mongoose.model('Author', authorSchema)