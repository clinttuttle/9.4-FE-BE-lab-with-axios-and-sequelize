import express from 'express';
import cors from 'cors';
import sequelize from './config/database.js';
import Employee from './models/employee.js';

const app = express();
app.use(cors());
app.use(express.json());

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

 
sequelize.sync(); // Ensures models/tables are created


// GET all employees
app.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST add new employee
app.post('/employees', async (req, res) => {
  const { first_name, last_name, email, birthdate, salary } = req.body;
  try {
    const newEmployee = await Employee.create({
      first_name,
      last_name,
      email,
      birthdate: birthdate ? new Date(birthdate) : null,
      salary: salary ? parseFloat(salary) : null
    });
    res.json(newEmployee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
