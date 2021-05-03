const express = require('express');

const PORT = 80;
const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
});

app.listen(PORT, () => {
    console.log(`App is up on ${PORT}`);
});