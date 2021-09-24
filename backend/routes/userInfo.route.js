const express = require("express");
const userInfoRoute = express.Router();

let UserInfo = require("../models/userInfo");

userInfoRoute
  .route("/userInfo")
  .get((req, res) => {
    UserInfo.find((error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  })
  .post((req, res, next) => {
    UserInfo.create(req.body, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  });

module.exports = userInfoRoute;
