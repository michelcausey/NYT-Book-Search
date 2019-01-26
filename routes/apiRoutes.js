const axios = require("axios");
const router = require("express").Router();

router.get("/books", (req, res) => {
  axios
  .get(`https://www.googleapis.com/books/v1/volumes?q=${req.query.q}&key=AIzaSyCg2gkORQQTZ-24DleOxpUUj3Zp-5bbCgE`)
  .then(({ data: { results } }) => res.json(results))
  .catch(err => res.status(422).json(err))
  console.log(results)
});

module.exports = router;
