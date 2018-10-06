const bodyParser = require('body-parser');
const express = require('express');
const allowCors = require('./cors');
const app = express();
const PORT = 5050;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(allowCors);

app.listen(PORT, () => console.log(`Server-side is running on port ${PORT}`));

module.exports = app;