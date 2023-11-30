const express = require("express");
const { getUserByToken, updateUserByToken, getAllUser } = require("../controllers/user.controlller");
const { verifyRoleAdmin } = require("../middleware/token");

const route = express.Router();

route.get("/", getUserByToken);
route.get("/all",verifyRoleAdmin, getAllUser);
route.put("/", updateUserByToken);

module.exports = route;
