"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Kelas", "id_kategori", {
      type: Sequelize.INTEGER,
      after: "id",
      allowNull: true,
      references: {
        model: "Kategori_Kelas",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Kelas", "id_kategori");
  },
};
