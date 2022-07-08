const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    name: String, 
    secondName: String,
    lastName: String,
    maidenName: String,
    day: String,
    month: String,
    year: String,
    email: String,
    cellphone: String,
  },
  {
   timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
