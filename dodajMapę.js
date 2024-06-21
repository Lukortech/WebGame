const mongoose = require("mongoose");
const mongoDBUrl = 'mongodb://localhost:27017/gra';
mongoose.connect(mongoDBUrl)
  .then(() => console.log('Tworzyciel map połączonu z bazą'))
  .catch(err => console.error('Błąd połączenia rejestrowania z bazą', err));

const schematMapy = new mongoose.Schema({
    nazwa: { type: String, required: true },
    gracze: { type: [String], required: true },
    szybkość: { type: Number, required: true },
    typ: { type: Number, required:true},
});
const Gracz = mongoose.model('Mapa EU', schematMapy, 'Serwer EU');
const schematGracza = new mongoose.Schema({
provinces: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Prowincja' }],
    combatUnits: [{ type: mongoose.Schema.Types.ObjectId, ref: 'JednostkaBojowa' }],
  });