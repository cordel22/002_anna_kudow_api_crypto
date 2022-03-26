const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()

app.use(cors())

app.get('/', (req,res) => {
  res.json('hi')
})

app.get('/news', (req,res) => {
  const/* var */ options = {
    method: 'GET',
    url: 'https://crypto-news-live3.p.rapidapi.com/news',
    headers: {
      'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
    }
  };

  axios.request(options).then(function (response) {     //  zas dala arrow
    /* console.log(response.data); */
    res.json(response.data);
    /* setArticles(response.data) */
  }).catch(function (error) {
    console.error(error);
  });
})

app.listen(8000, () => console.log(`Server is running on port $(PORT)`))
