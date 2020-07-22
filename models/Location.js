const Sequelize = require("sequelize");
const db = require("../config/database");

const Location = db.define("locations", {
  // attributes
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  regionId: {
    type: Sequelize.INTEGER,
  },
  name: {
    type: Sequelize.STRING,
  },
});

export default Location;
