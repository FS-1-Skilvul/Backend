const express = require("express");
const route = express.Router();
const authRoute = require("./auth-route");
const userRoute = require("./user.route");
const verifyToken = require("../middleware/token");

const transaksiRoute = require("./transaksi-route");

const KelasRoutes = require("./kelas-routes");
const kategoriRoutes = require("./kategori-routes");
const daftarKelasRoutes = require("./daftar-kelas-routes");

route.use("/Kelas", KelasRoutes);
route.use("/kategori", kategoriRoutes);
route.use("/daftar-Kelas", daftarKelasRoutes);


route.use("/auth", authRoute);
route.use("/users", verifyToken, userRoute);
route.use("/transaksi", transaksiRoute);

module.exports = route;
