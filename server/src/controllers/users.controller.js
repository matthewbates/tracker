const mongoose = require("mongoose");

const User = require("../models/users.model");

//! POST /users/signup
const createNewUser = (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      // look to see if the email already exists
      if (user.length >= 1) {
        res.status(409).json({
          message: "Email already exists",
        });
      }
      //   else if (req.body.password !== res.body.confirmPassword) {
      //     res.status(400).json({
      //       message: "Passwords don't match",
      //     });
      //   }
      // create a new user
      else {
        const user = new User({
          _id: new mongoose.Types.ObjectId(),
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        });
        user.save().then((result) => {
          console.log(result);
          res.status(201).json({
            message: "Account created successfully",
            user: [
              {
                userId: user._id,
                name: user.email,
                email: user.email,
              },
            ],
          });
        });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: err,
      });
    });
};

//! GET /users
const getAllUsers = (req, res, next) => {
  User.find()
    .exec()
    .then((docs) => {
      res.status(200).json({
        count: docs.length,
        users: docs.map((doc) => {
          return {
            id: doc._id,
            email: doc.email,
          };
        }),
      });
    })
    .catch((err) => {
      console.log("Authentication failed: Profile not found");
      res.status(500).json({
        error: err,
      });
    });
};

module.exports = { createNewUser, getAllUsers };
