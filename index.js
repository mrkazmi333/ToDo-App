const express = require('express');

const app = express();

const port = 8000;
const db = require('./config/mongoose');
const ToDo = require('./models/todo');

//Use express router
app.set('view engine', 'ejs');
app.set('views','./views');
app.use(express.urlencoded());
app.use(express.static('./assets'));
app.use('/', require('./routes'));

app.listen(port, function(error){
    if(error){
        console.log(`Error in the running the server: ${error}`);
    }
    console.log(`Server is up and running on port: ${port}`);
})
