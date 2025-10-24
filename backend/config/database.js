import { Sequelize } from 'sequelize';


// Option 1: Using a connection URI
const sequelize = new Sequelize('mysql://admin:Timndbpw10!@database-1.cdw6ge5dlp5u.us-east-1.rds.amazonaws.com:3306/clintdb');

// Option 2: Using parameters separately (recommended for easier configuration)
// const sequelize = new Sequelize('database_name', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'mysql',
//   port: 3306,
//   logging: false, // Set to console.log to see SQL queries
// });

export default sequelize;