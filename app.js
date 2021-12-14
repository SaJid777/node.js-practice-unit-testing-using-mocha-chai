const express = require('express');

const port = 3000;
const host = 'localhost';

const app = express();

app.use('/user',require('./routes/users'))

app.listen(port,host,() => {
    console.log(`Server started at http://${host}:${port}`)
})