'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('tarefas', [{
       titulo: 'Estudar Node.js',
       descricao: "Estudar Alura",
       status: "a fazer",
       createdAt: new Date(),
       updatedAt: new Date()
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('tarefas', null, {});

  }
};
