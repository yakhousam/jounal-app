const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const JournalSchema = new Schema({
    userId: String,
    title: String,
    text: String,
    date_create: {type:Date, default:Date.now}
})




module.exports = mongoose.model('Journal', JournalSchema);