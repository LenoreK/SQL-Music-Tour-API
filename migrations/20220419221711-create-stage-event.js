'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stage_event', {
      stage_event_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      stage_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('stage_event');
  }
};