const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const router = require('./router.js');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.use('/api', router);

app.listen(port, () => console.log(`App listening on port ${port}!`))