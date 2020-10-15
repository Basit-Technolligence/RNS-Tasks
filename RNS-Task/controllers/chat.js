const Chat = require("../models/chat");

const AddMessage = async (req, res) => {
  try {
    const message = new Chat(req.body);
    await message.save();
    res.status(200).send(message);
  } catch (e) {
    console.log("Error: ", e);
  }
};

const FetchMessagesByUser = async (req, res) => {
  try {
    const message = await Chat.find(req.body);
    if (!message) {
      return res.send("no message found");
    }
    res.status(200).send(message);
  } catch (e) {
    console.log("Error: ", e);
  }
};

exports.AddMessage = AddMessage;
exports.FetchMessagesByUser = FetchMessagesByUser;
