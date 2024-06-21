const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const mongoDBUrl = 'mongodb://localhost:27017/gra';
mongoose.connect(mongoDBUrl)
  .then(() => console.log('Logowanie połączone z bazą'))
  .catch(err => console.error('Błąd połączenia logowania z bazą', err));
const schematUżytkownika = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
});
const Gracz = mongoose.models.Gracz || mongoose.model('Gracz', schematUżytkownika, 'Gracz');
router.post('/loguj', async (req, res) => {
  const { Username, Password } = req.body;

  if (!Username || !Password) {
    return res.status(400).send('Missing information');
  }

  try {
    const user = await Gracz.findOne({ username: Username, password: Password });
    if (!user) {
      return res.status(400).send('Nieprawidłowa nazwa użytkownika lub hasło');
    }
    const token = jwt.sign({ id: user._id, username: user.username }, 'secretKey', { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true, secure: true });

    res.send('Logowanie udane');
  } catch (err) {
    res.status(500).send('Błąd zapytania do bazy: ' + err);
  }
});

module.exports = router;
