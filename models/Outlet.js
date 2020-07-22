const Sequelize = require('sequelize');
const db = require('../config/database');

const Outlet= db.define('outlets', {
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

export default Outlet