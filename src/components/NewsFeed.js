import { useEffect, useState } from "react"
import axios from 'axios'


const NewsFeed = () => {
  const [articles, setArticles] = useState(null)

  useEffect(() => {
    

    const/* var */ options = {
      method: 'GET',
      url: 'https://crypto-news-live3.p.rapidapi.com/news',
      headers: {
        'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com',
        'X-RapidAPI-Key': '1bedd33a7bmsh412773e47664cc3p19bb9djsn252c65851c22'
      }
    };

    axios.request(options).then(function (response) {     //  zas dala arrow
      console.log(response.data);
      setArticles(response.data)
    }).catch(function (error) {
      console.error(error);
    });
  }, [])

  console.log(articles)
  
  return (
    <div className="news-feed">
      NewsFeed
    </div>
  )/* ; */
}

export default NewsFeed
