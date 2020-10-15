const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.post("/users", userController.AddUser);
router.get("/users", userController.FetchUsers);

module.exports = router;
