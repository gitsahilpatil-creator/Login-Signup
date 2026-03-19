const express = require('express');
const path = require('path');

const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server Working');
});

app.listen(PORT, () => console.log('Server Started'));