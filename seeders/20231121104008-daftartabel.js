'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert("Tabels", [
      {name: "kanda", email: "kanda@gmail.com", number:"1", message:"mejanya harus bersih", createdAt: new Date()},
      {name: "sodara", email: "sodara@gmail.com", number:"2", message:"mejanya harus bersih",createdAt: new Date()}
    ])

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
