const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Users = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const keys = require("../config/keys").mongodbUrl;
const passport = require("passport");

mongoose.connect(keys, { useNewUrlParser: true });

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected success.");
});

mongoose.connection.on("error", () => {
  console.log("MongoDB connected error.");
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB connected disconnected.");
});
/* GET users listing. */
router.get('/', (req, res, next) => {
  Users.find({}, (err, doc) => {
    if(err) {
      res.json({
        status: '1',
        msg: err.message
      })
    }else {
      res.json({
        status: '0',
        mag: '',
        result: {
          count: doc.length,
          list: doc
        }
      })
    }
  })
});

//登录接口
router.post("/login", (req, res, next) => {
  // console.log(req.body);
  const username = req.body.username;
  const password = req.body.password;
  Users.findOne({username})
      .then(user => {
        if(!user){
          return res.json({
            status: "none"
          })
        }else{
          //密码匹配
          bcrypt.compare(password, user.password)
              .then(isMatch => {
                if(isMatch){
                  const rule = {
                    id: user._id,
                    name: user.username
                  };
                  jwt.sign(rule, "secret", {expiresIn:3600}, (err, token) => {
                    if(err) throw err;
                    res.json({
                      success: true,
                      token: "Bearer " + token
                    })
                  })
                }else{
                  return res.json({status: "error"})
                }
              })
        }
      });
});

//注册接口
router.post("/register", (req, res, next) => {
  // console.log(req.body);
  Users.findOne({email:req.body.email}).then((user) => {
    if(user){
      return res.json({
        email:"registed"
      })
    }else{
      const newUser = new Users({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
      });

      //加密密码
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          // Store hash in your password DB.
          if(err){
            throw err;
          }else{
            newUser.password = hash;

            newUser.save()
                .then(user => res.json(user))
                .catch(err => console.log(err))
          }

        });
      });
    }
  })
});

//当前用户信息，验证token
router.get("/personal",passport.authenticate('jwt',{session: false}), (req, res, next) => {
  res.json({
    id: req.user._id,
    username: req.user.username,
    email: req.user.email,
  })
});
module.exports = router;
