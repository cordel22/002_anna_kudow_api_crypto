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

app.get('/convert', (req,res) => {
  /* console.log(req.query.to_currency) */
  const toCurrency = req.query.to_currency
  const fromCurrency = req.query.from_currency
  console.log('toCurrency', toCurrency)
  console.log('fromCurrency', fromCurrency)

  const/* var */ options = {
    method: 'GET',
    url: 'https://alpha-vantage.p.rapidapi.com/query',
    params: {to_currency: toCurrency/* chosenSecondaryCurrency */, function: 'CURRENCY_EXCHANGE_RATE', from_currency: fromCurrency/* chosenPrimaryCurrency */},
    headers: {
      'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
    }
  };
  
  axios.request(options).then(/* function  */(response) => {   //  cubk dala ()=>
    res.json(response.data['Realtime Currency Exchange Rate']["5. Exchange Rate"])
    /* console.log(response.data['Realtime Currency Exchange Rate']["5. Exchange Rate"]) */
    //  setExchangeRate(response.data['Realtime Currency Exchange Rate']["5. Exchange Rate"])
    /* setResult(response.data['Realtime Currency Exchange Rate']["5. Exchange Rate"] * amount) */
    // setPrimaryCurrencyExchanged(chosenPrimaryCurrency)
    // setSecondaryCurrencyExchanged(chosenSecondaryCurrency)
    /* setExchangedData({
      primaryCurrency: chosenPrimaryCurrency,
      secondaryCurrency: chosenSecondaryCurrency,
      exchangeRate: response.data['Realtime Currency Exchange Rate']["5. Exchange Rate"]
    }) */
  }).catch(function (error) {
    console.error(error);
  });
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
