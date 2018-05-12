const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const totalControl = require(__dirname + '/controllers/MainControl');

const app = express();

app.use(bodyParser.json());


app.get("/api/quotes/random", totalControl.getQuote);


const port = 3001;
app.listen( port, () => {console.log (`Listeningggg on port ${port}`);});