const axios = require("axios");

const getQuote = (req, res, next) => {
    axios.get(`https://api.chucknorris.io/jokes/random`).then(
        response => {
            console.log(response.data.value);
            res.status(200).json(response.data)})
};

module.exports = {
    getQuote
}