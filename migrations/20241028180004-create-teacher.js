'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Teachers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      teaching_style: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      class_intro: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      class_link: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lesson_duration_minute: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Teachers')
  }
}
