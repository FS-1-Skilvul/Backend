"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Kelas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // many to one relation with kategori table
      Kelas.belongsTo(models.Kategori_Kelas, {
        foreignKey: "id_kategori",
      });

      // many-to-many relation with user table using daftar_Kelas as a junction table
      Kelas.belongsToMany(models.User, {
        through: "Daftar_Kelas",
        foreignKey: "id_kelas",
      });
    }
  }
  Kelas.init(
    {
      id_kategori: DataTypes.INTEGER,
      nama_kelas: DataTypes.STRING,
      deskripsi: DataTypes.TEXT,
      harga: DataTypes.INTEGER,
      gambar: DataTypes.STRING,
      video: DataTypes.STRING,
      nama_pengajar: DataTypes.STRING,
      detail_pengajar: DataTypes.TEXT,
      durasi: DataTypes.TIME,
      rating: DataTypes.FLOAT,
    },
    {
      sequelize,  
      modelName: "Kelas",
      // freezeTableName: true,
      tableName: 'Kelas'
     }
  );
  
  console.log(`Model 'Kelas' is defined with table name: ${Kelas.getTableName()}`);
  
  // Optionally, you can add a hook to log when synchronization occurs
  sequelize.sync().then(() => {
  console.log('Database synchronized successfully');
}).catch((error) => {
  console.error('Database synchronization failed:', error);
});

return Kelas;
};