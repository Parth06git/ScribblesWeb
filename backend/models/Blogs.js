const mongoose = require('mongoose')
const { Schema } = mongoose

const blogsSchema = new Schema({

    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    img: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true,
        default: Date.now
    }

})

const Blogs = mongoose.model('blogs', blogsSchema)
module.exports = Blogs