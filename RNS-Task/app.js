const express = require("express");
require("./db/mongoose");
const userRouter = require("./routes/users");
const chatRouter = require("./routes/chat");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(userRouter);
app.use(chatRouter);

app.listen(5000, () => {
  console.log("server connected");
});
