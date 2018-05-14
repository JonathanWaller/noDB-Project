
const axios = require("axios");

let newJoke = [];
let favorites = [];
let newId = 1;


const getJoke = (req, res) => {
    axios.get(`https://api.chucknorris.io/jokes/random`).then(
        response => {
            console.log(response.data.value);
            res.status(200).json(response.data)})
};

const getFavorites = (req, res) => {
    res.status(200).json(favorites);
}

const addFavorite = (req, res) => {
    favorites.push({joke: req.body.joke, id: newId});
    newId++;
    res.status(200).json(favorites);
};


const editFavorite = (req, res) => {
    let { id } = req.params;
    let { joke } = req.body;
    let index = favorites.findIndex(e => e.id===parseInt(id))
    favorites[index] = {joke, id: parseInt(id)}
    newId++;
    console.log(id)

    res.status(200).json(favorites);
};

const deleteFavorite = (req, res) => {
    for (let i = 0; i < favorites.length; i++) {
        if (favorites[i].id === parseInt(req.params.id)){
            favorites.splice(i,1);
            return res.status(200).json(favorites);
        }
        
    }
 
    res.status(200).json(favorites);
}

module.exports = {
    getJoke,
    addFavorite,
    editFavorite,
    deleteFavorite,
    getFavorites
}
















