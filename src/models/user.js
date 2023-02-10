const MONGOOSE = require("mongoose");

const user_schema = MONGOOSE.Schema({
  user_name: { type: String, require: true },
  age: { type: Number, require: true },
  email: { type: String, require: true, unique: true },
  address: {
    type: Object,
    require: true,
    city: { type: String, require: true },
    code_zip: { type: String, require: true },
  },
});

module.exports = MONGOOSE.model("UserCollection", user_schema);
