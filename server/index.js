const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const router = require('./router.js');
const app = express();
const port = process.env.PORT || 3003;


app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.use('/api/reservations', router);

app.listen(port, () => console.log(`App listening on port ${port}!`));
