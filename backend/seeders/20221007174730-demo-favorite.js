'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("favorites", [
      {
        favorite_id: 1,
        title: "Barack Obama",
        authors: "Steven J Niven",
        description: "Affordable, readable, and indispensable, this pocket biography of Barack Obama allows you to put the story of our 44th President right in your back pocket. Written in a clear and concise style, this biography is accessible for anyone interested in a brief yet thorough introduction to Barack Obama. Steven J. Niven of the W. E. B. Du Bois Institute at Harvard University chronicles President Obamas personal biography and his political rise, as well as examining his relationship with race and his role in history. The book also includes an introduction by the world-renowned scholar Henry Louis Gates Jr. and a bibliography for further reading to help readers know where to go for more information. In addition, the book includes a transcript of Obamas famous A More Perfect Union speech on race in America. This book is the perfect, quick introduction to Barack Obama, Americas 44th President.",
        user_id: "1",
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);

    const [favorites] = await queryInterface.sequelize.query(
      `SELECT favorite_id from users LIMIT 1;`
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  }
};
