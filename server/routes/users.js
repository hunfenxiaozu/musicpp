const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Users = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const keys = require("../config/keys").mongodbUrl;
const passport = require("passport");
const querystring = require("querystring");
const fs = require('fs')
const multer = require('multer')
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
router.get('/', (req, res, next) =>   {
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
                    name: user.username,
                    email: user.email,
                    sex: user.sex,
                    age: user.age
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
    email: req.user.email
  })
});

// 修改用户信息
router.post("/postmsg", (req, res, next) => {
  const params = {
    username: req.body.username,
    age: req.body.age,
    sex: req.body.sex,
    email: req.body.email
  }

  // console.log(req.body);
  Users.updateOne({_id: req.body.id}, {$set: params}, (err) => {
    if(!err){
      console.log("修改成功！");
      res.send("1")
    }else{
      throw err;
    }
  })
});

//修改头像
const createFolder = function(folder){
  try{
    fs.accessSync(folder);
  }catch(e){
    fs.mkdirSync(folder);
  }
};

var uploadFolder = '../upload/';

createFolder(uploadFolder);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadFolder);    // 保存的路径，备注：需要自己创建
  },
  filename: function (req, file, cb) {
    // 将保存文件名设置为 字段名 + 时间戳，比如 logo-1478521468943
    cb(null, file.fieldname + '-' + Date.now() + '.png');
  }
});

const upload = multer({ storage: storage })

router.post("/post-avatar", upload.single('logo'), (req, res, next) => {
  var file = req.file;

  console.log('文件类型：%s', file.mimetype);
  console.log('原始文件名：%s', file.originalname);
  console.log('文件大小：%s', file.size);
  console.log('文件保存路径：%s', file.path);
  res.send(file.path);
});
module.exports = router;
