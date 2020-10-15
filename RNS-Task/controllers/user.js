const User = require("../models/user");

const AddUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(200).send(user);
  } catch (e) {
    console.log("Error: ", e);
  }
};

const FetchUsers = async (req, res) => {
  try {
    const users = await User.find({});
    if (!users) {
      return res.send("NO User Found");
    }
    res.status(200).send(users);
  } catch (e) {
    console.log("Error: ", e);
  }
};

exports.AddUser = AddUser;
exports.FetchUsers = FetchUsers;
