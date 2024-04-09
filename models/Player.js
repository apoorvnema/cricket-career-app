const { DataTypes } = require("sequelize");

const database = require("../config/database");

const Player = database.define('Player', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dob: {
        type: DataTypes.STRING,
        allowNull: false
    },
    photoUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthplace: {
        type: DataTypes.STRING,
        allowNull: false
    },
    career: {
        type: DataTypes.STRING,
        allowNull: false
    },
    matches: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fifties: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    centuries: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    wickets: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    average: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});


module.exports = Player;