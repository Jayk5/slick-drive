const db = require("../../../models");
const User = db.user;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const logoutUser = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).send({
      message: "Logged out successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: err.message,
    });
  }
};
module.exports = logoutUser;
