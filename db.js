const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/profs_tasks_db');
const { STRING, UUID, UUIDV4 } = Sequelize;

const Widget = conn.define('widget', {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true
  },
  name: {
    type: STRING
  } 
})

module.exports = {
  conn,
  Widget
};
