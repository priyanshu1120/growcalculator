const express = require("express");
const userRouter = express.Router();
const { UserModel } = require("../model/user.model");
require("dotenv").config();

var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

userRouter.post("/signup", async (req, res) => {
  let { email, password } = req.body;
  let userexits = await UserModel.findOne({ email });
  if (userexits) {
    res.send({ msg: "email already exits try with another" });
  } else {
    try {
      bcrypt.hash(password, 5, async function (err, hash) {
        const userData = new UserModel({ email, password: hash });
        await userData.save();
        res.send("signup successfully");
      });
    } catch (err) {
      console.log(err);
      res.send({ msg: "Something went wrong, pls try again later" });
    }
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await UserModel.find({ email });
    if (user.length > 0) {
      const hashed_password = user[0].password;
      bcrypt.compare(password, hashed_password, function (err, result) {
        if (result) {
          const token = jwt.sign({ userID: user[0]._id }, `${process.env.KEY}`);
          res.send({ msg: "Login successfull", token: token });
        } else {
          res.send("login failed Try Again");
        }
      });
    } else {
      res.send("login failed Try Again");
    }
  } catch (err) {
    res.send("login failed Try Again");
  }
});

module.exports = { userRouter };
