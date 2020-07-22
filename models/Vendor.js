const Sequelize = require('sequelize');
const db = require('../config/database');

const Vendor= db.define('vendors', {
    // attributes
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
	},
	locationId: {
        
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING
	},
	email: {
        type: Sequelize.STRING
	},
	phone: {
        type: Sequelize.STRING
	},
	status: {
        type: Sequelize.INTEGER
	},
});

export default Vendor