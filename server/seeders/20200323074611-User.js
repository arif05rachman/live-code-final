'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "arif",
          password: "12345",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "husen",
          password: "12345",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('People', null, {});
  }
};
