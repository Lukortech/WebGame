const mongoose = require("mongoose");
// It's generally a good idea to keep ports in one place if you ever need it for CI/CD and such.
const mongoDBUrl = 'mongodb://localhost:27017/game';

mongoose.connect(mongoDBUrl)
  .then(() => console.log('Map creator succesfully connected.'))
  .catch(err => console.error('Error while trying to connect to the DB', err));

const mapSchema = new mongoose.Schema({
    name: { type: String, required: true },
    players: { type: [String], required: true },
    speed: { type: Number, required: true },
    type: { type: Number, required:true},
});

const Player = mongoose.model('EU_Map', schematMapy, 'UE Server');

const playerSchema = new mongoose.Schema({
  provinces: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Province' }],
  combatUnits: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BattleUnit' }],
});
