const mongoose = require('mongoose')

const userSchema  = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type: String, required: true, unique: true},
    age: Number,
    isActive: {type: Boolean, default:true}
}, {timestamps: true})

module.exports = mongoose.model('user', userSchema)


// Book should have: title (String, required), author (String, required), publishedYear (Number), genres (Array of String)

const bookSchema  = new mongoose.Schema({
    title: {type:String, required: true},
    author: {type:String, required: true}, 
    publishedYear: Number,
    genres: [String]
})

module.exports  = mongoose.model('user', bookSchema)

// Review should have: text (String, required), rating (Number, 1-5 only), book (ObjectId, ref 'Book'), createdAt (Date, default now)
const reviewSchema = new mongoose.Schema({
    text: {type: String, required: true},
    rating: {type: Number, min:1, max:5, required: true,enum:[1,2,3,4,5]},
    book: {type: mongoose.Schema.Types.objectID, ref:"Book", required: true},
    createdAt: { type: Date, default: Date.now }
})
