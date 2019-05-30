const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    "id": {type: String},
    "author": String,
    "title": String,
    "content": String,
    "date": Date
});

module.exports = mongoose.model('Profile', ProfileSchema);