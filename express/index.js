const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');

// const PORT = 3000;

const app = express();
app.use(bodyParser.json());

const router = express.Router();
router.get('/api-travel', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello from Express.js!</h1>');
    res.end();
});

// app.listen(PORT, () => {
//     console.log(`App is up on ${process.env.PORT || PORT}`);
// });

module.exports.handler = serverless(app);