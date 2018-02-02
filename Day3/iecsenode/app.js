const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const movies = require('./routes/movies');

const app = express();

app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/movies', movies);

app.listen(3000);
console.log('listening on port 3000');