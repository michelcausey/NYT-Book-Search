const axios = require("axios");
const router = require("express").Router();

router.get("/books", (req, res) => {
  axios.get('https://www.googleapis.com/books/v1/volumes?q=${req.query.q}&key=AIzaSyCg2gkORQQTZ-24DleOxpUUj3Zp-5bbCgE').then(results => res.json(results.data.items)).catch(err => res.status(422).json(err));
});

module.exports = router;
