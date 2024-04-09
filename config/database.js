const Sequelize = require("sequelize");

const database = new Sequelize("cricket-career-app", "root", "root", {
    dialect: "mysql",
    host: "localhost"
})

module.exports = database;