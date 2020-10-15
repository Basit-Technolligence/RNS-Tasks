const mongoose = require("mongoose");

const Chat = mongoose.model("Chat", {
  to: {
    type: String,
  },
  Message: {
    type: String,
  },
  from: {
    type: String,
  },
});

module.exports = Chat;
