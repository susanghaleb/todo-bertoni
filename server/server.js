const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const properties = require('./config/properties');
const router= require('./routes');



const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());

app.use('/todo', router)


app.listen(properties.PORT, () => {
    console.log(`Server is running on ${properties.PORT} port.`);
})