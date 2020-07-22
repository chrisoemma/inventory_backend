const Sequelize = require('sequelize');
const db = require('../config/database');

const Expense= db.define('expenses', {
    // attributes
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
	},
	expCategory: {
        
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING
	},
	
   
});

export default Expense