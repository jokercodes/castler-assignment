const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema
let UserInfo = new Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    address: {
      type: String,
    },
  },
  {
    collection: "UserInfo",
  }
);

module.exports = mongoose.model("UserInfo", UserInfo);
