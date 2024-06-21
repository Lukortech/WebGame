const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const mongoDBUrl = 'mongodb://localhost:27017/gra';
mongoose.connect(mongoDBUrl)
  .then(() => console.log('Rejestrowanie połączone z bazą'))
  .catch(err => console.error('Błąd połączenia rejestrowania z bazą', err));

const schematUżytkownika = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
});

const Gracz = mongoose.model('Gracz', schematUżytkownika, 'Gracz');

router.post('/rejestruj', async (req, res) => {
  const { Username, Password, ConfirmPassword, Email } = req.body;
  if (!Username || !Password || !ConfirmPassword || !Email) {
    return res.status(400).send('Missing information');
  }
  if (Password !== ConfirmPassword) {
    return res.status(400).send('Passwords are not identical');
  }
try {
    const istniejącyGracz = await Gracz.findOne({ username: Username});
    if (istniejącyGracz) {
        return res.status(400).send('Użytkownik z tym email już istnieje');
    }
  const nowyUżytkownik = new Gracz({
    username: Username,
    password: Password,
    email: Email,
  });

  await nowyUżytkownik.save()
  res.send('Użytkownik został zapisany do bazy danych.');
} catch (err) {
  res.status(500).send('Błąd zapisu użytkownika do bazy danych: ' + err);
}
});

module.exports = router;