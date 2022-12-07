const Sequelize = require("sequelize");
const {sequelize} = require("../db");

const Animals = sequelize.define("animals", {
    name: Sequelize.STRING,
    genus: Sequelize.STRING
})

module.exports = {Animals};