"use strict";
require("dotenv").config();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        user_id: 1,
        first_name: "John",
        last_name: "Doe",
        email: "example@example.com",
        password_digest: "password",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    const [users] = await queryInterface.sequelize.query(
      `SELECT user_id from users LIMIT 1;`
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
