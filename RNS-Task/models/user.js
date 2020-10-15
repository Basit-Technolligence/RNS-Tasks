const mongoose = require("mongoose");

const User = mongoose.model("User", {
  FirstName: {
    type: String,
  },
  LastName: {
    type: String,
  },
  Email: {
    type: String,
  },
});

module.exports = User;
