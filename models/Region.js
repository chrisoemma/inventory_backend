const Sequelize = require('sequelize');
const db = require('../config/database');

const Region= db.define('regions', {
    // attributes
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
	},
    name: {
        type: Sequelize.STRING
	},
	
   
});

export default Region