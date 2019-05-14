const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
   "id": {type: String},
    "username": String,
    "password": String,
    "email": String,
    "avatar": String
});

module.exports = mongoose.model('Users', userSchema);