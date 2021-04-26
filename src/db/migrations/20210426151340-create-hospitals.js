'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('hospitals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hospital_name: {
        type: Sequelize.STRING
      },
      hospital_address: {
        type: Sequelize.STRING
      },
      municipalities: {
        type: Sequelize.STRING
      },
      district: {
        type: Sequelize.STRING
      },
      sub_district: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('hospitals');
  }
};