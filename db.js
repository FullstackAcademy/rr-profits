const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/profs_tasks_db');



module.exports = {
  conn,
};
