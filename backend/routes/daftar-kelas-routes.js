const express = require("express");
const route = express.Router();

const {
  getAllDaftarKelasByUserId, // get semua Kelas yang dibeli setiap user
  addDaftarKelasByUserId, // add Kelas yang dibeli user
} = require("../controllers/daftar-Kelas-controller");

route.get("/user/:id", getAllDaftarKelasByUserId);
route.post("/user/:id", addDaftarKelasByUserId);

module.exports = route;
