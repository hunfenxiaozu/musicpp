const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
   "id": {type: String},
    "password": String,
    "username": String,
    "email": String,
    "avatar": String,
    "sex": String,
    "age": String
});

module.exports = mongoose.model('Users', userSchema);