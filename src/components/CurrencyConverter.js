//  import React from 'react'
import { useState } from 'react'
import ExchangeRate from "./ExchangeRate"
import axios from 'axios'

const CurrencyConverter = () => {
  const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA']
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC')
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC')
  const [amount, setAmount] = useState(1)

  console.log(chosenSecondaryCurrency)

  const convert = () => {
    /* var axios = require("axios").default; */

const/* var */ options = {
  method: 'GET',
  url: 'https://alpha-vantage.p.rapidapi.com/query',
  params: {to_currency: chosenSecondaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', from_currency: chosenPrimaryCurrency},
  headers: {
    'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
    'X-RapidAPI-Key': '1bedd33a7bmsh412773e47664cc3p19bb9djsn252c65851c22'
  }
};

axios.request(options).then(/* function  */(response) => {   //  cubk dala ()=>
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
  }

  return (
    <div className="currency-converter">
      <h2>CurrencyConcerter</h2>
        <div className="input-box">
          <table>
            <tbody>
              <tr>
                <td>Primary Currency:</td>
                <td>
                  <input 
                    type="number"
                    name="currency-amount-1"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    />
                </td>
                <td>
                  <select
                    value={chosenPrimaryCurrency}
                    name="currency-option-1"
                    className="currency-options"
                    onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                    >
                      {currencies.map(( currency, _index ) => (<option key={_index}>{currency}</option>))}
                    <option>
                    
                    </option></select>
                </td>
              </tr>
              <tr>
                <td>Secondary Currency:</td>
                <td>
                  <input 
                    type="number"
                    name="currency-amount-2"
                    value={""}
                    />
                </td>
                <td>
                  <select
                    value={chosenSecondaryCurrency}
                    name="currency-option-2"
                    className="currency-options"
                    onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                    >
                      {currencies.map(( currency, _index ) => (<option key={_index}>{currency}</option>))}
                    <option>
                    
                    </option></select>
                </td>
              </tr>
            </tbody>
          </table>
          
          <button id="convert-button" onClick={convert}>Convert</button>
          
          </div>
      
      <ExchangeRate />
    </div>
  )
}

export default CurrencyConverter