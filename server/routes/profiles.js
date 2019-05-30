const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Profiles = require("../models/Profile");
const passport = require("passport");
const fs = require('fs')
const multer = require('multer')
// mongoose.connect(keys, { useNewUrlParser: true });
//
// mongoose.connection.on("connected", () => {
//     console.log("MongoDB connected success.");
// });
//
// mongoose.connection.on("error", () => {
//     console.log("MongoDB connected error.");
// });
//
// mongoose.connection.on("disconnected", () => {
//     console.log("MongoDB connected disconnected.");
// });

/* GET users listing. */
router.get('/', (req, res, next) =>   {
    res.json({msg: 'profil es is open'})
});
//登录接口
module.exports = router;
