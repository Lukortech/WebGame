const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const rejPrzekierowanie = require('./rejestracja');
const logPrzekierowanie = require('./logowanie')
const app = express();
const port = 8080;

app.use(express.static('publiczne'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'publiczne', 'logowanie.html'));
});
app.use('/autoryzacja', express.static(path.join(__dirname, 'publiczne', 'grafika', 'autoryzacja')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/', rejPrzekierowanie);
app.use('/', logPrzekierowanie);
app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});