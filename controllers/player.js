const Sequelize = require("sequelize");

const Player = require("../models/Player");

exports.getPlayer = async (req, res) => {
    try {
        const playerName = req.query.name;
        const playerDetails = await Player.findOne({ where: { name: { [Sequelize.Op.like]: `%${playerName}%` } } });
        res.status(200).json(playerDetails);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to get player details' });
    }
};

exports.addPlayer = async (req, res) => {
    try {
        const result = await Player.create(req.body);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to add player' });
    }
};

exports.editPlayer = async (req, res) => {
    try {
        const playerId = req.params.id;
        const player = await Player.findByPk(playerId);
        if (!player) {
            return res.status(404).json({ error: 'Player not found' });
        }
        await player.destroy();
        res.status(200).json({ message: 'Player deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete player' });
    }
};