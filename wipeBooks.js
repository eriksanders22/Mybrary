require('dotenv').config()
const mongoose = require('mongoose')
const Book = require('./models/book')

mongoose.connect(process.env.DATABASE_URL)

async function wipe() {
    await Book.deleteMany({})
    console.log('All books deleted')
    process.exit()
}

wipe()
