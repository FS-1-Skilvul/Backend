const express = require('express');
const router = express.Router();
const KelasController = require('../controllers/Kelas-controller');
const validateRole = require('../middleware/auth.admin');


router.post('/Kelas', validateRole, KelasController.createKelas);

// Rute untuk memperbarui Kelas berdasarkan ID
router.put('/Kelas/:id', validateRole, KelasController.editKelas);

// Rute untuk menghapus Kelas berdasarkan ID
router.delete('/Kelas/:id', validateRole, KelasController.deleteKelasById);

module.exports = router;