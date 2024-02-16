const express = require('express');
const path = require('path');

const app = express();



//parse url-encoded bodies (as sent by html forms)
app.use(express.urlencoded({extended: false}));
//parse json bodies (as sent by api clients)
app.use(express.json());

app.set('view engine', 'html');

//define routes
//to go to the other page
app.use('/', require('./routes/pages'));

app.listen(3001, () => {
    console.log(`Server started on Port 3000`);
  });