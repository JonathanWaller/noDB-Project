const express = require('express');
const bodyParser = require('body-parser');

const totalControl = require(__dirname + '/controllers/MainControl');

const app = express();

app.use(bodyParser.json());


app.get("/api/jokes/random", totalControl.getJoke);
app.post("/api/jokes", totalControl.addFavorite);
app.get("/api/jokes", totalControl.getFavorites);
app.put("/api/jokes/:id", totalControl.editFavorite);
app.delete("/api/jokes/:id", totalControl.deleteFavorite);

const port = 3001;
app.listen( port, () => {console.log (`Listeninggggg on port ${port}`);});





