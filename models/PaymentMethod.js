const Sequelize = require('sequelize');
const db = require('../config/database');

const PaymentMethod= db.define('payment_methods', {
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

export default PaymentMethod