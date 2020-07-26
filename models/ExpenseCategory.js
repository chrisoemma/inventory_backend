const Sequelize = require('sequelize');
const db = require('../config/database');

const ExpenseCategory= db.define('expense_categories', {
    // attributes
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
	},
    name: {
        type: Sequelize.STRING
	},
    code: {
        type: Sequelize.STRING
	},
   
});

export default ExpenseCategory