import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Employee = sequelize.define('Employee', {
  employee_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  birthdate: {
    type: DataTypes.DATE
  },
  salary: {
    type: DataTypes.FLOAT
  }
}, {
  tableName: 'employees', // optional: maps directly to existing table name
  timestamps: false       // disable timestamps if not using createdAt/updatedAt
});

export default Employee;
